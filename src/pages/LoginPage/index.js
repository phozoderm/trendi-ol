import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './index.css'

export function LoginPage() {

    return (
        <Container className='w-100 d-flex flex-column align-items-center'>
            <h2 className='w-25 mb-3 text-center'>Merhaba,</h2>
            <label className='label mb-3'>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</label>
            <div className='tab'>
                <Nav variant="tabs" defaultActiveKey="giris" className='w-100 tabs'>
                    <Nav.Item className='w-50'>
                        <Nav.Link href="giris">Giriş Yap</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='w-50'>
                        <Nav.Link href="uyelik">Üye Ol</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <Card className='login-sign-up-card border-top-0'>
                {/*<Card.Header className='w-100 d-flex justify-content-center'>*/}

                {/*</Card.Header>*/}
                <Card.Body>
                    <Form className='w-100'>
                        <Form.Group>
                            <Form.Label>E-Posta</Form.Label>
                            <Form.Control type='e-mail' placeholder='E-mail'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='mt-4'>Şifre</Form.Label>
                            <Form.Control type='password' placeholder='Şifre'/>
                        </Form.Group>
                        <Button variant="link" className="d-flex float-end forget-password mt-2">Şifremi Unuttum</Button>
                        <Button type='submit' className='w-100 mt-2'>GİRİŞ YAP</Button>
                    </Form>
                    <div className='w-100 d-flex justify-content-between mt-3'>
                        <Button type='button' variant='secondary' className='d-flex flex-row sign-button'>
                            <div className='facebook-icon d-flex justify-content-center align-items-center me-2'><i
                                className="bi bi-facebook"/></div>
                            <div className='d-flex flex-column login-page-sign-in'>
                                Facebook <Form.Text>ile giriş yap</Form.Text>
                            </div>
                        </Button>
                        <Button type='button' variant='secondary' className='d-flex flex-row sign-button1'>
                            <div className='google-icon d-flex justify-content-center align-items-center me-2'><i
                                className="bi bi-google"/></div>
                            <div className='d-flex flex-column login-page-sign-in'>
                                Google <Form.Text>ile giriş yap</Form.Text>
                            </div>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}
