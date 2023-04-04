import Container from "react-bootstrap/Container";
import './index.css'
import {Nav} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
// import Col from "react-bootstrap/Col";
// import {ProductListItemComponent} from "../../components/ProductListItemComponent";

export function FavoritePage() {
    const navigate= useNavigate()
    return (
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
                    <div className='favorite-list-empty-div'>
                        <i className="bi bi-heart-fill"/>
                        <p>Favoriler Listeniz Henüz Boş</p>
                        <span>Favori listenizde ürün bulunamadı. “Alışverişe Başla” butonuna tıklayarak dilediğiniz ürünleri favoriye ekleyebilirsiniz.</span>
                        <div className='favorite-list-empty-div-button-div'>
                            <Button onClick={()=> navigate('/home')} className='favorite-list-empty-div-button'>Alışverişe Başla</Button>
                        </div>
                    </div>
                    {/*<Col>*/}
                    {/*    <ProductListItemComponent/>*/}
                    {/*</Col>*/}
                </div>
            </Row>
        </Container>
    )
}
