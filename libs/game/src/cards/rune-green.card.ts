import { CardTypeEnum, ColorEnum } from "@enums";
import { CardTemplate } from "@models/card-tamplate.ts";

export class GreenRuneCard extends CardTemplate {
    constructor() {
        super({
            id: "some id",
            type: CardTypeEnum.RUNE,
            color: ColorEnum.GREEN,
            isReady: true,
            name: "calm rune",
        });
    }

    override onPlay(): void {}
}
