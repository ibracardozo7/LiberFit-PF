const { Router } = require("express")
const postGym= require("../controllers/gymControllers")
const routerGym= Router();
const {isAuthenticated}= require('../Helpers/auth')
routerGym.post("/gym",postGym);

module.exports =routerGym 
