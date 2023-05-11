import React, {useEffect, useState} from 'react';
const Basket = ({basket, setBasket}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const totalPrices = () => {
        let total = 0;
        basket.map(el =>
            (total += el.price * el.count))
        setTotalPrice(total)
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        totalPrices()
    })

    const plusCount = (id) => {
        setBasket(basket.map(el => {
            if (el.id === id) {
                el.count++;
            }
            return el;
        }))
    }
    const minusCount = (id, count) => {
        if (count < 2) {
            removeProduct(id);
        } else {
            setBasket(
                basket.map(el => {
                    if (el.id === id) {
                        el.count--;
                    }
                    return el
                })
            )
        }
    }
    const removeProduct = (id) => {
        setBasket(basket.filter(el =>
            el.id !== id))
    }
    console.log(basket)
    return (
        <div>
            {basket.length > 0 &&
                <table>
                    <thead style={{border: "2px solid green"}}>
                    <tr>
                        <th style={{border: "2px solid green"}}>Product</th>
                        <th style={{border: "2px solid green"}}>Price, $</th>
                        <th style={{border: "2px solid green"}}>Quantity</th>
                        <th style={{border: "2px solid green"}}>TotalPrice</th>
                        <th style={{border: "2px solid green"}}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {basket.map((el) =>
                        <tr key={el.id}>
                            <td style={{border: "2px solid green"}}>{el.title}</td>
                            <td style={{border: "2px solid green"}}>{el.price}</td>
                            <td style={{border: "2px solid green"}}>
                                <button onClick={() => minusCount(el.id, el.count)}>
                                    -
                                </button>
                                <span className='count'>{el.count}</span>
                                <button onClick={() => plusCount(el.id)}>+</button>
                            </td>

                            <td style={{border: "2px solid green"}}>{el.price * el.count}</td>
                            <td style={{border: "2px solid green"}}>
                                <button onClick={() => removeProduct(el.id)}>x</button>
                            </td>
                        </tr>
                    )}

                    <div className='total'>
                        <h3>Total order $ {totalPrice}</h3>
                    </div>
                    </tbody>
                </table>
            }
        </div>
    );
};

export default Basket;
