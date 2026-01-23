const express= require("express")
const router = express.Router()

const postController=require('../controllers/post.controllerss')
router.get('/all',postController.getallpost)
module.exports=router