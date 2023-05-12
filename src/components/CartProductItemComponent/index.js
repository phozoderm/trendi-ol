import './index.css'
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {useContext, useState} from "react";
import {UserContext} from "../../App";

export function CartProductItemComponent(props) {
    const userInfo = useContext(UserContext);
    const [quantity, setQuantity] = useState(props.quantity)

    function callProductDetailCartDelAPI(id) {
        fetch(`https://trendi-ol-backend.safiyeturk.com/product/${id}/cart`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${userInfo.jwt}`
            }
        }).then((res) => {
            if (res.ok) {
                setQuantity(quantity - 1)
                if(props.onCartChanged){
                    props.onCartChanged()
                }
            }
        }).catch(() => {
            //todo error message
        })
    }
    function callProductCartEmptyDelAPI(id){
        fetch(`https://trendi-ol-backend.safiyeturk.com/product/${id}/cart/empty`,{
            method:'DELETE',
            headers:{
                'authorization':`bearer ${userInfo.jwt}`
            }
        }).then((res)=>{
            if (res.ok){
                if(props.onCartChanged){
                    props.onCartChanged()
                }
            }
        }).catch(()=>{
            //todo error message
        })
    }

    function callProductDetailCartPostAPI(id) {
        fetch(`https://trendi-ol-backend.safiyeturk.com/product/${id}/cart`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${userInfo.jwt}`
            }
        }).then((res) => {
            if (res.ok) {
                setQuantity(quantity + 1)
                if(props.onCartChanged){
                    props.onCartChanged()
                }
            }
        }).catch(() => {
            //todo error message
        })
    }

    function productQuantityDecrease() {
        callProductDetailCartDelAPI(props.id)

    }

    function productQuantityIncrease() {
        callProductDetailCartPostAPI(props.id)
    }
    function productEmpty(){
        callProductCartEmptyDelAPI(props.id)
    }

    return (
        <div className='cart-page-product-detail-div'>
            <div className='cart-page-product-detail'>
                <Form>
                    <Form.Check
                        checked
                        type="checkbox"
                    />
                </Form>
                <div className='cart-page-image-div'>
                    <img
                        alt='clothes'
                        src={props.bgImage}
                    />
                </div>
                <Nav>
                    <Nav.Item>
                        <Nav.Link className='cart-page-nav-link'>
                            <span>{props.title}</span>
                            <span>Beden: M</span>
                            <span className='cart-page-cargo-detail'>
                                        <i className="bi bi-truck"/>
                                        <span>18 saat 7 dakika içinde sipariş verirsen en geç yarın kargoda!</span>
                                </span>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className='cart-page-item-action'>
                    <div className='cart-page-item-action-info'>
                        <div className='cart-page-counter-div'>
                            <div className='cart-page-counter'>
                                <Button className='cart-page-button-decrease'
                                        disabled={quantity < 2}
                                        onClick={productQuantityDecrease}>-</Button>
                                <div className='cart-page-quantity'>
                                    {quantity}
                                </div>
                                <Button className='cart-page-button-increase'
                                        onClick={productQuantityIncrease}>+</Button>
                            </div>
                        </div>
                        <div className='cart-page-price-info-div'>
                            <div className='cart-page-price'>
                                <span>{props.price} TL</span>
                            </div>
                        </div>
                    </div>
                    <Button onClick={productEmpty} className='cart-page-delete-button'>
                        <i className="bi bi-trash"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}
