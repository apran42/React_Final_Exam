import React, {useContext} from "react";
import { CartContext } from "./CartContext";



const Cart = () => {
    const { cart, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);
    const removeItem = (itemId) => {
        removeFromCart(itemId);
    };
   
    const removeAll = () => {
        clearCart();
    };

    const increaseQuantity = (itemId) => {
        updateQuantity(itemId, 1);
    };

    const decreaseQuantity = (itemId) => {
        updateQuantity(itemId, -1);
    };

    const purchase = (cart) => {
        let tmp = 0;
        for (let i = 0; i < cart.length; i++) {
            tmp += (cart[i].amount * cart[i].price);
        }
        // eslint-disable-next-line no-restricted-globals
        var toBuy = confirm("구매하시겠습니까?");
        if(toBuy) {
            alert("총합 : " + tmp.toString() + "원\n구매해주셔서 감사합니다.");
        }
    }

    const getTotal = (cart) => {
        let tmp = 0;
        for (let i = 0; i < cart.length; i++) {
            tmp += (cart[i].amount * cart[i].price);
        }
        return tmp;
    }

    return (
        <div className={"items_in_cart"}>
            {cart.length === 0 ? (
                <p>장바구니에 상품이 없습니다.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div className={item.id}>
                            <div className={"item_info"}>
                                <div className={"item_name_in_cart"}>{item.name}</div>
                                <div className={"item_price_in_cart"}>{item.price} 원</div>
                                <div className={"item_action"}>
                                수량: {item.amount}{" "}
                                <button onClick={() => increaseQuantity(item.id)}>+</button>{" "}
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                <button onClick={() => removeItem(item.id)}>삭제</button>
                            </div>
                            </div>
                        </div>
                    ))}
                    <hr className={"in_cart_hr"}/>
                    <div className={"result"}>
                        <div className={"item_name_in_cart"}>총합</div>
                        <div className={"total_price"}>{getTotal(cart)} 원</div>
                        <div className={"item_action"}/>
                    </div>
                    <button onClick={() => purchase(cart)}>구매하기</button>
                    <button onClick={removeAll}>모두 삭제</button>
                </>
            )}
        </div>
    );
};

export default Cart;
