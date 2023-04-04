import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './index.css'
import {useEffect, useState} from "react";
import {Alert} from "react-bootstrap";
import {ToastComponent} from "../../components/ToastComponent";

export function UserInfoPage() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordAgain, setNewPasswordAgain] = useState('');
    const [phoneNumberCountryCode, setPhoneNumberCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState(null);
    const [birthdayYear, setBirthdayYear] = useState(1990);
    const [birthdayMonth, setBirthdayMonth] = useState(1);
    const [birthdayDate, setBirthdayDate] = useState(1);
    const [corporateCampaigns, setCorporateCampaigns] = useState(false);
    const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const [isAgainNewPasswordVisible, setIsAgainNewPasswordVisible] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const [show, setShow] = useState(false);
    const [userInfoResponseBody, setUserInfoResponseBody] = useState(null)
    const [errorMessage, setErrorMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    const showOldPassword = () => {
        setIsOldPasswordVisible(!isOldPasswordVisible)
    }
    const showNewPassword = () => {
        setIsNewPasswordVisible(!isNewPasswordVisible)
    }
    const showAgainNewPassword = () => {
        setIsAgainNewPasswordVisible(!isAgainNewPasswordVisible)
    }
    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeSurname = (event) => {
        setSurname(event.target.value)
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
        setIsEmailValid(true)
    }
    const handleChangeOldPassword = (event) => {
        setOldPassword(event.target.value)
    }
    const handleChangeNewPassword = (event) => {
        setNewPassword(event.target.value)
        setIsPasswordValid(true)
    }
    const handleChangeNewPasswordAgain = (event) => {
        setNewPasswordAgain(event.target.value)
    }
    const handleChangePhoneNumberCountryCode = (event) => {
        setPhoneNumberCountryCode(event.target.value)
    }
    const handleChangePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }
    const handleChangeBirthdayYear = (event) => {
        setBirthdayYear(event.target.value)
    }
    const handleChangeBirthdayMonth = (event) => {
        setBirthdayMonth(event.target.value)
    }
    const handleChangeBirthdayDate = (event) => {
        setBirthdayDate(event.target.value)
    }

    const birthday = new Date()
    birthday.setFullYear(birthdayYear)
    birthday.setMonth(birthdayMonth)
    birthday.setDate(birthdayDate)
    const birthdayString = birthday.toISOString().slice(0, 10)

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const validatePassword = (password) => {
        const re = /[a-zA-Z]+/;
        const re2 = /[0-9]+/;
        return re.test(password) && re2.test(password) && password.length >= 7
    }

    function passwordConfirm() {
        let ok = true
        if (newPassword !== newPasswordAgain) {
            ok = false
        }
        if (!validatePassword(newPassword)) {
            setIsPasswordValid(false)
            ok = false
        }
        return ok
    }

    function callUserInfoGetAPI() {
        fetch(`https://trendi-ol-backend.safiyeturk.com/user/me`, {
            headers: {
                'authorization': `bearer ${localStorage.getItem('jwt')}`
            }
        }).then((res) => {
            if (res.ok) {
                res.json().then((responseBody) => {
                    setUserInfoResponseBody(responseBody)
                    setName(responseBody.name)
                    setSurname(responseBody.surname)
                    setEmail(responseBody.email)
                    setGender(responseBody.gender)
                    setPhoneNumber(responseBody.phoneNumber)
                    setPhoneNumberCountryCode(responseBody.phoneNumberCountryCode)
                    setCorporateCampaigns(responseBody.wantsToKnowAboutCorporateCampaigns)
                    setBirthdayYear(new Date(responseBody.birthday).getFullYear())
                    setBirthdayDate(new Date(responseBody.birthday).getDate())
                    setBirthdayMonth(new Date(responseBody.birthday).getMonth())
                })
            }
        }).catch(() => {
            setShowToast(true)
            setErrorMessage('Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.')
        })
    }

    function callUserInfoPutAPI() {

        fetch(`https://trendi-ol-backend.safiyeturk.com/user/me`, {
            method: 'PUT',
            body: JSON.stringify({
                name: name,
                surname: surname,
                email: email,
                gender: gender,
                wantsToKnowAboutCorporateCampaigns: corporateCampaigns,
                birthday: birthdayString
            }),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('jwt')}`
            }
        }).then((res) => {
            if (res.ok) {

            }
        }).catch(() => {
            setShowToast(true)
            setErrorMessage('Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.')
        })
    }

    function callUserInfoPhoneNumberPutAPI() {
        fetch(`https://trendi-ol-backend.safiyeturk.com/user/me/phoneNumber`, {
            method: 'PUT',
            body: JSON.stringify({
                phoneNumber: phoneNumber,
                phoneNumberCountryCode: phoneNumberCountryCode,
            }),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('jwt')}`
            }
        }).then((res) => {
            if (res.ok) {

            }
        }).catch(() => {
            setShowToast(true)
            setErrorMessage('Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.')
        })
    }

    function callUserInfoPasswordPutAPI() {
        fetch('https://trendi-ol-backend.safiyeturk.com/user/me/password', {
            method: 'PUT',
            body: JSON.stringify({
                oldPassword: oldPassword,
                newPassword: newPassword,
            }),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('jwt')}`
            }
        }).then((res) => {
            if (res.ok) {

            }
        }).catch(() => {
            setShowToast(true)
            setErrorMessage('Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.')
        })
    }

    function onUserInfoSubmit(e) {
        e.preventDefault()
        if (!validateEmail(email)) {
            setIsEmailValid(false)
            return;
        }
        callUserInfoPutAPI()

    }

    function onPhoneNumberClick() {
        callUserInfoPhoneNumberPutAPI()
    }

    function onUserInfoPasswordSubmit(e) {
        e.preventDefault()
        if (passwordConfirm()) {
            callUserInfoPasswordPutAPI()
        } else {
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 5000)
        }
    }

    useEffect(() => {
        callUserInfoGetAPI()
    }, [])

    const userInfoDisabledButton = userInfoResponseBody === null || (name === userInfoResponseBody.name &&
        surname === userInfoResponseBody.surname &&
        email === userInfoResponseBody.email &&
        birthdayString === userInfoResponseBody.birthday &&
        gender === userInfoResponseBody.gender &&
        corporateCampaigns === userInfoResponseBody.wantsToKnowAboutCorporateCampaigns)

    const userInfoDisabledButtonPhoneNumber = userInfoResponseBody === null || (
        phoneNumberCountryCode === userInfoResponseBody.phoneNumberCountryCode && phoneNumber === userInfoResponseBody.phoneNumber
    )

    return (
        <>
            <Container>
                <div className='user-info-header-container'>
                    <span>Kullanıcı Bilgilerim</span>
                    <div>
                        <span>İşlemler</span>
                        <i className="bi bi-chevron-down"/>
                    </div>
                </div>

                {show ?
                    <Alert className='user-info-alert' onClose={() => setShow(false)}>
                        <i className="bi bi-exclamation-circle-fill"/>
                        <p>Girdiğiniz şifreler eşleşmiyor. Lütfen kontrol ediniz.</p>
                    </Alert>
                    : null
                }
                <div className='user-info-forms-container'>
                    <div className='w-100 user-info-form-info-update-div'>
                        <div className='user-info-form-header-div'>
                            <span>Üyelik Bilgilerim</span>
                        </div>
                        <Form onSubmit={onUserInfoSubmit}>
                            <Row>
                                <Col xs={6}>
                                    <Form.Group>
                                        <Form.Label className='user-info-form-label'>Ad</Form.Label>
                                        <Form.Control value={name} onChange={handleChangeName}
                                                      className='user-info-form-control'
                                                      type="text"/>
                                        <div style={{height: '26px', marginTop: '4px'}}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={6}>
                                    <Form.Group>
                                        <Form.Label className='user-info-form-label'>Soyad</Form.Label>
                                        <Form.Control value={surname} onChange={handleChangeSurname}
                                                      className='user-info-form-control' type="text"/>
                                        <div style={{height: '26px', marginTop: '4px'}}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group>
                                        <Form.Label className='user-info-form-label'>E-Mail</Form.Label>
                                        <Form.Control value={email} onChange={handleChangeEmail}
                                                      className={`user-info-form-control ${!isEmailValid ? 'user-info-form-control-validation' : ''}`}
                                                      type="email"/>
                                    </Form.Group>
                                    <div style={{height: '26px', marginTop: '4px'}}/>
                                </Col>
                                <Col xs={3}>
                                    <Form.Label className='user-info-form-label'>Cep Telefonu</Form.Label>
                                    <Form.Select value={phoneNumberCountryCode}
                                                 onChange={handleChangePhoneNumberCountryCode}
                                                 className='user-info-form-control'>
                                        <option>+90</option>
                                        <option>+49</option>
                                        <option>+43</option>
                                    </Form.Select>
                                    <div style={{height: '26px', marginTop: '4px'}}/>
                                </Col>
                                <Col xs={6}>
                                    <Form.Group>
                                        <div style={{height: '21px', marginBottom: '8px'}}/>
                                        <Form.Control value={phoneNumber} onChange={handleChangePhoneNumber}
                                                      className='user-info-form-control' type="text"/>
                                    </Form.Group>
                                    <div style={{height: '26px', marginTop: '4px'}}/>
                                </Col>
                                <Col xs={3}>
                                    <Button disabled={userInfoDisabledButtonPhoneNumber} onClick={onPhoneNumberClick}
                                            className='user-info-phone-button'
                                            variant='danger'
                                            type="submit">
                                        Güncelle
                                    </Button>
                                </Col>
                                <Col xs={4}>
                                    <Form.Label className='user-info-form-label'>Doğum Tarihiniz</Form.Label>
                                    <Form.Select value={birthdayDate} onChange={handleChangeBirthdayDate}
                                                 className='user-info-form-control'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Form.Select>
                                    <div style={{height: '26px', marginTop: '4px'}}/>
                                </Col>
                                <Col xs={4}>
                                    <div style={{height: '21px', marginBottom: '8px'}}/>
                                    <Form.Select value={birthdayMonth} onChange={handleChangeBirthdayMonth}
                                                 className='user-info-form-control'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Form.Select>
                                    <div style={{height: '26px', marginTop: '4px'}}/>
                                </Col>
                                <Col xs={4}>
                                    <div style={{height: '21px', marginBottom: '8px'}}/>
                                    <Form.Select value={birthdayYear} onChange={handleChangeBirthdayYear}
                                                 className='user-info-form-control'>
                                        <option>1990</option>
                                        <option>1989</option>
                                        <option>1988</option>
                                    </Form.Select>
                                    <div style={{height: '26px', marginTop: '4px'}}/>
                                </Col>
                                <Col>
                                    <Form.Label className='user-info-form-label'>Cinsiyet</Form.Label>
                                    <div className='d-flex flex-row'>
                                        <Form.Group style={{marginRight: '20px'}} className='d-flex flex-row'>
                                            <Form.Check checked={gender === 'female'}
                                                        onClick={() => gender === 'female' ? setGender(null) : setGender('female')}
                                                        style={{marginRight: '6px'}}
                                                        type="checkbox"/>
                                            <Form.Text style={{
                                                fontSize: '14px',
                                                lineHeight: '18px',
                                                color: '#333333',
                                                marginLeft: '8px'
                                            }}> Kadın</Form.Text>
                                        </Form.Group>
                                        <Form.Group className='d-flex flex-row'>
                                            <Form.Check checked={gender === 'male'}
                                                        onClick={() => gender === 'male' ? setGender(null) : setGender('male')}
                                                        style={{marginRight: '6px'}}
                                                        type="checkbox"/>
                                            <Form.Text style={{
                                                fontSize: '14px',
                                                lineHeight: '18px',
                                                color: '#333333',
                                                marginLeft: '8px',
                                            }}>Erkek</Form.Text>
                                        </Form.Group>
                                    </div>
                                    <div style={{height: '16px', marginTop: '4px'}}/>
                                </Col>
                                <Col xs={12}>
                                    <Form.Label className='user-info-form-label'>Kurumsal</Form.Label>
                                    <Form.Group style={{marginRight: '20px'}} className='d-flex flex-row'>
                                        <Form.Check
                                            checked={corporateCampaigns === true}
                                            onClick={() => corporateCampaigns ? setCorporateCampaigns(false) : setCorporateCampaigns(true)}
                                            style={{marginRight: '6px'}} type="checkbox"/>
                                        <Form.Text style={{
                                            fontSize: '14px',
                                            lineHeight: '18px',
                                            color: '#333333',
                                            marginLeft: '4px',
                                            marginRight: '40px'
                                        }}> Kurumsal müşteri kampanyalarından/duyurularından haberdar olmak
                                            istiyorum.</Form.Text>
                                    </Form.Group>
                                    <div style={{height: '16px', marginTop: '4px'}}/>
                                </Col>
                                <Col xs={12}>
                                    <Button disabled={userInfoDisabledButton}
                                            style={{height: '44px', marginBottom: '10px'}}
                                            className='w-100 user-info-form-update-button' variant="primary"
                                            type="submit">
                                        GÜNCELLE
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div style={{borderLeft: '1px solid #e2e2e2'}}/>
                    <div className='w-100 user-info-form-info-update-div'>
                        <div className='user-info-form-header-div'>
                            <span>Şifre Güncelleme</span>
                        </div>
                        <Form onSubmit={onUserInfoPasswordSubmit}>
                            <Row>
                                <Col xs={12}>
                                    <Form.Group>
                                        <Form.Label className='user-info-form-label'>Şu Anki Şifre</Form.Label>
                                        <div className='user-info-form-control-div'>
                                            <i onClick={showOldPassword}
                                               className={`bi user-info-form-control-icon ${isOldPasswordVisible ? ' bi-eye-slash' : 'bi-eye'}`}/>
                                            <Form.Control value={oldPassword}
                                                          onChange={handleChangeOldPassword}
                                                          className='user-info-form-control'
                                                          type={`${isOldPasswordVisible ? 'text' : 'password'}`}/>
                                        </div>
                                        <div style={{height: '26px', marginTop: '4px'}}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group style={{marginBottom: '20px'}}>
                                        <Form.Label className='user-info-form-label'>Yeni Şifre</Form.Label>
                                        <div className='user-info-form-control-div'>
                                            <i onClick={showNewPassword}
                                               className={`bi user-info-form-control-icon ${isNewPasswordVisible ? ' bi-eye-slash' : 'bi-eye'}`}/>
                                            <Form.Control value={newPassword} onChange={handleChangeNewPassword}
                                                          className={`user-info-form-control ${!isPasswordValid ? 'user-info-form-control-validation' : ''}`}
                                                          type={`${isNewPasswordVisible ? 'text' : 'password'}`}/>
                                        </div>
                                        <Form.Text
                                            className={`new-password-input-text ${!isPasswordValid ? 'new-password-input-text-validation' : ''}`}
                                            style={{}}>Şifreniz <span
                                            style={{fontFamily: 'source_sans_prosemibold', fontWeight: 'bold'}}>en az 7 karakter</span> ve <span
                                            style={{
                                                fontFamily: 'source_sans_prosemibold',
                                                fontWeight: 'bold'
                                            }}>en fazla 64 karakter</span> olmalı, harf ve rakam
                                            içermelidir.</Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group>
                                        <Form.Label className='user-info-form-label'>Yeni Şifre (Tekrar)</Form.Label>
                                        <div className='user-info-form-control-div'>
                                            <i onClick={showAgainNewPassword}
                                               className={`bi user-info-form-control-icon ${isAgainNewPasswordVisible ? ' bi-eye-slash' : 'bi-eye'}`}/>
                                            <Form.Control value={newPasswordAgain}
                                                          onChange={handleChangeNewPasswordAgain}
                                                          className='user-info-form-control'
                                                          type={`${isAgainNewPasswordVisible ? 'text' : 'password'}`}/>
                                        </div>
                                        <div style={{height: '16px', marginTop: '4px'}}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Button
                                        disabled={newPassword.length === 0 && newPasswordAgain.length === 0 && oldPassword.length === 0}
                                        style={{height: '44px', marginBottom: '10px'}}
                                        className='w-100 user-info-form-update-button' type="submit">
                                        GÜNCELLE
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                        <div style={{
                            height: '120px',
                            backgroundColor: '#f2f2f2',
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '10px',
                            borderRadius: '6px',
                            padding: '20px'
                        }}>
                            <div className='d-flex flex-row justify-content-between'>
                            <span style={{
                                color: '#333333',
                                fontSize: '16px',
                                fontWeight: '600'
                            }}>İKİ ADIMLI DOĞRULAMA</span>
                                <Form.Check
                                    disabled
                                    type="switch"/>
                            </div>
                            <div style={{
                                marginTop: '8px',
                                maxWidth: '266px',
                                lineHeight: '1.58',
                                color: '#333333',
                                fontSize: '12px'
                            }}>
                                İki adımlı doğrulama yöntemini etkinleştirdiğinizde, kişisel şifrelerinize ek olarak
                                kayıtlı
                                cep telefonunuza gelen doğrulama koduyla oturum açarsınız.
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <ToastComponent
                showToast={showToast}
                toastMessage={errorMessage}
                onClose={() => setShowToast(false)}
            />
        </>
    )
}
