import { Table, Column, Model } from "sequelize-typescript";
import { STRING, DATE, NUMBER } from "sequelize";

@Table({
    freezeTableName: true,
    tableName: 'message',
    schema: 'public',
    createdAt: false,
    updatedAt: false
})
export class MessagePojo extends Model {
    @Column({
        primaryKey: true,
        type: STRING,
        field: 'message_id'
    })
    message_id: string;

    @Column({
        type: STRING,
        field: 'content'
    })
    content: string;

    @Column({
        type: DATE,
        field: 'date'
    })
    date: Date;

    @Column({
        type: STRING,
        field: 'user_from_id'
    })
    user_from_id: string;

    @Column({
        type: STRING,
        field: 'user_to_id'
    })
    user_to_id: string;

    @Column({
        type: NUMBER,
        field: 'read'
    })
    read: number;

    createAt: Date;

    updateAt: Date;
}