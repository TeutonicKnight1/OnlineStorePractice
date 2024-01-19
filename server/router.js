const usersController = require('./controllers/UsersController')
const productsController = require("./controllers/ProductsController")

const router = require("express").Router();

const authOnly = require("./middleware/authOnly")

const userRouter = require("express").Router();
const adminRouter = require("express").Router();
const productsRouter = require("express").Router();

productsRouter.get("/getAll", productsController.getAll)

userRouter.post("/register", usersController.register)
userRouter.post("/login", usersController.login)

userRouter.post("/hello", [authOnly], usersController.getHello);

router.use("/products", productsRouter)
router.use("/user", userRouter)
router.use("/admin", adminRouter)

module.exports = router;