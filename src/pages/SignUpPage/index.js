import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './index.css'
import {useState} from "react";
import {InputGroup} from "react-bootstrap";

export function SignUpPage() {

    const [selectedGender, setSelectedGender] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false)
    const [isChecked1, setIsChecked1] = useState(false)

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleChangeBoxes = (event) => {
        setIsChecked(event.target.checked)
    }
    const handleChangeBoxes1 = (event) => {
        setIsChecked1(event.target.checked)
    }

    function callSignUpPostAPI() {
        console.log('api cagirildi!')
    }

    function onSignUpSubmit(e) {
        e.preventDefault()
        if (!validateEmail(email)) {
            console.log('Invalid Error')
            return;
        }
        if (password.length < 7) {
            console.log('Password must be at least 7 chars long')
            return;
        }
        if (!selectedGender) {
            console.log('Please choose a gender!')
            return;
        }
        if (!isChecked) {
            console.log('Please check boxes')
            return;
        }
        if (!isChecked1) {
            console.log('Please check boxes')
            return;
        }
        callSignUpPostAPI()
    }

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
                    <Form className='w-100' onSubmit={onSignUpSubmit}>
                        <Form.Group>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type='e-mail' placeholder='E-mail' onChange={handleChangeEmail}/>
                        </Form.Group>
                        {/*<Form.Label className='mt-4'>Şifre</Form.Label>*/}
                        {/*<InputGroup>*/}
                        {/*    <Form.Control className='password-input' type='password' placeholder='Şifre' onChange={handleChangePassword}/>*/}
                        {/*    <InputGroup.Text>*/}
                        {/*        <i className="bi bi-eye"/>*/}
                        {/*    </InputGroup.Text>*/}
                        {/*</InputGroup>*/}
                        {/*<Form.Text>Şifreniz en az 7 karakter ve en fazla 64 karakter olmalı, harf*/}
                        {/*    ve rakam*/}
                        {/*    içermelidir.</Form.Text>*/}
                        <Form.Group>
                            <Form.Label className='mt-4'>Şifre</Form.Label>
                            <Form.Control type='password' placeholder='Şifre' onChange={handleChangePassword}/>
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
                                <Form.Check type='checkbox' onChange={handleChangeBoxes} checked={isChecked} />
                                <Form.Text className='sign-up-page-text'>Kampanyalardan haberdar olabilmem için kişisel
                                    verilerimin işlenmesini ve tarafıma elektronik ileti gönderilmesini kabul
                                    ediyorum.</Form.Text>
                            </div>
                            <div className='d-flex flex-row'>
                                <Form.Check type='checkbox' onChange={handleChangeBoxes1} checked={isChecked1}/>
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
