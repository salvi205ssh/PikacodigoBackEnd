import { Table, Column, Model } from "sequelize-typescript";
import { STRING, DATE, INTEGER } from "sequelize";

@Table({
    freezeTableName: true,
    tableName: 'sale',
    schema: 'public',
    createdAt: false,
    updatedAt: false
})
export class SalePojo extends Model {
    @Column({
        primaryKey: true,
        type: STRING,
        field: 'sale_id'
    })
    sale_id: string;

    @Column({
        type: DATE,
        field: 'date'
    })
    date: Date;

    @Column({
        type: INTEGER,
        field: 'amount'
    })
    amount: number;

    @Column({
        type: STRING,
        field: 'game_id'
    })
    game_id: string;

    @Column({
        type: STRING,
        field: 'user_id'
    })
    user_id: string;

    createAt: Date;

    updateAt: Date;
}