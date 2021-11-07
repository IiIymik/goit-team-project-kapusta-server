const express = require('express');
const router = express.Router()
const {registration, login, logout, verify} = require("../../controllers")
const {
  controllerWrapper,
  validation,
  authenticate,
} = require("../../middlewares");

const { joiSchema } = require("../../model/user.js");
router.post(
    "/registration",
    validation(joiSchema),
    controllerWrapper(registration)
);

router.get("/verify/:verifyToken", controllerWrapper(verify));
router.post("/login", validation(joiSchema), controllerWrapper(login));
router.get("/logout", authenticate, controllerWrapper(logout));

module.exports = router;