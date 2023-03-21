import { DATE, INTEGER, STRING } from "sequelize";
import { Table, Column, Model } from "sequelize-typescript";

@Table({
  freezeTableName: true,
  tableName: "user",
  createdAt: false,
  updatedAt: false
})
export class User extends Model {
  @Column({
    type: INTEGER,
    primaryKey: true,
    field: "user_id",
  })
  userId!: number;

  @Column({
    type: STRING,
    field: "user_name",
  })
  username!: string;

  @Column({
    type: STRING,
    field: "user_lastname",
  })
  userlastname!: string;

  @Column({
    type: DATE,
    field: "user_birthdate",
  })
  userbirthdate!: Date;

  @Column({
    type: STRING,
    field: "user_email",
  })
  useremail!: string;

  @Column({
    type: STRING,
    field: "user_phone",
  })
  userphone!: string;

  @Column({
    type: STRING,
    field: "user_login",
    values: ["si", "no"],
  })
  userlogin!: string;

  @Column({
    type: STRING,
    field: "user_rol",
    values: ["admin", "user"],
  })
  userrol!: string;

  @Column({
    type: STRING,
    field: "user_address",
  })
  useraddress!: string;

  active!: string;

  createdAt: Date;

  updateAt: Date;
}

export default User;
