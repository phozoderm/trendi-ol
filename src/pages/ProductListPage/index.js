import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import './index.css'
import {useMemo} from "react";
import {ProductListItemComponent} from "../../components/ProductListItemComponent";

export function ProductListPage() {
    const productList = useMemo(() => {
        return [
            {
                id: 1,
                image: 'https://cdn.dsmcdn.com/ty508/product/media/images/20220815/16/160229309/56696304/2/2_org.jpg',
                title: 'TRENDİ-OLKİLLA Siyah Toparlayıcı Beli Lastikli Yüksek Bel Örme Tayt'
            },
            {
                id: 2,
                image: 'https://cdn.dsmcdn.com/ty57/product/media/images/20210119/12/55109138/126239837/1/1_org.jpg',
                title: `TRENDİ-OLKİLLA Siyah-Taba 2'li Paket Deri Görünümlü Kadın Kemer`
            },
            {
                id: 3,
                image: 'https://cdn.dsmcdn.com/ty562/product/media/images/20221013/13/192656117/192175676/2/2_org.jpg',
                title: 'TRENDİ-OLKİLLA Siyah Önü Yırtmaç Detaylı Yüksek Bel Örme Tayt'
            },
            {
                id: 4,
                image: 'https://cdn.dsmcdn.com/ty319/product/media/images/20220202/16/41938622/93620623/2/2_org.jpg',
                title: 'TRENDİ-OLKİLLA Siyah Scuba Şardonlu Yüksek Bel Örme Tayt'
            },
            {
                id: 5,
                image: 'https://cdn.dsmcdn.com/ty537/product/media/images/20221006/12/187521770/320295612/2/2_org.jpg',
                title: 'TRENDİ-OLKİLLA Siyah Etek Görünümlü Süper Mini Şort Etek'
            },
            {
                id: 6,
                image: 'https://cdn.dsmcdn.com/ty253/product/media/images/20211124/10/1256750/255858700/2/2_org.jpg',
                title: 'TRENDİ-OLKİLLA Indigo Soluk Efektli Wide Leg/Rahat Kesim Normal Bel İnce Örme Eşofman Altı'
            },
            {
                id: 7,
                image: 'https://cdn.dsmcdn.com/ty320/product/media/images/20220202/16/42004205/233303739/2/2_org.jpg',
                title: 'TRENDİ-OLKİLLA Siyah Vatkalı Drape Detaylı Fitted/Vücuda Oturan Esnek Çıtçıtlı Örme Body'
            },
            {
                id: 8,
                image: 'https://cdn.dsmcdn.com/ty657/product/media/images/20221223/9/244587745/143355654/2/2_org.jpg',
                title: `TRENDİ-OLKİLLA Siyah-Beyaz 2'li Paket Fitted/Vücuda Oturan Crop Halter Yaka Fitilli Esnek Örme Atlet`
            },
            {
                id: 9,
                image: 'https://cdn.dsmcdn.com/ty698/product/media/images/20230123/16/263955096/231852901/2/2_org.jpg',
                title: 'TRENDİ-OLKİLLA Açık Haki Geniş Kesim Oversize Kemerli Rüzgarlık Detaylı Su İtici Uzun Trençkot'
            },
            {
                id: 10,
                image: 'https://cdn.dsmcdn.com/ty85/product/media/images/20210313/17/71111860/88790100/1/1_org.jpg',
                title: 'TRENDİ-OLKİLLA Siyah Cep Detaylı Suni Deri Blazer Ceket'
            },
            {
                id: 11,
                image: 'https://cdn.dsmcdn.com/ty508/product/media/images/20220815/16/160229322/224779670/2/2_org.jpg',
                title: 'TRENDİ-OLKİLLA Antrasit Soluk Efektli Wide Leg/Rahat Kesim Normal Bel İnce Örme Eşofman Altı'
            },
            {
                id: 12,
                image: 'https://cdn.dsmcdn.com/ty160/product/media/images/20210819/16/120151286/123408601/5/5_org.jpg',
                title: 'TRENDİ-OLKİLLA Siyah Yüksek Bel Nervür Dikişli Pantolon'
            },

        ]
    })
    return (
        <>
            <Container className='d-flex flex-row product-page-container'>
                <style>{'body { background-color: white; }'}</style>
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
                <Container className='d-flex flex-column'>
                    <Container className='d-flex flex-row justify-content-between product-filter-select-container'>
                        <span style={{fontSize: '18px', fontWeight:'600', fontFamily: 'source_sans_prosemibold,sans-serif'}}>6503 sonuç listeleniyor </span>
                        <Form.Select size='sm' className='product-filter-select'>
                            <option>Önerilen Sıralama</option>
                            <option value="1">En düşük fiyat</option>
                            <option value="2">En yüksek fiyat</option>
                            <option value="3">En yeniler</option>
                            <option value="4">En çok satanlar</option>
                            <option value="5">En çok beğenilenler</option>
                            <option value="6">En çok değerlendirilenler</option>
                        </Form.Select>
                    </Container>
                    <Container className='product-fast-delivery-container'>
                        <span className='product-fast-delivery-text'> <i className='bi bi-truck truck-icon'/>
                            <span style={{fontWeight: '600', fontFamily: 'source_sans_prosemibold,sans-serif'}}>Hızlı Teslimat</span> yapılan ürünleri göster.
                            <i className="bi bi-info-circle ms-2" style={{fontSize: '12px'}}/>
                        </span>
                        <Button variant='warning'>Uygula</Button>
                    </Container>
                    <Container className='product-item-card-container'>
                        <Row md={3} lg={4}>
                            {productList.map((product) => (
                                <Col>
                                    <ProductListItemComponent
                                        bgImage={product.image}
                                        title={product.title}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Container>
            </Container>
        </>
    )
}
