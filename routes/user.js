const router=require("express").Router();
const userController=require("../controllers/user");

router.post("/signup",userController.signup); // Daftar
router.post("/signin",userController.signin); // Login
router.get("/users",userController.getAllUsers); // Display all users
router.get("/users/:id",userController.getUserById); // Get User by Id
router.post("/users",userController.createUser); // Create user
router.delete("/users/:id",userController.deleteUser); // Delete User by Id
router.put("/users/:id",userController.updateUser); // Update User by Id

module.exports=router;
