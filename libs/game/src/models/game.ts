import type { Card } from "@models/card.ts";
import type { Player } from "@models/player.ts";

export class Game {
    player1: Player;
    player2: Player;
    private _currentPlayer: Player;
    turn: number = 1;

    spellStack: Card[] = [];

    constructor(player1: Player, player2: Player) {
        this.player1 = player1;
        this.player2 = player2;
        this._currentPlayer = player1;
    }

    get currentPlayer() {
        return this._currentPlayer;
    }

    get enemy() {
        return this._currentPlayer === this.player1
            ? this.player2
            : this.player1;
    }

    switchTurn() {
        this._currentPlayer =
            this._currentPlayer === this.player1 ? this.player2 : this.player1;
        this.turn++;
    }
}
