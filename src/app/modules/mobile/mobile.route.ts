import  express  from "express";
import { mobileControllers } from "./mobile.controller";

const router = express.Router();

router.post('/create-mobile', mobileControllers.createMobile) //will call controller
router.get('/get-all-mobiles',mobileControllers.getAllmobiles)


export const mobileRoutes = router;