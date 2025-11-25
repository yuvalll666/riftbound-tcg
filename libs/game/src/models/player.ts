import { IPlayer } from "src/interfaces/player.interface.ts";
import { CardInstance } from "./card-instance.ts";

export class Player implements IPlayer {
    deck: CardInstance[] = [];
    hand: CardInstance[] = [];
    base: CardInstance[] = [];
    trash: CardInstance[] = [];
    runeDeck: CardInstance[] = [];
    runes: CardInstance[] = [];
    battlefieldDeck: CardInstance[] = [];
    battlefield: CardInstance | null = null;
    leader: CardInstance | null = null;
    champion: CardInstance | null = null;

    points: number = 0;

    // endOfTurnEffects: IScheduledEffect[] = [];
    // startOfOpponentTurnEffects: IScheduledEffect[] = [];

    constructor(public name: string) {}

    // addEndOfTurnEffect(effect: IScheduledEffect) {
    //     this.endOfTurnEffects.push(effect);
    // }

    // addStartOfOpponentTurnEffect(effect: IScheduledEffect) {
    //     this.startOfOpponentTurnEffects.push(effect);
    // }

    // processEndOfTurnEffects() {
    //     this.endOfTurnEffects.forEach((e) => e.remove());
    //     this.endOfTurnEffects = [];
    // }

    // processStartOfOpponentTurnEffects() {
    //     this.startOfOpponentTurnEffects.forEach((e) => e.remove());
    //     this.startOfOpponentTurnEffects = [];
    // }
}
