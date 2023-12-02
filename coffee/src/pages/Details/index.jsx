import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/UseFetchData';
import "./index.scss";
import { useContext } from 'react';
import { BasketContext } from '../../context/BasketContext';
import Swal from 'sweetalert2';
import Loading from '../isLoading';
import Error from '../Error';
function Details() {

    const { itemId } = useParams();

    const { data, isLoading, error } = useFetchData(`Products/${itemId}`)

    const {basketArr , setBasketArr} = useContext(BasketContext)

    function addBasket(item) {
        const find = basketArr.find((x) => x.id === item.id);
        if (find) {
          find.count++;
          find.total = find.discountPrice * find.count;
          setBasketArr([...basketArr]);
    
          Swal.fire({
            title: "Already In Cart!!! Count Increased",
            icon: "warning",
          });
          return;
        }
        Swal.fire({
          title: "Added To Cart!",
          icon: "success",
        });
        const total = item.discountPrice;
        setBasketArr([...basketArr, { ...item, count: 1, total }]);
      }


    return (
        <>
            {
                isLoading ? (
                    <Loading />
                ) : error ? (
                    <Error />
                ) : (
                    <div className="productDetails">
                    <div className="productDetails-inner">
                        <div className="details-img">
                            <img src={data.img} alt="" />
                        </div>
                        <div className="details-texts">
                            <h1>{data.name}</h1>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <p style={{ padding: "10px 0" }}>${data.discountPrice}</p>
                            <p>Available: <span style={{ color: "gray" }}>In Stock</span></p>
                            <p className='description'>Anlor sit amet, consectetur adipiscing elit.
                                Fusce condimentum est lacus, non pretium risus lacinia vel.
                                Fusce eget turpis orci.</p>
                            <div className="details-qty">
                                <p>QTY</p>
                                <input type="number" />
                                <button onClick={()=>addBasket(data)}>ADD TO CART</button>
                            </div>
                            <div className="det-categ">
                                <p>CATEGORY:</p>
                                <p style={{ color: "gray" }}>{data.category}</p>
                            </div>
                            {/* <div className="det-sku">
                                <p>SKU:</p>
                                <p style={{ color: "gray" }}>2584-MK63</p>
                            </div>
                            <div className="det-brand">
                                <p>BRAND:</p>
                                <p style={{ color: "gray" }}>BRENDA</p>
                            </div> */}
                        </div>

                    </div>

            </div>
                )
            }
        </>
    )
}

export default Details