import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './index.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export function LoginPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const showHide = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    const handleChangeLoginEmail = (event) => {
        setEmail(event.target.value)
        setIsEmailValid(true)
    }
    const handleChangeLoginPassword = (event) => {
        setPassword(event.target.value)
        setIsPasswordValid(true)
    }
    const onFormChange = () => {
        setErrorMessage('')
    }

    function callLoginPostAPI() {
        fetch('http://localhost:1234/session', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                'content-type': 'application/json',
            }
        }).then(res => {
            if (res.ok) {
                res.json().then((responseBody)=>{
                    localStorage.setItem('email', email)
                    localStorage.setItem('jwt', responseBody.jwt)
                    window.location.reload()
                    navigate('/home')
                })

            } else {
                if (res.status === 401) {
                    setErrorMessage('E-posta adresiniz ve/veya şifreniz hatalı.')
                } else {
                    setErrorMessage('Bir hata oluştu. Lütfen tekrar deneyiniz.')
                }
            }
        }).catch(() => {
            setErrorMessage('Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.')
        })
    }

    function onLoginSubmit(e) {
        e.preventDefault()
        if (email.length === 0) {
            setIsEmailValid(false)
            setErrorMessage('Lütfen geçerli bir email adresi giriniz.')
            return;
        }
        if (password.length === 0) {
            setIsPasswordValid(false)
            setErrorMessage('Lütfen şifrenizi giriniz.')
            return;
        }
        callLoginPostAPI()
    }

    return (
        <Container className='w-100 d-flex flex-column align-items-center'>
            <h2 className='w-25 mb-3 text-center'>Merhaba,</h2>
            <label className='label mb-3'>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</label>
            <div className='nav-div'>
                <Nav variant="tabs" defaultActiveKey="giris" className='w-100 card-form-tabs'>
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
                    {errorMessage ? <div className='login-text-validation'><i className="bi bi-exclamation-circle"/>
                        <span>{errorMessage}</span>
                    </div> : null}
                    <Form className='w-100' onSubmit={onLoginSubmit} onChange={onFormChange}>
                        <Form.Group>
                            <Form.Label>E-Posta</Form.Label>
                            <Form.Control className={`${!isEmailValid ? 'login-validation-input' : ''}`}
                                          onChange={handleChangeLoginEmail}
                                          type='e-mail'
                                          placeholder='E-mail'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='mt-4'>Şifre</Form.Label>
                            <div className='login-input-container'>
                                <i onClick={showHide}
                                   className={`bi ${isPasswordVisible ? 'bi-eye-slash' : 'bi-eye'} login-input-icon`}/>
                                <Form.Control
                                    className={`login-input ${!isPasswordValid ? 'login-validation-input' : ''}`}
                                    onChange={handleChangeLoginPassword}
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    placeholder='Şifre'/>
                            </div>
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
