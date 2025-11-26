import type { Player } from "@models/player.ts";
import type { Game } from "@models/game.ts";
import { ColorEnum } from "@enums/card-color.enum.ts";
import { CardTypeEnum } from "@enums/card-type.enum.ts";
import { CardAttributesEnum } from "@enums/card-attributes.enum.ts";
import { LeaderEnum } from "@enums/leader.enum.ts";
import { ZoneEnum } from "@enums/zone.enum.ts";

export interface CardJSON {
    id: string;
    name: string;
    color: ColorEnum[];
    type: CardTypeEnum;
    baseCost: number;
    basePower: number;
    powerColor: ColorEnum[];
    baseMight: number;
    imageUrl: string;
    ownerId: string | null;
    zone: ZoneEnum | undefined;
    isReady: boolean;
    requireTarget: boolean;
}

interface CardProps {
    id?: string;
    name?: string;
    color?: ColorEnum[];
    type?: CardTypeEnum;
    attributes?: CardAttributesEnum[];
    baseCost: number;
    basePower?: number;
    powerColor?: ColorEnum[];
    baseMight?: number;
    imageUrl?: string;
    dependOnLeader?: LeaderEnum;
    owner?: Player;
    zone?: ZoneEnum;
    isReady?: boolean;
    requireTarget?: boolean;
}

export class Card {
    id: string;
    name: string;
    color: ColorEnum[];
    type: CardTypeEnum;
    attributes: CardAttributesEnum[];
    baseCost: number;
    baseMight: number;
    imageUrl: string;
    isReady = false;
    requireTarget = false;
    basePower: number;
    powerColor: ColorEnum[];
    dependOnLeader?: LeaderEnum;
    owner?: Player;
    zone?: ZoneEnum;

    private powerMods: number[] = [];
    private costMods: number[] = [];
    private mightMods: number[] = [];

    constructor({
        id = "",
        name = "Unnamed Card",
        color = [],
        type = CardTypeEnum.DEFAULT,
        attributes = [],
        dependOnLeader,
        baseCost = 0,
        basePower = 0,
        baseMight = 0,
        powerColor = [],
        imageUrl = "",
        owner,
        zone,
        isReady = false,
        requireTarget = false,
    }: CardProps) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.type = type;
        this.attributes = attributes;
        this.dependOnLeader = dependOnLeader;
        this.baseCost = baseCost;
        this.basePower = basePower;
        this.baseMight = baseMight;
        this.imageUrl = imageUrl;
        this.powerColor = powerColor;
        this.owner = owner;
        this.zone = zone;
        this.isReady = isReady;
        this.requireTarget = requireTarget;
    }

    get power() {
        return Math.max(
            1,
            this.basePower + this.powerMods.reduce((a, b) => a + b, 0)
        );
    }

    get cost() {
        return Math.max(
            1,
            this.baseCost + this.costMods.reduce((a, b) => a + b, 0)
        );
    }

    get might() {
        return Math.max(
            1,
            this.baseMight + this.mightMods.reduce((a, b) => a + b, 0)
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

    onPlay(game: Game): void {}

    canPlay(): boolean {
        return true;
    }

    get json() {
        return this.toJSON();
    }

    toJSON(): CardJSON {
        return {
            id: this.id,
            name: this.name,
            color: this.color,
            type: this.type,
            baseCost: this.baseCost,
            basePower: this.basePower,
            powerColor: this.powerColor,
            baseMight: this.baseMight,
            imageUrl: this.imageUrl,
            ownerId: this.owner?.id ?? null,
            zone: this.zone,
            isReady: this.isReady,
            requireTarget: this.requireTarget,
        };
    }
}
