let router = require("express").Router();

//Controllers
var userController = require("../controllers/user.controller");



router.route("/createLoginUser").post(userController.createLoginUser);
router.route("/createUser").post(userController.createUser);
router.route("/getUserList").get(userController.getUserList);
router.route("/updateUserInfo").patch(userController.updateUserInfo);
router.route("/deleteUser").delete(userController.deleteUser); 


module.exports = router;
