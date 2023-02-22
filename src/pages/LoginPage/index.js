import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './index.css'
import {useState} from "react";

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [password, setPassword] = useState('');


    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const validatePassword = (password) => {
        const re = /[a-zA-Z]+/;
        const re2 = /[0-9]+/;
        return re.test(password) && re2.test(password) && password.length >= 7
    }
    const handleChangeLoginEmail = (event) => {
        setEmail(event.target.value)
        setIsEmailValid(true)
    }
    const handleChangeLoginPassword = (event) => {
        setPassword(event.target.value)
        setIsPasswordValid(true)
    }

    function callLoginPostAPI() {
        console.log('api cagirildi!')
    }

    function onLoginSubmit(e) {
        e.preventDefault()
        if (!validateEmail(email)) {
            setIsEmailValid(false)
            console.log('invalid email')
            return;
        }
        if (!validatePassword(password)) {
            setIsPasswordValid(false)
            console.log('invalid password')
            return;
        }
        callLoginPostAPI()
    }

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
                <Card.Body>
                    {!isEmailValid || !isPasswordValid ?
                        <div className='login-text-validation'><i className="bi bi-exclamation-circle"/>
                            <span>E-posta adresiniz ve/veya şifreniz hatalı.</span>
                        </div> : null}
                    <Form className='w-100' onSubmit={onLoginSubmit}>
                        <Form.Group>
                            <Form.Label>E-Posta</Form.Label>
                            <Form.Control className={`${!isEmailValid ? 'login-validation-input' : ''}`}
                                          onChange={handleChangeLoginEmail}
                                          type='e-mail'
                                          placeholder='E-mail'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='mt-4'>Şifre</Form.Label>
                            <Form.Control className={`${!isPasswordValid ? 'login-validation-input' : ''}`}
                                          onChange={handleChangeLoginPassword}
                                          type='password'
                                          placeholder='Şifre'/>
                        </Form.Group>
                        <Button variant="link" className="d-flex float-end forget-password mt-2">Şifremi
                            Unuttum</Button>
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
