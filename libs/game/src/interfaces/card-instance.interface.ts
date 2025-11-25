import { ZoneEnum } from "@enums";
import { ICardTemplate } from "./card.interface.ts";
import { IPlayer } from "./player.interface.ts";

export interface ICardInstance {
    template: ICardTemplate;
    owener: IPlayer;
    zone: ZoneEnum;

    isReady: boolean;

    getPower(): number;
    getCost(): number;
    getMight(): number;
}
