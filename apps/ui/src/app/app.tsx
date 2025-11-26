import { RiptideRex } from "@riftbound-tcg/game";
import { GameCard } from "../components/Card/Card";

export function App() {
  const card = new RiptideRex();

  console.log(card.json); // ✅ works here

  return (
    <>
      <GameCard card={card.json} />
    </>
  );
}

export default App;
