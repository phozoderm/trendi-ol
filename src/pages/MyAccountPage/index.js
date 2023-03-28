import {Outlet, useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import './index.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function MyAccountPage() {
    const navigate = useNavigate()

    return (
        <>
            <Container className='mt-4'>
                <style>{'body { background-color: white; }'}</style>
                <Row>
                    <Col xs={2}>
                        <Nav className='d-flex flex-column my-account-sidebar'>
                            <Nav.Item className='my-account-sidebar-item-title'>
                                <span>Hesabım</span>
                            </Nav.Item>
                            <Nav.Item className='my-account-sidebar-item'>
                                <Nav.Link onClick={() => navigate('siparislerim')}> <i
                                    className="bi bi-box-fill me-2"/> Siparişlerim</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='my-account-sidebar-item'>
                                <Nav.Link> <i className="bi bi-chat-left-dots-fill me-2"/> Değerlendirmelerim</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='my-account-sidebar-item'>
                                <Nav.Link> <i className="bi bi-envelope-fill me-2"/> Satıcı Mesajlarım</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='my-account-sidebar-item'>
                                <Nav.Link> <i className="bi bi-arrow-counterclockwise me-2"/> Tekrar Satın Al</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='my-account-sidebar-item'>
                                <Nav.Link> <i className="bi bi-wallet-fill me-2"/> Trendi-ol Cüzdanım</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='my-account-sidebar-item'>
                                <Nav.Link> <i className="bi bi-shop-window me-2"/> Takip Ettigim Mağazalar</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='my-account-sidebar-item'>
                                <Nav.Link> <i className="bi bi-bag-check-fill me-2"/> Önceden Gezdiklerim</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='my-account-sidebar-item'>
                                <Nav.Link onClick={() => navigate('indirimKuponlari')}> <i
                                    className="bi bi-ticket-perforated-fill me-2"/> İndirim Kuponlarım</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='my-account-sidebar-item'>
                                <Nav.Link onClick={() => navigate('kullaniciBilgileri')}> <i
                                    className="bi bi-person-fill me-2"/> Kullanıcı Bilgilerim</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='my-account-sidebar-item'>
                                <Nav.Link onClick={() => navigate('adresBilgileri')}> <i
                                    className="bi bi-geo-alt-fill me-2"/>Adres Bilgilerim</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='my-account-sidebar-item'>
                                <Nav.Link> <i className="bi bi-credit-card-fill me-2"/>Kayıtlı Kartlarım</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='my-account-sidebar-item'>
                                <Nav.Link onClick={()=> navigate('elite')}> <i className="bi bi-suit-diamond-fill me-2"/>Trendi-ol Elite</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='my-account-sidebar-item'>
                                <Nav.Link> <i className="bi bi-bell-fill me-2"/>Duyuru Tercihlerim</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='my-account-sidebar-item'>
                                <Nav.Link> <i className="bi bi-question-circle-fill me-2"/>Yardım</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='my-account-sidebar-item-assistant'>
                                <Nav.Link className='d-flex flex-column align-items-center'>
                                    <i className="bi bi-chat-left-heart-fill"/>
                                    <span> Trendyol Asistan'a Sor</span>
                                    <p>7/24 sorularınızı cevaplar</p>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={10}>
                        <Outlet/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
