import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getBlogs = (req: Request, res: Response) => {
  res.send("estoy en getBlog");
  try {
    res.send("estoy en Blog");
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG")
  }
};

const getBlog = (req: Request, res: Response) => {
  try {
    res.send("estoy en getBlog");
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

const updateBlog = (req: Request, res: Response) => {
  res.send("estoy en updateBlog");
  
};

const postBlog = ({ body }: Request, res: Response) => {
  try {
    res.send("POST_BLOG");
  } catch (e) {
    handleHttp(res, "ERROR_POST_BLOG")
  }
};

const deleteBlog = (req: Request, res: Response) => {
  try {
    res.send("estoy en delete Blog");
  } catch (e) {
    handleHttp(res, "💥ERROR_DELETE_BLOG");
  }
};

console.log('aqui estoy controller');

export { getBlogs, getBlog, updateBlog, postBlog, deleteBlog };
