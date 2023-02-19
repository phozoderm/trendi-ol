import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './index.css'
import {useState} from "react";

export function SignUpPage() {

    const [selectedGender, setSelectedGender] = useState(null);

    // function onSignUpSubmit(e){
    //     e.preventDefault()
    // }

    return (
        <Container className='w-100 d-flex flex-column align-items-center'>
            <h2 className='w-25 mb-3 text-center'>Merhaba,</h2>
            <label className='label mb-3'>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</label>
            <div className='tab'>
                <Nav variant="tabs" defaultActiveKey="uyelik" className='w-100 tabs'>
                    <Nav.Item className='w-50'>
                        <Nav.Link href="giris">Giriş Yap</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='w-50'>
                        <Nav.Link href="uyelik">Üye Ol</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <Card className='login-sign-up-card border-top-0'>
                <Card.Body>
                    <Form className='w-100'>
                        <Form.Group>
                            <Form.Label>E-Posta</Form.Label>
                            <Form.Control type='e-mail' placeholder='E-mail'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='mt-4'>Şifre</Form.Label>
                            <Form.Control type='password' placeholder='Şifre'/>
                            <Form.Text>Şifreniz en az 7 karakter ve en fazla 64 karakter olmalı, harf
                                ve rakam
                                içermelidir.</Form.Text>
                        </Form.Group>
                        {/*<ToggleButtonGroup type="radio" name="options" className='w-100 mt-3'>*/}
                        {/*    <ToggleButton id="tbg-radio-1" value={1} variant='warning'>*/}
                        {/*        Kadın*/}
                        {/*    </ToggleButton>*/}
                        {/*    <ToggleButton id="tbg-radio-2" value={2} variant='warning'>*/}
                        {/*        Erkek*/}
                        {/*    </ToggleButton>*/}
                        {/*</ToggleButtonGroup>*/}
                        <div className='d-flex justify-content-between mt-3'>
                            <Button
                                className={`w-50 ${(selectedGender === 'female' ? 'gender-button-selected' : 'gender-button')}`}
                                onClick={() => setSelectedGender('female')}>
                                Kadın
                            </Button>
                            <Button
                                className={`w-50 ${(selectedGender === 'male' ? 'gender-button-selected' : 'gender-button')}`}
                                onClick={() => setSelectedGender('male')}>
                                Erkek
                            </Button>
                        </div>
                        <Button type='submit' className='w-100 mt-3 mb-1'>ÜYE OL</Button>
                        <Form.Text>Üye Ol'a basarak Üyelik Koşullarını kabul ediyorum.</Form.Text>
                        <div className='d-flex flex-column mt-3'>
                            <div className='d-flex flex-row'>
                                <Form.Check type='checkbox'/>
                                <Form.Text className='sign-up-page-text'>Kampanyalardan haberdar olabilmem için kişisel
                                    verilerimin işlenmesini ve tarafıma elektronik ileti gönderilmesini kabul
                                    ediyorum.</Form.Text>
                            </div>
                            <div className='d-flex flex-row'>
                                <Form.Check type='checkbox'/>
                                <Form.Text className='sign-up-page-text'>Kişisel verilerimin işlenmesine yönelik
                                    aydınlatma metnini okudum ve anladım.</Form.Text>
                            </div>
                        </div>
                    </Form>
                    <div className='w-100 d-flex justify-content-between mt-3'>
                        <Button type='button' variant='secondary' className='d-flex flex-row sign-button'>
                            <div className='facebook-icon d-flex justify-content-center align-items-center me-2'><i
                                className="bi bi-facebook"/></div>
                            <div className='d-flex flex-column login-page-sign-up'>
                                Facebook <Form.Text>ile kaydol</Form.Text>
                            </div>
                        </Button>
                        <Button type='button' variant='secondary' className='d-flex flex-row sign-button1'>
                            <div className='google-icon d-flex justify-content-center align-items-center me-2'><i
                                className="bi bi-google"/></div>
                            <div className='d-flex flex-column login-page-sign-up'>
                                Google <Form.Text>ile kaydol</Form.Text>
                            </div>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}
