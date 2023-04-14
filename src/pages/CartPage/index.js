import Container from "react-bootstrap/Container";
import './index.css'
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../App";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import {CartProductItemComponent} from "../../components/CartProductItemComponent";

export function CartPage() {
    const navigate = useNavigate()
    const userInfo = useContext(UserContext);
    const [cartProduct, setCartProduct] = useState([])

    function callCartPageGetAPI() {
        fetch('https://trendi-ol-backend.safiyeturk.com/product/cart', {
            headers: {
                'authorization': `bearer ${userInfo.jwt}`
            }
        }).then((res) => {
            if (res.ok) {
                res.json().then((responseBody) => {
                    setCartProduct(responseBody)
                })
            }
        }).catch(() => {
            //todo error message
        })
    }

    useEffect(() => {
        callCartPageGetAPI()
    }, [])

    return (
        <Container>
            <div className='cart-page-container'>
                <div className='cart-page-div'>
                    {
                        cartProduct.length === 0 ?
                            <div>
                                <div className='cart-page-empty-div'>
                                    <div className='cart-page-empty-first-item'>
                                        <div>
                                            <i className="bi bi-cart3"/>
                                        </div>
                                        <span>Sepetinde ürün bulunmamaktadır.</span>
                                    </div>
                                    <div className='cart-page-empty-second-item'>
                                        <Button onClick={() => navigate('/home')} className='cart-page-empty-button'>Alışverişe
                                            Başla</Button>
                                    </div>
                                </div>
                            </div>
                            :
                            <>
                                <div className='cart-page-product-container'>
                                    <div className='cart-page-product-header-div'>
                                        <span>Sepetim (1 Ürün)</span>
                                        {/*reduce*/}
                                    </div>
                                    <div className='cart-page-product-div'>
                                        <div className='cart-page-seller-div'>
                                            <Form>
                                                <Form.Check
                                                    checked
                                                    type="checkbox"
                                                />
                                            </Form>
                                            <span>
                                                Satıcı:
                                            </span>
                                            <p>
                                                Trendi-olkilla
                                            </p>
                                            <div className='cart-page-seller-point'>
                                                8.2
                                            </div>
                                            <i className="bi bi-chevron-right"/>
                                        </div>
                                        <div className='cart-page-free-shipping-div'>
                                            <i className="bi bi-box"/>
                                            <span>Kargo Bedava!</span>
                                        </div>
                                        {cartProduct.map((product) => (
                                            <CartProductItemComponent
                                                bgImage={product.imageURL}
                                                title={product.name}
                                                price={product.price}
                                                id={product.id}
                                                quantity={product.quantity}/>
                                        ))}
                                    </div>
                                </div>
                                <div className='cart-page-approve-order-container'>
                                    <div className='cart-page-approve-order-div'>
                                        <Button className='cart-page-approve-button'>
                                            Sepeti Onayla <i className="bi bi-chevron-right"/>
                                        </Button>
                                        <div className='cart-page-summary-div'>
                                            <h1>Sipariş Özeti</h1>
                                            <div className='cart-page-product-price'>
                                                <span>Ürünün Toplamı</span>
                                                <strong>89 TL</strong>
                                            </div>
                                            <div className='cart-page-product-price'>
                                                <span>Kargo Toplam</span>
                                                <strong>19,99 TL</strong>
                                            </div>
                                            <hr/>
                                            <p>127 TL</p>
                                        </div>
                                        <div className='cart-page-discount'>
                                            <i className="bi bi-plus-lg"/>
                                            <span>
                                                İNDİRİM KODU GİR
                                            </span>
                                        </div>
                                        <Button className='cart-page-approve-button'>
                                            Sepeti Onayla <i className="bi bi-chevron-right"/>
                                        </Button>
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </div>
        </Container>
    )
}
