// importing package
import express from "express";

// middleware
import formidableMiddleware from "../middlewares/formidable/middleware";
import cloudinaryMiddleware from "../middlewares/upload/cloudinary.middleware";

// controller
import publicController from "../controllers/public.controller";

// route
let route = express.Router();

route.get("/search", publicController.searchController);

export default route;
