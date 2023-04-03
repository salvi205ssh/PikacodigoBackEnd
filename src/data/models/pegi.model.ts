import { Table, Column, Model } from "sequelize-typescript";
import { STRING } from "sequelize";

@Table({
    freezeTableName: true,
    tableName: 'pegi',
    schema: 'public',
    createdAt: false,
    updatedAt: false
})
export class PegiPojo extends Model {
    @Column({
        primaryKey: true,
        type: STRING,
        field: 'pegi_id'
    })
    pegi_id: string;

    @Column({
        type: STRING,
        field: 'name'
    })
    name: string;

    createAt: Date;

    updateAt: Date;
}