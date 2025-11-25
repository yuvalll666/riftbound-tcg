import { CardTypeEnum } from "@enums";
import { CardTemplate } from "@models/card-tamplate.ts";

export class PitRookie extends CardTemplate {
    constructor() {
        super({
            id: "2",
            name: "pit rookie",
            // color: [CardColorEnum.ORANGE],
            type: CardTypeEnum.UNIT,
            cost: 1,
            power: 1,
            isReady: true,
        });
    }

    override onPlay() {
        // When you play me, buff another friendly unit.
        // (If it doesn't have a buff, it gets +1 might buff.)
    }
}
