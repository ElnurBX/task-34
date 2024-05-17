
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState('');
    const [data, setdata] = useState([]);
    const [basket, setBasket] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []);
    
    const deleteBasket = (item) => {
        setBasket(prevBasket => {
            const updatedBasket = prevBasket.map(basketItem => {
                if (basketItem.item._id === item._id) {
                    return { ...basketItem, count: basketItem.count - 1 };
                }
                return basketItem;
            }).filter(basketItem => basketItem.count > 0);

            localStorage.setItem("basket", JSON.stringify(updatedBasket));
            return updatedBasket;
        });
    };
    
    const addBasket = (item) => {
        setBasket(prevBasket => {
            const basketItem = prevBasket.find(basketItem => basketItem.item._id === item._id);
            if (basketItem) {
                const updatedBasket = prevBasket.map(basketItem =>
                    basketItem.item._id === item._id ? { ...basketItem, count: basketItem.count + 1, totalprice: basketItem.totalprice + item.price } : basketItem
                );
                localStorage.setItem("basket", JSON.stringify(updatedBasket));
                return updatedBasket;
            } else {
                const newBasketItem = {
                    item,
                    count: 1,
                    totalprice: item.price
                };
                const updatedBasket = [...prevBasket, newBasketItem];
                localStorage.setItem("basket", JSON.stringify(updatedBasket));
                return updatedBasket;
            }
        });
    };
    useEffect(() => {
        axios.get("http://localhost:8080/api/Product").then(
            (res) => {
                setdata(res.data);
                setLoading(false);
            }
        ).catch(
            (err) => {
                setError(err);
            }
        )
    },[])
    const router = createBrowserRouter(ROUTES);
    return (
        <>
        <MainContext.Provider value={{data, setdata, loading, setLoading, error, setError,basket, setBasket, addBasket, deleteBasket }}>
            <RouterProvider router={router }/>
        </MainContext.Provider>
        </>
    );
}

export default App;
