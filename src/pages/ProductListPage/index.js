import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import './index.css'
import {useEffect, useState} from "react";
import {ProductListItemComponent} from "../../components/ProductListItemComponent";
import {ToastComponent} from "../../components/ToastComponent";

export function ProductListPage() {
    const [productList, setProductList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [showToast, setShowToast] = useState(false)

    function callProductListPageGetAPI() {
        const jwt = localStorage.getItem('jwt')
        const headers = jwt ? {
            'authorization': `bearer ${jwt}`
        } : null
        fetch('https://trendi-ol-backend.safiyeturk.com/product', {
            headers
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
        callProductListPageGetAPI()
    }, [])
    return (
        <>
            <Container>
                <style>{'body { background-color: white; }'}</style>
                <Row>
                    <Col xs={2}>
                        <Accordion alwaysOpen style={{fontFamily: 'source_sans_prosemibold,sans-serif'}}>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>Yıldızlı Ürünler</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>Cinsiyet</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='2'>
                                <Accordion.Header>İlgili Kategoriler</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='3'>
                                <Accordion.Header>Marka</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='4'>
                                <Accordion.Header>Beden</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='5'>
                                <Accordion.Header>Fiyat</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='6'>
                                <Accordion.Header>Teknik</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='7'>
                                <Accordion.Header>Kap</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='8'>
                                <Accordion.Header>Koleksiyon</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='9'>
                                <Accordion.Header>Bel</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='10'>
                                <Accordion.Header>Boy</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='11'>
                                <Accordion.Header>Boy / Ölçü</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='12'>
                                <Accordion.Header>Desen</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='13'>
                                <Accordion.Header>Dokuma Tipi</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='14'>
                                <Accordion.Header>Ek Özellik</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='15'>
                                <Accordion.Header>Kalıp</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='16'>
                                <Accordion.Header>Kol Boyu</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='17'>
                                <Accordion.Header>Kol Tipi</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='18'>
                                <Accordion.Header>Kumaş Tipi</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='19'>
                                <Accordion.Header>Paket İçeriği</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='20'>
                                <Accordion.Header>Yaka Tipi</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>

                    <Col xs={10}>
                        <div className='d-flex flex-column'>
                            <div
                                className='d-flex flex-row justify-content-between product-filter-select-container'>
                                <span style={{
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    fontFamily: 'source_sans_prosemibold,sans-serif'
                                }}>6503 sonuç listeleniyor </span>
                                <Form.Select size='sm' className='product-filter-select'>
                                    <option>Önerilen Sıralama</option>
                                    <option value="1">En düşük fiyat</option>
                                    <option value="2">En yüksek fiyat</option>
                                    <option value="3">En yeniler</option>
                                    <option value="4">En çok satanlar</option>
                                    <option value="5">En çok beğenilenler</option>
                                    <option value="6">En çok değerlendirilenler</option>
                                </Form.Select>
                            </div>
                            <div className='product-fast-delivery-container'>
                                <span className='product-fast-delivery-text'> <i className='bi bi-truck truck-icon'/>
                                     <span
                                         style={{fontWeight: '600', fontFamily: 'source_sans_prosemibold,sans-serif'}}>Hızlı Teslimat</span> yapılan ürünleri göster.
                                     <i className="bi bi-info-circle ms-2" style={{fontSize: '12px'}}/>
                                </span>
                                <Button variant='warning'>Uygula</Button>
                            </div>
                            <div  className='product-item-card-container'>
                                <Row md={3} lg={4}>
                                    {productList.map((product) => (
                                        <Col key={`product_${product.id}_${product.name}`}>
                                            <ProductListItemComponent
                                                bgImage={product.imageURL}
                                                title={product.name}
                                                price={product.price}
                                                isFavorite={product.isFavorite}
                                                id={product.id}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ToastComponent
                showToast={showToast}
                onClose={() => setShowToast(false)}
                toastMessage={errorMessage}
            />
        </>
    )
}
