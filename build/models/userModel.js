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
exports.user = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
let user = class user extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.INTEGER,
        primaryKey: true,
        references: 'user_id'
    }),
    __metadata("design:type", Number)
], user.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        references: 'user_name'
    }),
    __metadata("design:type", String)
], user.prototype, "userName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        references: 'user_lastname'
    }),
    __metadata("design:type", String)
], user.prototype, "userLastName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DATE,
        references: 'user_birthdate'
    }),
    __metadata("design:type", Date)
], user.prototype, "userBirthdate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        references: 'user_email'
    }),
    __metadata("design:type", String)
], user.prototype, "userEmail", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        references: 'user_phone'
    }),
    __metadata("design:type", String)
], user.prototype, "userPhone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.ENUM,
        references: 'user_login',
        values: ['si', 'no']
    }),
    __metadata("design:type", String)
], user.prototype, "userLogin", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.ENUM,
        references: 'user_rol',
        values: ['admin', 'user']
    }),
    __metadata("design:type", String)
], user.prototype, "userRol", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        references: 'user_address'
    }),
    __metadata("design:type", String)
], user.prototype, "userAddress", void 0);
user = __decorate([
    (0, sequelize_typescript_1.Table)({
        freezeTableName: true,
        tableName: 'user'
    })
], user);
exports.user = user;
exports.default = user;
