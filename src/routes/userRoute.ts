import { deleteUser, getUser, getUsers, postUser, updatetUser } from '../controllers/user.controller';
import {Router} from 'express';

const router: Router = Router();

router.get('/getUsers', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.post('/', postUser);
router.put('/:id', updatetUser);

export default router;