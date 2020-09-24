import { Router } from "express";

import * as endpoints from "./constants/endpoints";
import * as userController from "./controllers/login";
import { validateUserLogin, validateUserCreation, } from "./schemas/user_login";

const router = Router();

router.get("/", (req, res, next) => {
  res.json({
    name: "Quote App",
    version: "1.0.0",
  });
});


router.post(
  endpoints.USER_LOGIN,
  validateUserLogin,
  userController.userLogin
);


router.post(
    endpoints.CREATE_POST,
    quoteController.createPOST
  );
    
export default router;