import { Table, Column, Model } from 'sequelize-typescript'
import { STRING } from 'sequelize'

@Table({
    freezeTableName: true,
    schema: 'public',
    tableName: 'game_picture',
    createdAt: false,
    updatedAt: false
})
export class Game_picturePojo extends Model {
    @Column({
        primaryKey: true,
        type: STRING,
        field: 'game_picture_id'
    })
    game_picture_id: string

    @Column({
        type: STRING,
        field: 'picture'
    })
    picture: string

    @Column({
        type: STRING,
        field: 'game_id'
    })
    game_id: string

    createAt: Date;

    updateAt: Date;
}