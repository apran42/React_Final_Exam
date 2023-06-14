import React, {useState} from "react";
import Buy_Cart from "./Buy_Cart";

const Counter = (props) => {
    const [cnt, setCnt] = useState(0);

    const up = () => {
        setCnt(cnt + 1);
    }

    const down = () => {
        if (cnt > 0) {
            setCnt(cnt - 1);
        }
    }
    return (
        <>
            <div className={"counter"}>
                <button className={"counter_btn"} onClick={down}>-</button>
                <div className={"amount"}>{cnt}</div>
                <button className={"counter_btn"} onClick={up}>+</button>
            </div>
            <Buy_Cart img={props.img} id={props.id} name={props.name} price={props.price} amount={cnt}/>
        </>
    )
}

export default Counter;