import { CardAttributesEnum } from "src/enums/card-attributes.enum.ts";
import { CardColorEnum } from "src/enums/card-color.enum.ts";
import { CardTypeEnum } from "src/enums/card-type.enum.ts";
import { LeaderEnum } from "src/enums/leader.enum.ts";

export interface Card {
    id: string;
    name: string;
    color: CardColorEnum[];
    type: CardTypeEnum;
    attributes: CardAttributesEnum[];
    dependOnLeader: LeaderEnum | undefined;

    cost: number;
    currentCost: () => number;
    power: number;
    currentPower: () => number;
    might: number;
    currentMight: () => number;
    isReady: boolean;

    imageUrl: string;
}
