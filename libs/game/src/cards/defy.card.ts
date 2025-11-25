import { CardAttributesEnum } from "@game/enums/card-attributes.enum.ts";
import { ColorEnum } from "@game/enums/card-color.enum.ts";
import { CardTypeEnum } from "@game/enums/card-type.enum.ts";
import { CardTemplate } from "@models/card-tamplate.ts";

export class Defy extends CardTemplate {
    constructor() {
        super({
            id: "1",
            name: "defy",
            color: [ColorEnum.GREEN],
            type: CardTypeEnum.SPELL,
            attributes: [CardAttributesEnum.REACTION],
            cost: 1,
            power: 1,
            // isReady: true,
        });
    }
}
