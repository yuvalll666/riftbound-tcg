import { CardAttributesEnum, ColorEnum, CardTypeEnum } from "@enums";
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
            isReady: true,
        });
    }

    override onPlay() {
        // REACTION (Play any time, even before spells and abilities resolve.)
        // Counter a spell that costs no more than 4 and no more than rune.
    }
}
