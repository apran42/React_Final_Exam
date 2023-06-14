import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import {CartContext} from "./CartContext";
import {AuthContext} from "./AuthContext";

const Buy_Cart = (props) => {
    const  {addToCart} = useContext(CartContext);
    const nav = useNavigate();
    const authContext = useContext(AuthContext);
    const buy = () => {
        if(authContext.isLogin) {
            if (props.amount > 0) {
                const new_item = {
                    id: props.id,
                    name: props.name,
                    price: props.price,
                    amount: props.amount,
                    img_src: props.img
                };
                addToCart(new_item);
                nav("/cart");
            }
            else {
                alert("올바른 수량을 선택해 주세요.")
            }
        }
        else {
            alert("로그인 후 이용해주세요.")
        }
    }

    const add_cart = () => {
        if(authContext.isLogin) {
            if (props.amount > 0) {
                const new_item = {
                    id: props.id,
                    name: props.name,
                    price: props.price,
                    amount: props.amount,
                }
                addToCart(new_item);

                alert("장바구니에 추가되었습니다!")
            } else {
                alert("올바른 수량을 선택해 주세요.")
            }
        }
        else {
            alert("로그인 후 이용해주세요.")
        }
    }
    return(
        <div className={"buy_cart"}>
            <button className={"buy_btn"} onClick={buy}>바로구매</button>
            <button className={"cart_btn"} onClick={add_cart}>장바구니</button>
        </div>
    )
}

export default Buy_Cart;