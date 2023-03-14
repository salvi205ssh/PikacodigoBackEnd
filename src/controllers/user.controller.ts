import { Request, Response } from "express";
import userModel from "../data/models/userModel";

const getUsers = (_req: Request, res: Response) => {

  res.json({
    msg: "get User",
  });
};

const getUser = (req: Request, res: Response) => {
  res.json({
    msg: "get User",
    id: req.params.id,
  });
};

const deleteUser = (req: Request, res: Response) => {
  res.json({
    msg: "delete Users",
    id: req.params.id,
  });
};

const postUser = (req: Request, res: Response) => {
  const { body } = req;
  res.json({
    msg: "post Users",
    body: body,
  });
};

const updatetUser = (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  res.json({
    msg: "Update Users",
    id: id,
    body: body,
  });
};

export { getUser, getUsers, deleteUser, postUser, updatetUser };
