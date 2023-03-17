import { DATE, INTEGER, STRING } from "sequelize";
import { Table, Column, Model } from "sequelize-typescript";

@Table({
  freezeTableName: true,
  tableName: "user",
})
export class User extends Model {
  @Column({
    type: INTEGER,
    primaryKey: true,
    references: "user_id",
  })
  userId!: number;

  @Column({
    type: STRING,
    references: "user_name",
  })
  userName!: string;

  @Column({
    type: STRING,
    references: "user_lastname",
  })
  userLastName!: string;

  @Column({
    type: DATE,
    references: "user_birthdate",
  })
  userBirthdate!: Date;

  @Column({
    type: STRING,
    references: "user_email",
  })
  userEmail!: string;

  @Column({
    type: STRING,
    references: "user_phone",
  })
  userPhone!: string;

  @Column({
    type: STRING,
    references: "user_login",
    values: ["si", "no"],
  })
  userLogin!: string;

  @Column({
    type: STRING,
    references: "user_rol",
    values: ["admin", "user"],
  })
  userRol!: string;

  @Column({
    type: STRING,
    references: "user_address",
  })
  userAddress!: string;

  @Column({
    type: STRING,
    references: "active",
  })
  active!: string;
}

export default User;
