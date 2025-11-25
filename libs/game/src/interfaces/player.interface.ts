import { CardInstance } from "@models/card-instance.ts";

export interface IPlayer {
    deck: CardInstance[];
    hand: CardInstance[];
    base: CardInstance[];
    trash: CardInstance[];
    runeDeck: CardInstance[];
    runes: CardInstance[]; // Active runes in play
    battlefieldDeck: CardInstance[];
    battlefield: CardInstance | null; // Active battelfield in current game
    leader: CardInstance | null;
    champion: CardInstance | null;

    points: number;

    // endOfTurnEffects
    // startOfTurnEffects
    // startOfOpponetTurnEffects
}
