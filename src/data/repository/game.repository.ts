import { GamePojo } from "../models/game.model"
import { connect } from "../config/db.config"
import { v4 as uuidv4 } from 'uuid';

export class GameRespository {
    _database: any = {}
    _gameRespository: any

    constructor() {
        this._database = connect()
        this._gameRespository = this._database.sequelize.getRepository(GamePojo)
    }

    async getAllGames(): Promise<GamePojo[]> {
        try {
            return await this._gameRespository
                .findAll()
        } catch (error) {
            console.error(error)
            return []
        }
    }

    async getGameById(id: string): Promise<GamePojo | undefined> {
        try {
            return await this._gameRespository.findByPk(id)
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    async addGame(newGame: GamePojo): Promise<string> {
        try {
            newGame.game_id = uuidv4();
            newGame = await this._gameRespository.create(newGame)
            return newGame.game_id
        } catch (error) {
            console.error(error)
            return ''
        }
    }
}




/* import { Component, OnInit } from '@angular/core';
import { GamePojo } from '../models/game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: GamePojo[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getAllGames()
      .subscribe(games => this.games = games);
  }
} */
