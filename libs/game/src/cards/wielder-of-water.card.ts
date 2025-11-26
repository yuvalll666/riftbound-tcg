import { Card } from "@models/card.ts";
import type { Player } from "@models/player.ts";
import { ZoneEnum } from "@enums/zone.enum.ts";
import { ColorEnum } from "@enums/card-color.enum.ts";
import { CardTypeEnum } from "@enums/card-type.enum.ts";
import { v4 as uuid } from "uuid";

export class WielderOfWaterCard extends Card {
    constructor(owner?: Player, zone?: ZoneEnum) {
        super({
            id: uuid(),
            name: "Wielder of Water",
            color: [ColorEnum.BLUE],
            type: CardTypeEnum.UNIT,
            baseCost: 3,
            basePower: 2,
            baseMight: 2,
            imageUrl: "",
            owner,
            zone,
        });
    }
}
