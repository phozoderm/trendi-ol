import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {ToastComponent} from "../../components/ToastComponent";
import {ProductListItemComponent} from "../../components/ProductListItemComponent";
import './index.css'
import {UserContext} from "../../App";

export function FavoritePage() {
    const navigate = useNavigate()
    const [productList, setProductList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const userInfo = useContext(UserContext);

    function callFavoritePageGetAPI() {
        fetch('https://trendi-ol-backend.safiyeturk.com/product/favorite', {
            headers: {
                'authorization': `bearer ${userInfo.jwt}`
            }
        }).then((res) => {
            if (res.ok) {
                res.json().then((responseBody) => {
                    setProductList(responseBody)
                })
            }
        }).catch(() => {
            setShowToast(true)
            setErrorMessage('Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.')
        })
    }

    useEffect(() => {
        callFavoritePageGetAPI()
    }, [])

    return (
        <>
            <Container fluid>
                <Row>
                    <div className='favorite-page-container'>
                        <div className='favorite-page-header-container'>
                            <div className='favorite-header-item-div'>
                                <div className='favorite-header-item-first'>
                                    <Nav style={{height: '100%'}} defaultActiveKey="favoriler">
                                        <Nav.Item className='favorite-header-my-favorite-nav-item'>
                                            <Nav.Link className='favorite-header-my-favorite-nav-item-link'
                                                      href="favoriler">
                                                <i className="bi bi-heart-fill"/>
                                                Favorilerim
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='favorite-header-my-collection-nav-item'>
                                            <Nav.Link className='favorite-header-my-collection-nav-item-link'
                                                      href='koleksiyonlar'>
                                                <i className="bi bi-bookmark-fill"/>
                                                Koleksiyonlarım
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                                <div className='favorite-header-item-second'>
                                    <Form>
                                        <Form.Group className='favorite-header-search-input'>
                                            <i className="bi bi-search"/>
                                            <Form.Control
                                                className='favorite-header-search-control'
                                                type='search'
                                                placeholder='Favorilerimde ara'
                                            />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className='favorite-filters-div'>
                            <div className='favorite-filter-item-div'>
                                <div className='favorite-filter-item-icon-heart'>
                                    <i className="bi bi-heart-fill"/>
                                </div>
                                <span>Tüm Favoriler</span>
                            </div>
                            <div className='favorite-filter-item-div'>
                                <div className='favorite-filter-item-icon-star'>
                                    <i className="bi bi-star-fill"/>
                                </div>
                                <span>Yıldızlı Ürünler</span>
                            </div>
                            <div className='favorite-filter-item-div'>
                                <div className='favorite-filter-item-icon-arrow'>
                                    <i className="bi bi-graph-down-arrow"/>
                                </div>
                                <span>Fiyatı Düşenler</span>
                            </div>
                            <div className='favorite-filter-item-div'>
                                <div className='favorite-filter-item-icon-coupon'>
                                    <i className="bi bi-ticket-perforated-fill"/>
                                </div>
                                <span>Kuponlu Ürünler</span>
                            </div>
                        </div>
                        {
                            productList.length === 0 ?
                                <div className='favorite-list-empty-div'>
                                    <i className="bi bi-heart-fill"/>
                                    <p>Favoriler Listeniz Henüz Boş</p>
                                    <span>Favori listenizde ürün bulunamadı. “Alışverişe Başla” butonuna tıklayarak dilediğiniz ürünleri favoriye ekleyebilirsiniz.</span>
                                    <div className='favorite-list-empty-div-button-div'>
                                        <Button onClick={() => navigate('/home')}
                                                className='favorite-list-empty-div-button'>Alışverişe
                                            Başla</Button>
                                    </div>
                                </div>
                                :
                                <div className='favorite-list-div'>
                                    <Row md={4} lg={5}>
                                        {productList.map((product) => (
                                            <Col key={`product_${product.id}_${product.name}`}>
                                                <ProductListItemComponent
                                                    bgImage={product.imageURL}
                                                    title={product.name}
                                                    price={product.price}
                                                    isFavorite={product.isFavorite}
                                                    id={product.id}
                                                    isCrossIconVisible={true}
                                                    onFavoriteDeleted={callFavoritePageGetAPI}
                                                    isButtonVisible={true}
                                                />
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                        }
                    </div>
                </Row>
            </Container>
            <ToastComponent
                showToast={showToast}
                toastMessage={errorMessage}
                onClose={() => setShowToast(false)}
            />
        </>
    )
}
