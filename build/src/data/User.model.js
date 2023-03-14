"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.INTEGER,
        primaryKey: true,
        comment: 'user_id'
    }),
    __metadata("design:type", Number)
], User.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        comment: 'user_name'
    }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        comment: 'user_lastname'
    }),
    __metadata("design:type", String)
], User.prototype, "userLastName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DATE,
        comment: 'user_birthdate'
    }),
    __metadata("design:type", Date)
], User.prototype, "userBirthdate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        comment: 'user_email'
    }),
    __metadata("design:type", String)
], User.prototype, "userEmail", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        comment: 'user_phone'
    }),
    __metadata("design:type", String)
], User.prototype, "userPhone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.ENUM,
        comment: 'user_login',
        values: ['si', 'no']
    }),
    __metadata("design:type", String)
], User.prototype, "userLogin", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.ENUM,
        comment: 'user_rol',
        values: ['admin', 'user']
    }),
    __metadata("design:type", String)
], User.prototype, "userRol", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        comment: 'user_address'
    }),
    __metadata("design:type", String)
], User.prototype, "userAddress", void 0);
User = __decorate([
    (0, sequelize_typescript_1.Table)({
        freezeTableName: true,
        tableName: 'USER'
    })
], User);
exports.User = User;
