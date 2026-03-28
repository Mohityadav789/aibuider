// routes/userRoutes.ts
import express from 'express';
import { 
  createUserProject, 
  getUserCredits, 
  getUserProject, 
  getUserProjects, 
  purchaseCredits, 
  togglePublish 
} from '../controllers/userController';
import { protect } from '../middlewares/auth';

const userRouter = express.Router();

userRouter.use(protect);
userRouter.get('/projects', getUserProjects);
userRouter.get('/projects/:projectId', getUserProject);
userRouter.post('/projects', createUserProject);
userRouter.post('/projects/:projectId/toggle', togglePublish);
userRouter.get('/credits', getUserCredits);
userRouter.post('/purchase-credits', purchaseCredits);


export default userRouter;