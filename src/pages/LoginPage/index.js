import './index.css'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/img/ty-web.svg"

export function LoginPage() {
    return (
        <>
            <Navbar  expand='lg'>
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
                        <Nav className='nav2'>
                            {/*<NavDropdown title="Giriş Yap" id="giris-dropdown">*/}
                            {/*    <NavDropdown.Item href="#giris">Giriş Yap</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#uye-ol">*/}
                            {/*        Üye Ol*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                            <Nav.Link href='#giris' className='text-black'>
                                <i className="bi bi-person me-1 icon"></i>
                                Giriş Yap
                            </Nav.Link>
                            <Nav.Link href='#favorilerim' className='text-black ms-3'>
                                <i className="bi bi-heart me-1"></i>
                                Favorilerim
                            </Nav.Link>
                            <Nav.Link href='#sepetim' className='text-black ms-3'>
                                <i className="bi bi-cart3 me-1"></i>
                                Sepetim
                            </Nav.Link>
                        </Nav>
                    </div>
                    <div>
                        <Nav className='nav3'>
                            <Nav.Link href='#kadin' className='text-black me-3'>
                                KADIN
                            </Nav.Link>
                            <Nav.Link href='#erkek' className='text-black me-3'>
                                ERKEK
                            </Nav.Link>
                            <Nav.Link href='#anne-cocuk' className='text-black me-3'>
                                ANNE & ÇOCUK
                            </Nav.Link>
                            <Nav.Link href='#ev-mobilya' className='text-black me-3'>
                                EV & MOBİLYA
                            </Nav.Link>
                            <Nav.Link href='#supermarket' className='text-black me-3'>
                                SÜPERMARKET
                            </Nav.Link>
                            <Nav.Link href='#kozmetik' className='text-black me-3'>
                                KOZMETİK
                            </Nav.Link>
                            <Nav.Link href='#ayakkabi-canta' className='text-black me-3'>
                                AYAKKABI & ÇANTA
                            </Nav.Link>
                            <Nav.Link href='#saat-aksesuar' className='text-black me-3'>
                                SAAT & AKSESUAR
                            </Nav.Link>
                            <Nav.Link href='#elektronik' className='text-black me-3'>
                                ELEKTRONİK
                            </Nav.Link>
                            <Nav.Link href='#spor-outdoor' className='text-black me-3'>
                                SPOR & OUTDOOR
                            </Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>

            <Form>
                <Form.Group>

                </Form.Group>
            </Form>
        </>
    )
}
