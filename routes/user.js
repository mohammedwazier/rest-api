const router=require("express").Router();
const userController=require("../controllers/user");
const userMiddleware=require("../middlewares/login");

// Daftar
router.post("/signup",userController.signup);

// Login
router.post("/signin",userMiddleware.checkLogin,userController.signin);

// Display all users (Only Admin)
router.get("/users",userMiddleware.isLoggedIn,userMiddleware.checkAdmin,userController.getAllUsers);

// Get User by Id (Admin & Owner)
router.get("/users/:id",userMiddleware.isLoggedIn,userMiddleware.checkOwner,userController.getUserById);

// Create user (Only Admin)
router.post("/users",userMiddleware.isLoggedIn,userMiddleware.checkAdmin,userController.createUser);

// Delete User by Id (Only Admin)
router.delete("/users/:id",userMiddleware.isLoggedIn,userMiddleware.checkAdmin,userController.deleteUser);

// Update User by Id (Admin & Owner)
router.put("/users/:id",userMiddleware.isLoggedIn,userMiddleware.checkOwner,userController.updateUser);

module.exports=router;
