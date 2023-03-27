import { Table, Column, Model } from "sequelize-typescript";
import { STRING } from "sequelize";

@Table({
    freezeTableName: true,
    tableName: 'review',
    schema: 'public',
    createdAt: false,
    updatedAt: false
})
export class ReviewPojo extends Model {
    @Column({
        primaryKey: true,
        type: STRING,
        field: 'review_id'
    })
    review_id: string;

    @Column({
        type: STRING,
        field: 'content'
    })
    content: string;

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
