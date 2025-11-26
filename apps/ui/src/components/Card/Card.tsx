import { CardTypeEnum, type CardJSON } from "@riftbound-tcg/game";
import React, { useState } from "react";

interface Props {
    card: CardJSON;
}

export const GameCard: React.FC<Props> = ({ card }) => {
    const [isFaceDown, setIsFaceDown] = useState(false);

    return (
        <div
            onClick={() => setIsFaceDown(prev => !prev)}
            className="w-56 h-80 cursor-pointer"
            style={{
                perspective: "1000px", // 👈 gives 3D depth
            }}
        >
            <div
                className={`relative w-full h-full transition-transform duration-500`}
                style={{
                    transformStyle: "preserve-3d",
                    transform: isFaceDown ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                {/* FRONT (card face) */}
                <div
                    className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg backface-hidden"
                    style={{
                        backfaceVisibility: "hidden",
                    }}
                >
                    <img
                        src={card.imageUrl}
                        alt={card.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* BACK (card back) */}
                <div
                    className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg bg-center bg-no-repeat backface-hidden"
                    style={{
                        backgroundImage:
                            card.type === CardTypeEnum.RUNE
                                ? "url('/images/card-back-white.png')"
                                : "url('/images/card-back-blue.png')",
                        backgroundSize: "100% 100%",
                        transform: "rotateY(180deg)", // 👈 flip the back side
                        backfaceVisibility: "hidden",
                    }}
                />
            </div>
        </div>
    );
};

export default GameCard;
