import { Router } from 'express';
const router = Router();

import infoController from '../../controllers';

router.get('/', infoController.infoApi);

export default router;
