import { useState } from "react";
import bnn from './bnn.png';
// import './App.css'

const Price = () => {
    const [weight, setWeight] = useState(0)
    const handlerClickmin = () => {

        setWeight(weight - 1)
    }
    const handlerClickmax = () => {

        setWeight(weight + 1)

    }
    return (
        <div>
            <div className="PriceInterface">
                <img src={bnn} alt='bnn' className='bnn' />
                <div className="controls-container">
                    <button disabled={weight === 0} className="weight-controls" onClick={handlerClickmin}>-</button>
                    <input value={weight} type="number" className="Pieces" placeholder="kg" onChange={(e) => setWeight(Number(e.target.value))} />
                    <button className="weight-controls" onClick={handlerClickmax} >+</button>
                </div>
                <h3 className="Pricesize">Price {weight * 1.5}$</h3>
            </div>
        </div>
    );
};
export default Price;