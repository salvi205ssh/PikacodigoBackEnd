"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
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
class UserDto {
    constructor(data) {
        this.userId = data.userId;
        this.userName = data.userName;
        this.userLastName = data.userLastName;
        this.userBirthday = data.userBirthday;
        this.userEmail = data.userEmail;
        this.userPhone = data.userPhone;
        this.userLogin = data.userLogin;
        this.userRol = data.userRol;
        this.userAddress = data.userAddress;
    }
}
exports.UserDto = UserDto;
