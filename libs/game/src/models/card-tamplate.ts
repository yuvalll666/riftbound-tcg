import { ColorEnum } from "src/enums/card-color.enum.ts";
import { ICardTemplate } from "../interfaces/card.interface.ts";
import { CardTypeEnum } from "src/enums/card-type.enum.ts";
import { CardAttributesEnum } from "src/enums/card-attributes.enum.ts";
import { LeaderEnum } from "src/enums/leader.enum.ts";

export class CardTemplate implements ICardTemplate {
    id: string;
    name: string;
    color: ColorEnum[];
    type: CardTypeEnum;
    attributes: CardAttributesEnum[];
    dependOnLeader?: LeaderEnum;

    cost: number;
    power: number;
    might: number;

    imageUrl: string;

    constructor({
        id = "",
        name = "Unnamed Card",
        color = [],
        type = CardTypeEnum.DEFAULT,
        attributes = [],
        dependOnLeader = undefined,
        cost = 0,
        power = 0,
        might = 0,
        imageUrl = "",
    }: Partial<ICardTemplate> = {}) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.type = type;
        this.attributes = attributes;
        this.dependOnLeader = dependOnLeader;
        this.cost = cost;
        this.power = power;
        this.might = might;
        this.imageUrl = imageUrl;
    }
}
