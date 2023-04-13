import './index.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../App";
import {useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";

export function ProductDetailPage() {
    const {id} = useParams()
    const userInfo = useContext(UserContext);
    const [product, setProduct] = useState({});
    //todo if null loading


    function handleChangeFavoriteButton() {
        if (product.isFavorite) {
            callProductDetailFavoriteDelAPI(id)
        } else {
            callProductDetailFavoritePostAPI(id)
        }
    }

    function callProductDetailGetAPI(id) {
        const headers = userInfo.jwt ? {'authorization': `bearer ${userInfo.jwt}`} : {}
        fetch(`https://trendi-ol-backend.safiyeturk.com/product/${id}`, {
            headers: headers
        }).then((res) => {
            if (res.ok) {
                res.json().then((responseBody) => {
                    setProduct(responseBody)
                })
            }
        }).catch(() => {
            //todo error message
        })
    }

    function callProductDetailFavoritePostAPI(id) {
        fetch(`https://trendi-ol-backend.safiyeturk.com/product/${id}/favorite`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${userInfo.jwt}`
            }
        }).then((res) => {
            if (res.ok) {
                setProduct({
                    ...product, // spread operator
                    isFavorite: true
                })
            }
        }).catch(() => {
            //todo error message
        })
    }

    function callProductDetailFavoriteDelAPI(id) {
        fetch(`https://trendi-ol-backend.safiyeturk.com/product/${id}/favorite`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${userInfo.jwt}`
            }
        }).then((res) => {
            if (res.ok) {
                setProduct({
                    ...product,
                    isFavorite: false
                })
            }
        }).catch(() => {
            //todo error message
        })
    }
    function callProductDetailCartPostAPI(id){
        fetch(`https://trendi-ol-backend.safiyeturk.com/product/${id}/cart`, {
            method:'POST',
            headers:{
                'authorization':`bearer ${userInfo.jwt}`
            }
        }).then((res)=>{
            if (res.ok){

            }
        }).catch(()=>{
            //todo error message
        })
    }
    function addToCart(){
        callProductDetailCartPostAPI(id)
    }

    useEffect(() => {
        callProductDetailGetAPI(id)
    }, [])
    return (
        <>
            <Container>
                <Row>
                    <div className='product-detail-breadcrumbs-div'>
                        <Nav>
                            <Nav.Link className='product-detail-breadcrumbs-nav-link'>Anasayfa
                                <i className="bi bi-chevron-right"/>
                            </Nav.Link>
                            <Nav.Link className='product-detail-breadcrumbs-nav-link'>Kadın
                                <i className="bi bi-chevron-right"/>
                            </Nav.Link>
                            <Nav.Link className='product-detail-breadcrumbs-nav-link'>Giyim
                                <i className="bi bi-chevron-right"/>
                            </Nav.Link>
                            <Nav.Link className='product-detail-breadcrumbs-nav-link'>
                                {product.name}
                            </Nav.Link>
                        </Nav>
                    </div>
                    <div className='product-detail-container'>
                        <div className='product-detail-div'>
                            <div>
                                <div className='product-detail-div-fist-item'>
                                    <div>
                                        <img
                                            alt='women'
                                            src={product.imageURL}/>
                                    </div>
                                </div>
                                <div className='product-detail-div-second-item'>
                                    <div style={{marginBottom: '5px'}}>
                                        <span className='product-detail-category-name'>Kadın Giyim kategorisinde</span>
                                    </div>
                                    <div className='product-detail-second-item-header-div'>
                                        <div>
                                            <h1 className='product-header'>
                                                {product.name}
                                            </h1>
                                        </div>
                                        <div className='product-seller-div'>
                                            <span>Satıcı :</span>
                                            <span>Trendi-ol</span>
                                            <div>
                                                <img
                                                    alt='approved'
                                                    src='https://cdn.dsmcdn.com/indexing-sticker-stamp/stage/4b0d7ef1-8e8f-4c8f-b1c7-637e432ea2b4.png'/>
                                            </div>
                                        </div>
                                        <div className='product-rating-div'>
                                            <div>
                                                <i className="bi bi-star-fill"/>
                                                <i className="bi bi-star-fill"/>
                                                <i className="bi bi-star-fill"/>
                                                <i className="bi bi-star-fill"/>
                                                <i className="bi bi-star-fill"/>
                                            </div>
                                            <span className='product-review-count'>
                                                15 Değerlendirme
                                                <img
                                                    alt='camera'
                                                    src='https://cdn.dsmcdn.com/mobile/reviewrating/kamera-emoji6x.png'/>
                                            </span>
                                            <span className='product-rating-separator'>|</span>
                                            <span className='product-question'> 12 Soru & Cevap</span>
                                        </div>
                                        <div className='product-price-div'>
                                            <div className='product-price'>
                                                <span>
                                                    {new Intl.NumberFormat('tr-TR', {
                                                        style: 'currency',
                                                        currency: 'TRY'
                                                    }).format(product.price).slice(1)} TL
                                                </span>
                                            </div>
                                        </div>
                                        <div className='product-add-collection-div'>
                                            <i className="bi bi-bookmark-fill"/>
                                            <span>Koleksiyona Ekle</span>
                                        </div>
                                    </div>
                                    <div className='product-size-variant-div'>
                                        <div className='product-chosen-size-div'>
                                            <span> Beden: <span>M</span> </span>
                                            <div className='product-size-table'>
                                                <i className="bi bi-rulers"/>
                                                <span>
                                                    Beden Tablosu
                                                </span>
                                            </div>
                                        </div>
                                        <div className='product-size-variants-div'>
                                            <div>S</div>
                                            <div>M</div>
                                            <div>L</div>
                                            <div>XL</div>
                                        </div>
                                    </div>
                                    <div className='product-size-suggestion'>
                                        <i className="bi bi-rulers"/>
                                        <span>
                                            Kullanıcıların çoğu kendi bedeninizi almanızı öneriyor.
                                        </span>
                                    </div>
                                    <div className='product-add-to-cart-button-div'>
                                        <Button onClick={addToCart} className='product-add-to-cart-button'>Sepete Ekle</Button>
                                        <div>
                                            <Button onClick={handleChangeFavoriteButton}
                                                    className='product-favorite-button'>
                                                <i className={`${product.isFavorite ? 'bi bi-heart-fill favorited-heart-button' : 'bi bi-heart heart-button'}`}/>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}
