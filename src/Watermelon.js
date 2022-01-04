import { useState } from "react";

const Price = () => {
    const [price, setPrice] = useState(0);

    const [piece, setPiece] = useState(0)

    const handlerClickmin = () => {
        setPrice(price - 9)
        setPiece(piece - 1)
    }
    const handlerClickmax = () => {
        setPrice(price + 9)
        setPiece(piece + 1)
    }

    return (
        <div>

            <div className="PriceInterface">
                <button disabled={price === 0} id="decrement" onClick={handlerClickmin}>-</button>
                <p className="Pieces">{piece} kg</p>
                <h3 className="Pricesize">Price {price}$</h3>
                <button id="increment" onClick={handlerClickmax} >+</button>
            </div>



        </div>
    );
};

export default Price;