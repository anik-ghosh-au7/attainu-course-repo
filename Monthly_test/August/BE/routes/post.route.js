// var express = require("express");
// var user_controller = require("../controllers/user.controller");
// var jwt = require("jsonwebtoken");

// const authenticateToken = (req, res, next) => {
//   const token = req.cookies["awtToken"];
//   if (!token) {
//     next();
//   } else {
//     jwt.verify(token, process.env.jwt_key, (err, data) => {
//       if (err) return res.status(403).send({ msg: "Unauthorized Forbidden" });
//       req.user = data.name;
//       next();
//     });
//   }
// };

// const router = express.Router();

// router.post("/createuser", authenticateToken, user_controller.createUser);

// router.post("/login", authenticateToken, user_controller.login);

// router.get("/loginPage", authenticateToken, user_controller.loginPage);

// router.get("/signPage", authenticateToken, user_controller.signPage);

// router.get("/logout", authenticateToken, user_controller.logout);

// module.exports = router;
