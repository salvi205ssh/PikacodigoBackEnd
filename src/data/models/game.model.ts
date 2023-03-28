import { Table, Column, Model } from 'sequelize-typescript'
import {STRING, NUMBER} from 'sequelize'

@Table({
    freezeTableName: true,
    schema: 'public',
    tableName: 'game',
    createdAt: false,
    updatedAt: false
})
export class GamePojo extends Model {
    @Column({
        primaryKey: true,
        type: STRING,
        field: 'game_id'
    })
    game_id: string

    @Column({
        type: STRING,
        field: 'name'    
    })
    name: string

    @Column({
        type: STRING,
        field: 'distributor'
    })
    distributor: string

    @Column({
        type: NUMBER,
        field: 'stars'
    })
    stars: number

    @Column({
        type: STRING,
        field: 'description'
    })
    description: string

    @Column({
        type: STRING,
        field: 'pegi_id'
    })
    pegi_id: string

    @Column({
        type: STRING,
        field: 'category_id'
    })
    category_id: string

    @Column({
        type: STRING,
        field: 'mode_id'
    })
    mode_id: string

    @Column({
        type: NUMBER,
        field: 'price'
    })
    price: number

    @Column({
        type: NUMBER,
        field: 'stock'
    })
    stock: number


    createAt: Date;

    updateAt: Date;
    
}