// import { CardTemplate } from "@models/card-tamplate.ts";
import { IPlayer } from "./player.interface.ts";
import { CardInstance } from "@models/card-instance.ts";

export interface IGame {
    player1: IPlayer;
    player2: IPlayer;

    turn: number;
    currentPlayer: IPlayer;

    stack: CardInstance[]; // spell stack

    // triggers that affect the whole game
    // globalEndOfTurnEffects: IScheduledEffect[];
    // globalStartOfTurnEffects: IScheduledEffect[];

    startGame(): void;
    playCard(card: CardInstance, player: IPlayer): void;
    resolveStack(): void;

    endTurn(): void;
    startNextTurn(): void;
    checkGameEnd(): void;
}
