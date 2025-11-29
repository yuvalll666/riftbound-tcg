import { CardJSON } from "@models/card";
import React, { useEffect } from "react";

interface Props {
    // cards: CardJSON[];
    deckType: "deck" | "trash" | "rune";
    image: string;
}
export const Deck: React.FC<Props> = ({ deckType, image }) => {
    return (
        <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
        >
            Deck
        </div>
    );
};

export default Deck;
