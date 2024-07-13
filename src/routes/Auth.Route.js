const express = require("express")
const {RegisterUserController, LoginUserController} = require("./../controller/Auth.controller")

const AuthRouter = express.Router()

AuthRouter.post('/signup', RegisterUserController)

AuthRouter.get('/signin', LoginUserController)

module.exports = AuthRouter