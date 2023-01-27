import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/img/ty-web.svg"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './index.css'
import {useMemo, useState} from "react";

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

export function LoginPage() {

    const categoryList = useMemo(() => {
        console.log('before data is created')
        return [
            {id: 1, name: "KADIN", href: '#kadin'},
            {id: 2, name: "ERKEK", href: '#erkek'},
            {id: 3, name: "ANNE & ÇOCUK", href: '#anne-cocuk'},
            {id: 1, name: "EV & MOBİLYA", href: '#ev-mobilya'},
            {id: 2, name: "SÜPERMARKET", href: '#supermarket'},
            {id: 3, name: "KOZMETİK", href: '#kozmetik'},
            {id: 1, name: "AYAKKABI & ÇANTA", href: '#ayakkabi-canta'},
            {id: 2, name: "SAAT & AKSESUAR", href: '#saat-aksesuar'},
            {id: 3, name: "ELEKTRONİK", href: '#elektronik'},
            {id: 1, name: "SPOR & OUTDOOR", href: '#spor-outdoor'},
        ];
    },[])

    return (
        <>
            <Navbar expand='lg'>
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
                            <Nav.Link href='#giris' className='text-black'>
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
            <Container className='w-100 d-flex flex-column align-items-center'>
                <h1 className='w-25 mb-3 text-center'>Merhaba,</h1>
                <label className='label mb-3'>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</label>
                <div className='tab'>
                    <Nav variant="tabs" defaultActiveKey="#giris-yap" className='w-100 tabs'>
                        <Nav.Item className='w-50'>
                            <Nav.Link href="#giris-yap">Giriş Yap</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='w-50'>
                            <Nav.Link href="#uye-ol">Üye Ol</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <Card className='card border-top-0'>
                    {/*<Card.Header className='w-100 d-flex justify-content-center'>*/}

                    {/*</Card.Header>*/}
                    <Card.Body>
                        <Form className='w-100'>
                            <Form.Group>
                                <Form.Label>E-Posta</Form.Label>
                                <Form.Control type='e-mail' placeholder='E-mail'/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Şifre</Form.Label>
                                <Form.Control type='password' placeholder='Şifre'/>
                            </Form.Group>
                            <Button variant="link" className="d-flex float-end">Şifremi Unuttum</Button>
                            <Button type='submit' className='w-100'>Giriş Yap</Button>
                        </Form>
                    </Card.Body>
                    <div className='w-100 d-flex justify-content-around pb-4'>
                        <Button type='button' variant='secondary'>Giriş Yap</Button>
                        <Button type='button' variant='secondary'>Giriş Yap</Button>
                    </div>
                </Card>
            </Container>
        </>
    )
}
