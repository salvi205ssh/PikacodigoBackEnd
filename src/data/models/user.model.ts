import { DATE, STRING } from "sequelize";
import { Table, Column, Model } from "sequelize-typescript";

@Table({
  freezeTableName: true,
  schema: "public",
  tableName: "user",
  createdAt: false,
  updatedAt: false,
})
export class UserPojo extends Model {
  @Column({
    primaryKey: true,
    type: STRING,
    field: "user_id",
  })
  user_id: string;

  @Column({
    type: STRING,
    field: "username",
  })
  username: string;

  @Column({
    type: STRING,
    field: "fullname",
  })
  fullname: string;

  @Column({
    type: STRING,
    field: "password",
  })
  password: string;

  @Column({
    type: DATE,
    field: "birthdate",
  })
  birthdate: Date;

  @Column({
    type: STRING,
    field: "email",
  })
  email: string;

  @Column({
    type: STRING,
    field: "phone",
  })
  phone: string;

  @Column({
    type: STRING,
    field: "login",
  })
  login: string;

  @Column({
    type: STRING,
    field: "rol",
  })
  rol: string;

  @Column({
    type: STRING,
    field: "picture",
  })
  picture: string;

  @Column({
    type: STRING,
    field: "status",
  })
  status: string;

  createdAt: Date;

  updateAt: Date;
}