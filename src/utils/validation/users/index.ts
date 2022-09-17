import bcryptjs from 'bcryptjs';
import { isEmail } from 'validator';
import { User } from '../../../database/models';
import { IUser, IValidation } from '../../../interfaces';

class UserValidation {
  private success = true;

  private async isIdExists(id: string) {
    const user = await User.findById({ _id: id });

    return user;
  }

  private async isEmailExists(email: string) {
    const user = await User.findOne({ email: email });

    return user;
  }

  private async isNickExists(nickName: string) {
    const user = await User.findOne({ nickName: nickName });

    return user;
  }

  private isPassword(password: string) {
    return password.length < 6 || password.length > 15 ? false : true;
  }

  public async SignUpIsValid(user: IUser): Promise<IValidation> {
    const errors: Array<string> = [];
    const emailExists = await this.isEmailExists(user.email);
    const nickExists = await this.isNickExists(user.nickName);

    if (emailExists) {
      this.success = false;
      errors.push('E-mail já cadastro.');
    }

    if (!isEmail(user.email)) {
      this.success = false;
      errors.push('E-mail inválido.');
    }

    if (nickExists) {
      this.success = false;
      errors.push('Nickname já cadastrado.');
    }

    if (!this.isPassword(user.password)) {
      this.success = false;
      errors.push('A senha deve ter de 6 a 15 caracteres.');
    }

    return {
      success: this.success,
      errors: errors,
    } as IValidation;
  }

  public async SignInIsValid(user: IUser): Promise<IValidation> {
    const errors: Array<string> = [];
    const userExists = await this.isNickExists(user.nickName);

    if (!userExists) {
      this.success = false;
      errors.push('Usuário não encontrado.');
    }

    if (userExists) {
      const passwordValid = await bcryptjs.compare(
        user.password,
        userExists.password,
      );

      if (!passwordValid) {
        this.success = false;
        errors.push('Senha incorreta.');
      }
    }

    return {
      success: this.success,
      data: userExists,
      errors: errors,
    } as IValidation;
  }

  public async RefreshTokenIsValid(id: string) {
    const errors: Array<string> = [];
    const userExists = await this.isIdExists(id);

    if (!userExists) {
      this.success = false;
      errors.push('Usuário não encontrado.');
    }

    return {
      success: this.success,
      data: userExists,
      errors: errors,
    } as IValidation;
  }
}

export default new UserValidation();
