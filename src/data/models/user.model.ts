import { DATE, STRING } from "sequelize";
import { Table, Column, Model } from "sequelize-typescript";

@Table({
  freezeTableName: true,
  schema: "public",
  tableName: "user",
  createdAt: false,
  updatedAt: false,
})
export class User extends Model {
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
    field: "lastname",
  })
  lastname: string;

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
    field: "active",
  })
  active: string;

  createdAt: Date;

  updateAt: Date;
}

export default User;
