"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatetUser = exports.postUser = exports.deleteUser = exports.getUsers = exports.getUser = void 0;
//import userModel from "../data/models/userModel";
const getUsers = (_req, res) => {
    res.json({
        msg: "get User",
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    res.json({
        msg: "get User",
        id: req.params.id,
    });
};
exports.getUser = getUser;
const deleteUser = (req, res) => {
    res.json({
        msg: "delete Users",
        id: req.params.id,
    });
};
exports.deleteUser = deleteUser;
const postUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: "post Users",
        body: body,
    });
};
exports.postUser = postUser;
const updatetUser = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "Update Users",
        id: id,
        body: body,
    });
};
exports.updatetUser = updatetUser;
