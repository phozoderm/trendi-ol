import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './index.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export function SignUpPage() {
    const navigate = useNavigate()
    const [selectedGender, setSelectedGender] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const [isCheckValid, setIsCheckValid] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const validatePassword = (password) => {
        const re = /[a-zA-Z]+/;
        const re2 = /[0-9]+/;
        return re.test(password) && re2.test(password) && password.length >= 7
    }
    const showPassword = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    const handleChangeSignUpEmail = (event) => {
        setEmail(event.target.value)
        setIsEmailValid(true)
    }
    const handleChangeSignUpPassword = (event) => {
        setPassword(event.target.value)
        setIsPasswordValid(true)
    }
    const handleChangeBoxes = (event) => {
        setIsChecked(event.target.checked)
        setIsCheckValid(true)
    }
    const onFormChange = () => {
        setErrorMessage('')
    }

    function callSignUpPostAPI() {
        fetch('https://trendi-ol-backend.safiyeturk.com/user', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                gender: selectedGender,
            }),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => {
                if (res.ok) {
                    navigate('/giris')
                } else {
                    if (res.status === 409) {
                        setIsEmailValid(false)
                        setErrorMessage('Bu e-posta adresi kullanılamaz. Lütfen başka bir e-posta adresi deneyiniz.')
                    } else {
                        setErrorMessage('Bir hata oluştu. Lütfen tekrar deneyiniz.')
                    }
                }
            }).catch(() => {
            setErrorMessage('Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.')
        })
    }

    function onSignUpSubmit(e) {
        e.preventDefault()
        if (email.length === 0) {
            setIsEmailValid(false)
            setErrorMessage('E-posta ve/veya şifrenizi giriniz.')
            return;
        }
        if (!validateEmail(email)) {
            setIsEmailValid(false)
            setErrorMessage('Lütfen geçerli bir email adresi giriniz.')
            return;
        }
        if (password.length === 0) {
            setIsPasswordValid(false)
            setErrorMessage('E-posta ve/veya şifrenizi giriniz.')
            return;
        }
        if (!validatePassword(password)) {
            setIsPasswordValid(false)
            setErrorMessage('Şifreniz 7 ile 64 karakter arasında olmalıdır.')
            return;
        }
        if (!isChecked) {
            setIsCheckValid(false)
            return;
        }
        callSignUpPostAPI()
    }

    return (
        <Container className='w-100 d-flex flex-column align-items-center'>
            <h2 className='w-25 mb-3 text-center'>Merhaba,</h2>
            <label className='label mb-3'>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</label>
            <div className='nav-div'>
                <Nav variant="tabs" defaultActiveKey="uyelik" className='w-100 card-form-tabs'>
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
                    <Form className='w-100' onSubmit={onSignUpSubmit} onChange={onFormChange}>
                        <Form.Group>
                            <Form.Label>E-Posta</Form.Label>
                            <Form.Control className={`${(isEmailValid === false ? 'sign-up-validation-input' : '')}`}
                                          type='e-mail'
                                          placeholder='E-mail'
                                          onChange={handleChangeSignUpEmail}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='mt-4'>Şifre</Form.Label>
                            <div className='sign-up-input-container'>
                                <i onClick={showPassword}
                                   className={`bi ${isPasswordVisible ? 'bi-eye-slash' : 'bi-eye'} sign-up-input-icon`}/>
                                <Form.Control type={`${isPasswordVisible ? 'text' : 'password'}`}
                                              placeholder='Şifre'
                                              onChange={handleChangeSignUpPassword}
                                              className={`sign-up-input ${(isPasswordValid === false ? 'sign-up-validation-input' : '')}`}/>
                            </div>

                            <Form.Text className={`${isPasswordValid === false ? 'password-text-validation' : ''}`}>Şifreniz
                                en az 7 karakter ve en fazla 64 karakter olmalı, harf ve rakam içermelidir.</Form.Text>
                        </Form.Group>
                        <Form.Label className='mt-4'>Cinsiyet (Opsiyonel)</Form.Label>
                        <div className='d-flex justify-content-between'>
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
                                <Form.Check type='checkbox'>
                                    <Form.Check.Input type={"checkbox"}
                                                      className={`${(isCheckValid === false ? 'form-check-input-validation' : '')}`}
                                                      onChange={handleChangeBoxes}
                                                      checked={isChecked}/>
                                </Form.Check>
                                <Form.Text
                                    className={`${(isCheckValid === false ? 'sign-up-page-text-validation' : 'sign-up-page-text')}`}>
                                    Kişisel verilerimin işlenmesine yönelik aydınlatma metnini okudum ve
                                    anladım.</Form.Text>
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
