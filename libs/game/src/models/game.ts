// import { Player } from "./player";
// import { CardInstance } from "./card-instance";
// import { IEffect } from "./effect";

import { CardInstance } from "./card-instance.ts";
import { Player } from "./player.ts";

export class Game {
    player1: Player;
    player2: Player;
    currentPlayer: Player;
    turn: number = 1;

    // Stack of spells / abilities waiting to resolve
    stack: CardInstance[] = [];

    // // Game-wide effects (optional)
    // globalEffects: IEffect[] = [];

    constructor(player1: Player, player2: Player) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = player1;
    }

    // /** Get the opponent of a given player */
    // getOpponent(player: Player): Player {
    //     return player === this.player1 ? this.player2 : this.player1;
    // }

    // /** Play a card from hand or other zone */
    // playCard(card: CardInstance, target?: CardInstance) {
    //     // Remove from current zone
    //     this.removeCardFromCurrentZone(card);

    //     // Put in appropriate zone
    //     card.zone = "BASE"; // or RUNE_ZONE, etc. depending on type
    //     card.owner.base.push(card);

    //     // Trigger card's onPlay effect
    //     card.onPlay(this, target);

    //     // Optionally, add to stack if it's a spell or delayed effect
    //     if (card.template.type === "SPELL") {
    //         this.stack.push(card);
    //     }
    // }

    // /** Remove card from its current zone */
    // private removeCardFromCurrentZone(card: CardInstance) {
    //     const zones = [card.owner.hand, card.owner.base, card.owner.deck, card.owner.runes, card.owner.trash];
    //     for (const zone of zones) {
    //         const index = zone.indexOf(card);
    //         if (index >= 0) {
    //             zone.splice(index, 1);
    //             break;
    //         }
    //     }
    // }

    // /** Resolve the stack (LIFO) */
    // resolveStack() {
    //     while (this.stack.length > 0) {
    //         const card = this.stack.pop();
    //         card?.onPlay(this); // or other resolution logic
    //     }
    // }

    // /** End current player's turn */
    // endTurn() {
    //     // Process player-specific end-of-turn effects
    //     this.currentPlayer.endOfTurnEffects.forEach(e => e.remove?.());
    //     this.currentPlayer.endOfTurnEffects = this.currentPlayer.endOfTurnEffects.filter(
    //         e => e.duration !== "UNTIL_END_OF_TURN"
    //     );

    //     // Process game-wide end-of-turn effects
    //     this.globalEffects.forEach(e => {
    //         if (e.duration === "UNTIL_END_OF_TURN") e.remove?.();
    //     });
    //     this.globalEffects = this.globalEffects.filter(e => e.duration !== "UNTIL_END_OF_TURN");

    //     // Switch player
    //     this.currentPlayer = this.getOpponent(this.currentPlayer);
    //     this.turn++;

    //     // Process start-of-turn effects for new current player
    //     this.currentPlayer.startOfOpponentTurnEffects.forEach(e => e.remove?.());
    //     this.currentPlayer.startOfOpponentTurnEffects = [];
    // }

    // /** Draw a card for the current player */
    // drawCard(player: Player, amount: number = 1) {
    //     for (let i = 0; i < amount; i++) {
    //         const card = player.deck.pop();
    //         if (card) {
    //             player.hand.push(card);
    //         }
    //     }
    // }

    // /** Helper: Tap leader to apply effect */
    // tapLeader(leader: CardInstance, targetUnit: CardInstance, effect: IEffect) {
    //     effect.apply();
    //     leader.activeEffects = leader.activeEffects || [];
    //     leader.activeEffects.push(effect);
    // }

    // /** Helper: Remove leader's last effect (e.g., to draw a card) */
    // removeLeaderEffect(leader: CardInstance) {
    //     if (leader.activeEffects && leader.activeEffects.length > 0) {
    //         const effect = leader.activeEffects.pop();
    //         effect?.remove?.();
    //     }
    // }
}
