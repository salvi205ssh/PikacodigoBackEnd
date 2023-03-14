"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const User_repository_1 = require("../models/User.repository");
var enumLogin;
(function (enumLogin) {
    enumLogin[enumLogin["si"] = 0] = "si";
    enumLogin[enumLogin["no"] = 1] = "no";
})(enumLogin || (enumLogin = {}));
var enumRol;
(function (enumRol) {
    enumRol[enumRol["admin"] = 0] = "admin";
    enumRol[enumRol["user"] = 1] = "user";
})(enumRol || (enumRol = {}));
class UserService {
    constructor() {
        this.UserRepository = new User_repository_1.UserRepository();
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this.UserRepository.getAllUser().then(result => {
                let users = [];
                result.forEach(dbUser => {
                    console.log(dbUser);
                    console.log("getUsers");
                });
                return users;
            }).catch(err => {
                console.error('error');
                console.error(err);
                throw (err);
            });
            return userPromise;
        });
    }
}
exports.UserService = UserService;
