import bcryptjs from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { User, List } from '../../database/models';
import { UserValidation } from '../../utils/validation';
import { IResponse, IUser, IValidation } from '../../interfaces';

class UserServices {
  public response: IResponse;

  public async SignUp(user: IUser) {
    try {
      const isValid: IValidation = await UserValidation.SignUpIsValid(user);

      if (isValid.success) {
        const hash = await bcryptjs.hash(user.password, 9);

        const newUser = new User({
          firstName: user.firstName,
          lastName: user.lastName,
          nickName: user.nickName,
          email: user.email,
          password: hash,
        });

        const created = await newUser.save();

        new List({
          userId: newUser.id,
        }).save();

        const token = sign(
          {
            nickName: created.nickName,
            email: created.email,
          },
          process.env.JWT_SECRET,
          { expiresIn: '7d' },
        );

        this.response = {
          success: true,
          status: 201,
          data: created,
          token: token,
        };

        return this.response;
      }

      this.response = {
        success: false,
        status: 400,
        errors: isValid.errors,
      };

      return this.response;
    } catch (err) {
      if (err instanceof Error) {
        this.response = {
          success: false,
          status: 503,
          errors: [err.message],
        };

        return this.response;
      }
    }
  }

  public async SignIn(user: IUser) {
    try {
      const isValid: IValidation = await UserValidation.SignInIsValid(user);

      if (isValid.success) {
        const token = sign(
          {
            nickName: isValid.data.nickName,
            email: isValid.data.email,
          },
          process.env.JWT_SECRET,
          { expiresIn: '7d' },
        );

        this.response = {
          success: true,
          status: 202,
          data: isValid.data,
          token: token,
        };

        return this.response;
      }

      this.response = {
        success: false,
        status: 400,
        errors: isValid.errors,
      };

      return this.response;
    } catch (err) {
      if (err instanceof Error) {
        this.response = {
          success: false,
          status: 503,
          errors: [err.message],
        };

        return this.response;
      }
    }
  }

  public async RefreshToken(id: string) {
    try {
      const isValid: IValidation = await UserValidation.RefreshTokenIsValid(id);

      if (isValid.success) {
        const token = sign(
          {
            nickName: isValid.data.nickName,
            email: isValid.data.email,
          },
          process.env.JWT_SECRET,
          { expiresIn: '7d' },
        );

        this.response = {
          success: true,
          status: 202,
          data: isValid.data,
          token: token,
        };

        return this.response;
      }

      this.response = {
        success: false,
        status: 400,
        errors: isValid.errors,
      };

      return this.response;
    } catch (err) {
      if (err instanceof Error) {
        this.response = {
          success: false,
          status: 503,
          errors: [err.message],
        };

        return this.response;
      }
    }
  }
}

export default new UserServices();
