import { Router } from 'express';
const router = Router();

import { loginRequired } from '../../middlewares';
import { UserController } from '../../controllers';

router.post('/', UserController.SignUp);
router.post('/signIn', UserController.SignIn);
router.get('/:id', loginRequired, UserController.RefreshToken);

export default router;
