import { Card } from "@models/card.ts";
import { ColorEnum } from "@enums/card-color.enum.ts";
import { CardTypeEnum } from "@enums/card-type.enum.ts";
import { CardAttributesEnum } from "@enums/card-attributes.enum.ts";
import type { Game } from "@models/game.ts";

export class Defy extends Card {
    constructor() {
        super({
            id: "1",
            name: "defy",
            color: [ColorEnum.GREEN],
            type: CardTypeEnum.SPELL,
            attributes: [CardAttributesEnum.REACTION],
            baseCost: 1,
            basePower: 1,
            powerColor: [ColorEnum.GREEN],
            isReady: true,
            requireTarget: true,
        });
    }

    override canPlay() {
        if (!this.cost && !this.power) return true;
        if (!this.owner) return false;

        const activeRunes = this.owner.runes.reduce(
            (c, rune) => (rune.isReady ? c + 1 : c),
            0
        );
        if (this.cost > activeRunes) return false;

        if (this.power && this.powerColor.length === 1) {
            const color = this.powerColor[0];
            const count = this.owner.runes.filter((rune) =>
                rune.color.includes(color)
            ).length;
            if (this.power > count) return false;
        } else {
            //TODO: handle multicolor power cost
        }

        return true;
    }

    override onPlay(game: Game) {
        super.onPlay(game);
    }
}
