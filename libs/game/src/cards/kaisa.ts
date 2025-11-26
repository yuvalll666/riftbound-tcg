// import { CardInstance } from "@models/card-instance.ts";
// import { CardTemplate } from "@models/card-tamplate.ts";

// export class KaisaSig extends CardInstance {
//     constructor() {
//         super({
//             id: "1",
//             name: "kaisa sig",
//             color: [ColorEnum.GREEN],
//             type: CardTypeEnum.SPELL,
//             attributes: [CardAttributesEnum.REACTION],
//             cost: 1,
//             power: 1,
//             // isReady: true,
//         });
//     }

//     canPlay() {
//         let cost = this.getCost()
//         if (const > this.player.runes.length) {
//             return false;
//         }

//         return true
//     }

//     onPlay() {
//         dmg = -2
//         i = 0
//         while (i < 6) {
//             // 3 cards in field
//             let card = getEnemyCard(this.owner)
            
//             card.mightMod.push(dmg)

//             if (card.getMight <= 0) {
//                 card.trash()
//             };

//         }
//     }
// }
