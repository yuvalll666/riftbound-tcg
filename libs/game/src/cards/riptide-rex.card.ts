import { ColorEnum } from "@enums/card-color.enum.ts";
import { CardTypeEnum } from "@enums/card-type.enum.ts";
import { ZoneEnum } from "@enums/zone.enum.ts";
import { Card } from "@models/card.ts";
import type { Game } from "@models/game.ts";
import type { Player } from "@models/player.ts";
import { v4 as uuid } from "uuid";

export class RiptideRex extends Card {
    constructor(owner?: Player, zone?: ZoneEnum) {
        super({
            id: uuid(),
            name: "riptide rex",
            color: [ColorEnum.BLUE],
            type: CardTypeEnum.UNIT,
            baseCost: 6,
            basePower: 2,
            powerColor: [ColorEnum.BLUE],
            baseMight: 6,
            imageUrl: "/cards/OGN-092.webp",
            owner,
            zone,
            requireTarget: true,
        });

        this.onPlay = (game: Game) => {};
    }
}

let x = new RiptideRex()
x.json
