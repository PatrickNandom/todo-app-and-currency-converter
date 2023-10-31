import { Router } from "express";
import { getPosts } from "../controllers/post.js";

export const postRouter = Router();

postRouter.get("/:id", getPosts);
