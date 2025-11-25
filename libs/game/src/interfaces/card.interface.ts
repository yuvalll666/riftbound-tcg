import { CardInstance } from "@models/card-instance.ts";
import { Game } from "@models/game.ts";
import { Player } from "@models/player.ts";
import { CardAttributesEnum } from "src/enums/card-attributes.enum.ts";
import { ColorEnum } from "src/enums/card-color.enum.ts";
import { CardTypeEnum } from "src/enums/card-type.enum.ts";
import { LeaderEnum } from "src/enums/leader.enum.ts";

export interface ICardTemplate {
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
    
    onPlay?: (card: CardInstance, player: Player, game: Game, target?: CardInstance) => void;

}
