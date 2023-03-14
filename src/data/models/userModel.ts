import { INTEGER, STRING } from "sequelize";
import { Table, Column, Model } from "sequelize-typescript";

@Table({
  freezeTableName: true,
  tableName: "user",
})
export class user extends Model {
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

  /*    @Column({
        type: DATE,
        references: 'user_birthdate'
    })
    userBirthdate!: Date

    @Column({
        type: STRING,
        references: 'user_email'
    })
    userEmail!: string

    @Column({
        type: STRING,
        references: 'user_phone'
    })
    userPhone!: string

    @Column({
        type: ENUM,
        references: 'user_login',
        values: ['si', 'no']
    })
    userLogin!: string

    @Column({
        type: ENUM,
        references: 'user_rol',
        values: ['admin', 'user']
    })
    userRol!: string

    @Column({
        type: STRING,
        references: 'user_address'
    })
    userAddress!: string */
}

export default user;
