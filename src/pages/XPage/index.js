import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
// import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/img/logo3.png"
import google from "../../assets/img/google.png"
import visa from "../../assets/img/logo7.png"
import american from "../../assets/img/logo6.png"
import master from "../../assets/img/logo8.png"
import './index.css'
import {useMemo, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Backdrop from "bootstrap/js/src/util/backdrop";
import Button from "react-bootstrap/Button";

// console.log('before data is created')
// const data = [
//     {id: 1, name: "KADIN", href: '#kadin'},
//     {id: 2, name: "ERKEK", href: '#erkek'},
//     {id: 3, name: "ANNE & ÇOCUK", href: '#anne-cocuk'},
//     {id: 1, name: "EV & MOBİLYA", href: '#ev-mobilya'},
//     {id: 2, name: "SÜPERMARKET", href: '#supermarket'},
//     {id: 3, name: "KOZMETİK", href: '#kozmetik'},
//     {id: 1, name: "AYAKKABI & ÇANTA", href: '#ayakkabi-canta'},
//     {id: 2, name: "SAAT & AKSESUAR", href: '#saat-aksesuar'},
//     {id: 3, name: "ELEKTRONİK", href: '#elektronik'},
//     {id: 1, name: "SPOR & OUTDOOR", href: '#spor-outdoor'},
// ];
// console.log('data is created!')

export function XPage() {

    const navigate = useNavigate();
    const categoryList = useMemo(() => {
        return [
            {id: 1, name: "KADIN", href: '#kadin'},
            {id: 2, name: "ERKEK", href: '#erkek'},
            {id: 3, name: "ANNE & ÇOCUK", href: '#anne-cocuk'},
            {id: 4, name: "EV & MOBİLYA", href: '#ev-mobilya'},
            {id: 5, name: "SÜPERMARKET", href: '#supermarket'},
            {id: 6, name: "KOZMETİK", href: '#kozmetik'},
            {id: 7, name: "AYAKKABI & ÇANTA", href: '#ayakkabi-canta'},
            {id: 8, name: "SAAT & AKSESUAR", href: '#saat-aksesuar'},
            {id: 9, name: "ELEKTRONİK", href: '#elektronik'},
            {id: 0, name: "SPOR & OUTDOOR", href: '#spor-outdoor'},
        ];
    }, [])

    const trendiOlList = useMemo(() => {
        return [
            {id: 1, name: "Biz Kimiz", href: '#biz-kimiz'},
            {id: 2, name: "Kariyer", href: '#kariyer'},
            {id: 3, name: "İletişim", href: '#iletisim'},
            {id: 4, name: "Trendi-ol'da Satış Yap", href: '#satis-yap'},
            {id: 5, name: "Güvenli Alışveriş", href: '#guvenli-alisveris'},
        ]
    }, [])

    const aboutUs = useMemo(() => {
        return [
            {id: 1, name: "Who we are", href: '#who-we-are'},
            {id: 2, name: "Careers", href: '#careers'},
            {id: 3, name: "Contact us", href: '#contact-us'},
            {id: 4, name: "Mobil Uygulamalar", href: '#mobil-uygulamalar'},
        ]
    }, [])

    const campaigns = useMemo(() => {
        return [
            {id: 1, name: "Aktif Kampanyalar", href: '#aktif-kampanyalar'},
            {id: 2, name: "Elite Üyelik", href: '#elite-uyelik'},
            {id: 3, name: "Hediye Fikirleri", href: '#hediye-fikirleri'},
            {id: 4, name: "Trendi-ol Fırsatları", href: '#firsatlar'},
            {id: 5, name: "Sosyal Medya", href: '#sosyal-medya'},
        ]
    }, [])

    const help = useMemo(() => {
        return [
            {id: 1, name: "Sıkça Sorulan Sorular", href: '#sikca-sorulan-sorular'},
            {id: 2, name: "Canlı Yardım", href: '#canli-yardim'},
            {id: 3, name: "Nasıl İade Edebilirim?", href: '#iade-islemleri'},
            {id: 4, name: "İşlem Rehberi", href: '#islem-rehberi'},
            {id: 5, name: "Ülke Değiştir", href: '#ulke-degistir'},
        ]
    }, [])

    function myFunction() {
        navigate('/')
    }

    return (
        <>
            <Navbar expand='lg' className='navbar-xpage mb-4'>
                <Container className='d-flex flex-column'>
                    <div className='w-100 d-flex justify-content-end'>
                        <Nav className='nav1'>
                            <Nav.Link href='#kadin' className='text-black'>
                                İndirim Kuponlarım
                            </Nav.Link>
                            <Nav.Link href='#erkek' className='text-black'>
                                Trendi-ol'da Satış Yap
                            </Nav.Link>
                            <Nav.Link href='#anne-cocuk' className='text-black'>
                                Yardım & Destek
                            </Nav.Link>
                        </Nav>
                    </div>
                    <div className='w-100 d-flex flex-row justify-content-between align-items-center'>
                        <Navbar.Brand>
                            <img
                                width='146'
                                src={logo}
                                onClick={() => myFunction()}
                            />
                        </Navbar.Brand>
                        <Form>
                            <Form.Group className='search-button'>
                                <Form.Control
                                    className='bg-light border border-light'
                                    type='search'
                                    placeholder='Aradığınız ürün, kategori veya markayı yazınız'
                                />
                            </Form.Group>
                        </Form>
                        <Nav className='nav2 d-flex align-items-center'>
                            {/*<i className="bi bi-person me-1 icon "></i>*/}
                            {/*<NavDropdown title="Giriş Yap" id="giris-dropdown"*/}
                            {/*             className='d-flex align-items-center text-black'>*/}
                            {/*    <NavDropdown.Item href="#giris">*/}
                            {/*        Giriş Yap*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#uye-ol">*/}
                            {/*        Üye Ol*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                            <Nav.Link href='giris' className='text-black'>
                                <i className="bi bi-person me-1 icon"/>
                                Giriş Yap
                            </Nav.Link>
                            <Nav.Link href='#favorilerim' className='text-black ms-3'>
                                <i className="bi bi-heart me-1 icon"/>
                                Favorilerim
                            </Nav.Link>
                            <Nav.Link href='#sepetim' className='text-black ms-3'>
                                <i className="bi bi-cart3 me-1 icon"/>
                                Sepetim
                            </Nav.Link>
                        </Nav>
                    </div>
                    <div>
                        <Nav className='nav3'>
                            {categoryList.map((category) => (
                                <Nav.Link href={category.href} className='text-black me-3'>
                                    {category.name}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </div>
                </Container>
            </Navbar>
            <Outlet/>

            <Container fluid className='x-page-footer mt-3 d-flex justify-content-center'>
                <Row>
                    <Col>
                        <ListGroup className='pt-5'>
                            <ListGroup.Item><h5>Trendi-ol</h5></ListGroup.Item>
                            {trendiOlList.map((trendiOl) => (
                                <ListGroup.Item href={trendiOl.href}>
                                    {trendiOl.name}
                                </ListGroup.Item>
                            ))}
                            <div className='d-flex flex-row'>
                                <ListGroup.Item className='social-media'>
                                    <img
                                        src='https://cdn.dsmcdn.com/frontend/web/assets/images/troy-logo-transparent.png'
                                        width='56'
                                        height='26'
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item className='social-media1'>
                                    <img
                                        src={master}
                                        width='62'
                                        height='35'
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item className='social-media1'>
                                    <img
                                        src={visa}
                                        width='75'
                                        height='24'
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item className='social-media1'>
                                    <img
                                        src={american}
                                        width='60'
                                        height='25'
                                    />
                                </ListGroup.Item>
                            </div>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup className='pt-5'>
                            <ListGroup.Item><h5>About Us</h5></ListGroup.Item>
                            {aboutUs.map((about) => (
                                <ListGroup.Item href={about.href}>
                                    {about.name}
                                </ListGroup.Item>
                            ))}
                            <div>
                                <ListGroup.Item>
                                    <img
                                        src='https://upload.wikimedia.org/wikipedia/commons/3/3b/Download_on_the_App_Store_Badge_TR_RGB_blk.svg'
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <img
                                        src={google}
                                        width='151'
                                        height='40'
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <img
                                        src='https://tachogram.com/public/badges/appgallery/app_gallery_tr.png'
                                        width='151'
                                        height='40'
                                    />
                                </ListGroup.Item>
                            </div>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup className='pt-5'>
                            <ListGroup.Item><h5>Kampanyalar</h5></ListGroup.Item>
                            {campaigns.map((campaign) => (
                                <ListGroup.Item href={campaign.href}>
                                    {campaign.name}
                                </ListGroup.Item>
                            ))}
                            <div className='d-flex flex-row'>
                                <ListGroup.Item className='social-media'>
                                    <i className="bi bi-facebook"/>
                                </ListGroup.Item>
                                <ListGroup.Item className='social-media1'>
                                    <i className="bi bi-instagram"/>
                                </ListGroup.Item>
                                <ListGroup.Item className='social-media1'>
                                    <i className="bi bi-twitter"/>
                                </ListGroup.Item>
                                <ListGroup.Item className='social-media1'>
                                    <i className="bi bi-youtube"/>
                                </ListGroup.Item>
                            </div>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup className='pt-5'>
                            <ListGroup.Item><h5>Yardım</h5></ListGroup.Item>
                            {help.map((help) => (
                                <ListGroup.Item href={help.href}>
                                    {help.name}
                                </ListGroup.Item>
                            ))}
                            <div className='d-flex flex-row'>
                                <ListGroup.Item>
                                    <img
                                        src='https://cdn.dsmcdn.com/web/production/etbis-qr.png'
                                        width='80'
                                        height='90'
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <img
                                        src='https://cdn.dsmcdn.com/frontend/web/assets/images/trust-stamp.png'
                                        width='50'
                                        height='50'
                                    />
                                </ListGroup.Item>
                            </div>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='footer-x'>
                    <div className='d-flex flex-row justify-content-around align-items-center'>
                        <div>
                            <label>©2023 STNA Grup Danışmanlık İletişim ve Satış Tic.A.Ş.-Her Hakkı Saklıdır.</label>
                        </div>
                        <div>
                            <label>Çerez Tercihleri</label>
                        </div>
                        <div>
                            <label>KVK ve Gizlilik Politikası</label>
                        </div>
                        <div>
                            <label>DSM Grup</label>
                        </div>
                        <div>
                            <label>Kullanım Koşulları</label>
                        </div>
                    </div>
            </Container>
            <Container fluid className='container-white'> </Container>
        </>
    )
}
