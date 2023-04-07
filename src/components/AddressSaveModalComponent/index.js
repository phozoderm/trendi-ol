import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import './index.css'
import {useContext, useEffect, useState} from "react";
import {ToastComponent} from "../ToastComponent";
import {UserContext} from "../../App";

export function AddressSaveModalComponent(props) {

    const [title, setTitle] = useState(props.address ? props.address.title : '');
    const [name, setName] = useState(props.address ? props.address.name : '');
    const [surname, setSurname] = useState(props.address ? props.address.surname : '');
    const [phoneNumber, setPhoneNumber] = useState(props.address ? props.address.phoneNumber : '');
    const [cityId, setCityId] = useState(props.address ? props.address.cityId : null);
    const [town, setTown] = useState(props.address ? props.address.town : '');
    const [district, setDistrict] = useState(props.address ? props.address.district : '');
    const [details, setDetails] = useState(props.address ? props.address.details : '');
    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isSurnameValid, setIsSurnameValid] = useState(true);
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
    const [isTownValid, setIsTownValid] = useState(true);
    const [isDistrictValid, setIsDistrictValid] = useState(true);
    const [isDetailsValid, setIsDetailsValid] = useState(true);
    const [isCityIdValid, setIsCityIdValid] = useState(true);
    const [locationList, setLocationList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [selectedInvoiceType, setSelectedInvoiceType] = useState(props.address ? props.address.invoiceType : 'personal')
    const userInfo = useContext(UserContext)

    const handleChangeModalName = (event) => {
        setName(event.target.value)
        setIsNameValid(true)
    }
    const handleChangeModalSurname = (event) => {
        setSurname(event.target.value)
        setIsSurnameValid(true)
    }
    const handleChangeModalPhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
        setIsPhoneNumberValid(true)
    }
    const handleChangeModalTitle = (event) => {
        setTitle(event.target.value)
        setIsTitleValid(true)
    }
    const handleChangeModalDetails = (event) => {
        setDetails(event.target.value)
        setIsDetailsValid(true)
    }
    const handleChangeModalTown = (event) => {
        setTown(event.target.value)
        setIsTownValid(true)
    }
    const handleChangeModalDistrict = (event) => {
        setDistrict(event.target.value)
        setIsDistrictValid(true)
    }
    const handleChangeModalCity = (event) => {
        setCityId(event.target.value)
        setIsCityIdValid(true)
    }
    const onModalFormChange = () => {
        setErrorMessage('')
    }

    function callUserAddressInfoPutAPI(id) {
        fetch(`https://trendi-ol-backend.safiyeturk.com/address/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: title,
                name: name,
                surname: surname,
                phoneNumber: phoneNumber,
                cityId: cityId,
                details: details,
                invoiceType: selectedInvoiceType,
            }),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${userInfo.jwt}`
            }
        }).then((res) => {
            if (res.ok) {
                props.onHide(true)
            }
        }).catch(() => {
            setShowToast(true)
            setErrorMessage('Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.')
        })
    }

    function callUserAddressInfoPostAPI() {
        fetch('https://trendi-ol-backend.safiyeturk.com/address', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                name: name,
                surname: surname,
                phoneNumber: phoneNumber,
                cityId: cityId,
                details: details,
                invoiceType: selectedInvoiceType,
                district: district,
                town: town,
            }),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${userInfo.jwt}`
            },
        }).then((res) => {
            if (res.ok) {
                props.onHide(true)
            } else {
                setShowToast(true)
                setErrorMessage('Bir hata oluştu.')
            }
        }).catch(() => {
            setShowToast(true)
            setErrorMessage('Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.')
        })
    }

    function callUserAddressInfoGetLocationAPI() {
        fetch('https://trendi-ol-backend.safiyeturk.com/location')
            .then((res) => {
                if (res.ok) {
                    res.json().then((responseBody) => {
                        setLocationList(responseBody)
                    })
                }
            }).catch(() => {
            setShowToast(true)
            setErrorMessage('Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.')
        })
    }

    function onAddressSaveModalSubmit(e) {
        e.preventDefault()
        if (validate()) {
            if (props.address) {
                callUserAddressInfoPutAPI(props.address.id)
            } else {
                callUserAddressInfoPostAPI()
            }
        }
    }

    function validate() {
        let ok = true
        if (title.length === 0) {
            setIsTitleValid(false)
            ok = false
        }
        if (name.length <= 1) {
            setIsNameValid(false)
            ok = false
        }
        if (surname.length <= 1) {
            setIsSurnameValid(false)
            ok = false
        }
        if (phoneNumber.length === 0) {
            setIsPhoneNumberValid(false)
            ok = false
        }
        if (town.length <= 1) {
            setIsTownValid(false)
            ok = false
        }
        if (district.length <= 1) {
            setIsDistrictValid(false)
            ok = false
        }
        if (details.length <= 9) {
            setIsDetailsValid(false)
            ok = false
        }
        if (!cityId) {
            setIsCityIdValid(false)
            ok = false
        }
        return ok
    }

    useEffect(() => {
        callUserAddressInfoGetLocationAPI()
    }, [])

    return (
        <>
            <Modal
                show={true}
                onHide={() => props.onHide(false)}
                keyboard={false}
                centered
                contentClassName='address-save-modal-component'
            >
                <Modal.Header className='user-address-info-modal-header' closeButton>
                    <Modal.Title style={{fontSize: '18px', color: '#333'}}>Adres Ekle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onAddressSaveModalSubmit} onChange={onModalFormChange}>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='user-address-info-modal-form-group'>
                                    <Form.Label style={{marginBottom: '4px'}}>Ad*</Form.Label>
                                    <Form.Control
                                        className={` ${!isNameValid ? 'address-save-modal-form-control-validation' : ''}`}
                                        onChange={handleChangeModalName}
                                        value={name}
                                        style={{height: '42px'}}/>
                                    <div style={{
                                        display: "flex",
                                        height: '16px',
                                        width: '100%',
                                        marginTop: '4px',
                                    }}>
                                        {!isNameValid ? <span className='modal-form-validation-text'>2-30 karakter içermelidir</span> : null}
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group>
                                    <Form.Label style={{marginBottom: '4px'}}>Soyad*</Form.Label>
                                    <Form.Control
                                        className={` ${!isSurnameValid ? 'address-save-modal-form-control-validation' : ''}`}
                                        onChange={handleChangeModalSurname}
                                        value={surname}
                                        style={{height: '42px'}}/>
                                    <div style={{
                                        display: "flex",
                                        height: '16px',
                                        width: '100%',
                                        marginTop: '4px',
                                    }}>
                                        {!isSurnameValid ? <span className='modal-form-validation-text'>2-30 karakter içermelidir</span> : null}

                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='user-address-info-modal-form-group'>
                                    <Form.Label style={{marginBottom: '4px'}}>Telefon*</Form.Label>
                                    <Form.Control
                                        className={` ${!isPhoneNumberValid ? 'address-save-modal-form-control-validation' : ''}`}
                                        onChange={handleChangeModalPhoneNumber}
                                        value={phoneNumber}
                                        style={{height: '42px'}}/>
                                    <div style={{
                                        display: "flex",
                                        height: '16px',
                                        width: '100%',
                                        marginTop: '4px',
                                    }}>
                                        {!isPhoneNumberValid ? <span className='modal-form-validation-text'>Lütfen telefon numarası giriniz</span> : null}

                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className="user-address-info-modal-form-group">
                                    <Form.Label style={{marginBottom: '4px'}}>İl*</Form.Label>
                                    <Form.Select value={cityId} onChange={handleChangeModalCity}
                                                 style={{height: '42px'}}
                                                 className={`${!isCityIdValid ? 'address-save-modal-form-control-validation' : ''}`}
                                    >
                                        <option value={null} disabled selected>Seçiniz</option>
                                        {locationList.map((location) => (
                                            <option value={location.id}>{location.name}</option>
                                        ))}
                                    </Form.Select>
                                    <div style={{
                                        display: "flex",
                                        height: '16px',
                                        width: '100%',
                                        marginTop: '4px',
                                    }}>
                                        {!isCityIdValid ?
                                            <span
                                                className='modal-form-validation-text'>Lütfen seçim yapınız</span> : null}
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='user-address-info-modal-form-group'>
                                    <Form.Label style={{marginBottom: '4px'}}>İlçe*</Form.Label>
                                    <Form.Control
                                        className={` ${!isTownValid ? 'address-save-modal-form-control-validation' : ''}`}
                                        onChange={handleChangeModalTown}
                                        value={town}
                                        style={{height: '42px'}}/>
                                    <div style={{
                                        display: "flex",
                                        height: '16px',
                                        width: '100%',
                                        marginTop: '4px',
                                    }}>
                                        {!isTownValid ? <span className='modal-form-validation-text'>2-30 karakter içermelidir</span> : null}

                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='user-address-info-modal-form-group'>
                                    <Form.Label style={{marginBottom: '4px'}}>Mahalle*</Form.Label>
                                    <Form.Control
                                        className={` ${!isDistrictValid ? 'address-save-modal-form-control-validation' : ''}`}
                                        onChange={handleChangeModalDistrict}
                                        value={district}
                                        style={{height: '42px'}}/>
                                    <div style={{
                                        display: "flex",
                                        height: '16px',
                                        width: '100%',
                                        marginTop: '4px',
                                    }}>
                                        {!isDistrictValid ? <span className='modal-form-validation-text'>2-30 karakter içermelidir</span> : null}

                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group className='user-address-info-modal-form-group'>
                                    <Form.Label style={{marginBottom: '4px'}}>Adres*</Form.Label>
                                    <Form.Control
                                        className={` ${!isDetailsValid ? 'address-save-modal-form-control-validation' : ''}`}
                                        onChange={handleChangeModalDetails}
                                        value={details}
                                        as='textarea'/>
                                    <div style={{
                                        display: "flex",
                                        height: '16px',
                                        width: '100%',
                                        marginTop: '4px',
                                    }}>
                                        {!isDetailsValid ? <span className='modal-form-validation-text'>10-250 karakter içermelidir</span> : null}

                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group className='user-address-info-modal-form-group'>
                                    <Form.Label style={{marginBottom: '4px'}}>Adres Başlığı*</Form.Label>
                                    <Form.Control
                                        className={` ${!isTitleValid ? 'address-save-modal-form-control-validation' : ''}`}
                                        onChange={handleChangeModalTitle}
                                        value={title}
                                        style={{height: '42px'}}/>
                                    <div style={{
                                        display: "flex",
                                        height: '16px',
                                        width: '100%',
                                        marginTop: '4px',
                                    }}>
                                        {!isTitleValid ? <span className='modal-form-validation-text'>1-20 karakter içermelidir</span> : null}

                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Label style={{marginBottom: '4px'}}>Fatura Türü*</Form.Label>
                        <div>
                            <Button onClick={() => setSelectedInvoiceType('personal')}
                                    className={`w-50 ${selectedInvoiceType === 'personal' ? 'user-address-info-modal-form-button-selected' : 'user-address-info-modal-form-button'}`}>
                                Bireysel
                            </Button>
                            <Button onClick={() => setSelectedInvoiceType('corporate')}
                                    className={`w-50 ${selectedInvoiceType === 'corporate' ? 'user-address-info-modal-form-button-selected' : 'user-address-info-modal-form-button'}`}>
                                Kurumsal
                            </Button>
                        </div>
                        <Button type='submit' className='w-100 user-address-info-modal-form-save-button'>Kaydet</Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <ToastComponent
                showToast={showToast}
                toastMessage={errorMessage}
                onClose={() => setShowToast(false)}
            />
        </>
    )
}
