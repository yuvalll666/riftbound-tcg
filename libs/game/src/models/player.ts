import type { Card } from "@models/card.ts";

interface PlayerProps {
    id: string;
    name: string;
    deck: Card[];
    runeDeck: Card[];
    leader: Card;
    champion: Card;
    battlefieldDeck: Card[];
    battlefield: Card;
}

export class Player {
    id: string = "";
    name: string;
    deck: Card[] = [];
    hand: Card[] = [];
    base: Card[] = [];
    trash: Card[] = [];
    runeDeck: Card[] = [];
    runes: Card[] = [];
    battlefieldDeck: Card[] = [];
    battlefield: Card | null = null;
    leader: Card | null = null;
    champion: Card | null = null;
    floatingMana: number = 0;
    points: number = 0;

    constructor({
        id,
        name,
        deck,
        runeDeck,
        leader,
        champion,
        battlefieldDeck,
        battlefield,
    }: PlayerProps) {
        this.id = id;
        this.name = name;
        this.deck = deck;
        this.runeDeck = runeDeck;
        this.battlefieldDeck = battlefieldDeck;
        this.battlefield = battlefield;
        this.leader = leader;
        this.champion = champion;

        // initialize empty zones
        this.hand = [];
        this.base = [];
        this.trash = [];
        this.runes = [];
    }
}
