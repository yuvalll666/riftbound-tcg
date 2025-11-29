export const Board = () => {
    return (
        <div className="w-full h-full grid grid-cols-12 grid-rows-2 gap-2 p-1 bg-blue-400">
            <div className="col-start-1 col-span-4 row-start-2 bg-pink-500 rounded-md">
                hand
            </div>
            <div className="col-start-5 col-span-1 row-start-2 bg-pink-500 rounded-md">
                rune deck
            </div>

            <div className="col-start-6 col-span-5 row-start-2 bg-pink-500 rounded-md">
                runes
            </div>
            <div className="col-start-11 col-span-1 row-start-2 bg-pink-500 rounded-md">
                deck
            </div>
            <div className="col-start-12 col-span-1 row-start-2 bg-pink-500 rounded-md">
                trash
            </div>
            <div className="col-start-11 col-span-1 row-start-1 bg-pink-500 rounded-md">
                champion
            </div>
            <div className="col-start-12 col-span-1 row-start-1 bg-pink-500 rounded-md">
                leader
            </div>
            <div className="col-start-5 col-span-6 row-start-1 bg-pink-500 rounded-md">
                base
            </div>
        </div>
    );
};

export default Board;
