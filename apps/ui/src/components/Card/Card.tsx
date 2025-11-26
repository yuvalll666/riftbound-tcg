import type { CardJSON } from "@riftbound-tcg/game";
import React from "react";

interface Props {
    card: CardJSON;
}
export const GameCard: React.FC<Props> = ({ card }) => {
    return (
        <div>
            <img src={card.imageUrl} alt={card.name} />
        </div>
    );
};

export default GameCard;
