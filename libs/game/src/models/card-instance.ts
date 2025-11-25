import { ZoneEnum } from "@enums";
import { ICardInstance } from "src/interfaces/card-instance.interface.ts";
import { ICardTemplate } from "src/interfaces/card.interface.ts";
import { IPlayer } from "src/interfaces/player.interface.ts";

export class CardInstance implements ICardInstance {
    template: ICardTemplate;
    owener: IPlayer;
    zone: ZoneEnum;
    isReady = false;

    private powerMods: number[] = [];
    private costMods: number[] = [];
    private mightMods: number[] = [];

    constructor(template: ICardTemplate, owener: IPlayer, zone: ZoneEnum) {
        this.template = template;
        this.owener = owener;
        this.zone = zone;
    }

    getPower() {
        return Math.max(
            1,
            this.template.power + this.powerMods.reduce((a, b) => a + b, 0)
        );
    }

    getCost() {
        return Math.max(
            1,
            this.template.cost + this.costMods.reduce((a, b) => a + b, 0)
        );
    }

    getMight() {
        return Math.max(
            1,
            this.template.might + this.mightMods.reduce((a, b) => a + b, 0)
        );
    }

    addPowerMod(value: number) {
        this.powerMods.push(value);
    }

    addCostMod(value: number) {
        this.costMods.push(value);
    }

    addMightMod(value: number) {
        this.mightMods.push(value);
    }
}
