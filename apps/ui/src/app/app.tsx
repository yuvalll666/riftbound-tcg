import { RiptideRex } from "@riftbound-tcg/game";
import { GameCard } from "@ui/components/Card/Card";
import Board from "@ui/components/Board/Board";

export function App() {
    const card = new RiptideRex();

    console.log(card.json); // ✅ works here

    return (
        <>
            {/* <GameCard card={card.json} /> */}
            <div className="h-screen w-screen flex flex-col">
                <div className="flex-1"></div>
                <div className="h-[20vh] bg-pink-200">battlefields / scores </div>
                <div className="h-[40vh]">
                    <Board />
                </div>
            </div>
        </>
    );
}

export default App;
