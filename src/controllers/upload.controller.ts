import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { RequestExt } from "../interface/RequestExt.interface";
import { Storage } from "../interface/storage.interface";
import { registerUpload } from "../services/storage.service";
import { handleHttp } from "../utils/error.handle";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_FILE");
  }
};

export { getFile };