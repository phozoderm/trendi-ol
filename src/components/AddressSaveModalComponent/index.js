import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import './index.css'
import {useState} from "react";

export function AddressSaveModalComponent(props) {

    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cityId, setCityId] = useState('');
    const [town, setTown] = useState('');
    const [district, setDistrict] = useState('');
    const [details, setDetails] = useState('');
    const [invoiceType, setInvoiceType] = useState(null);
    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isSurnameValid, setIsSurnameValid] = useState(true)
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true)
    const [isTownValid, setIsTownValid] = useState(true)
    const [isDistrictValid, setIsDistrictValid] = useState(true)
    const [isDetailsValid, setIsDetailsValid] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [locationList, setLocationList] = useState([])
    // const[selectedInvoiceType, setSelectedInvoiceType]=useState(null)


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
    const onModalFormChange = () => {
        setErrorMessage('')
    }


    function callUserAddressInfoPostAPI() {
        fetch('http://localhost:1234/address', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                name: name,
                surname: surname,
                phoneNumber: phoneNumber,
                cityId: cityId,
                details: details,
                invoiceType: invoiceType,
                district: district,
                town: town,
            }),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('jwt')}`
            },
        }).then((res) => {
            if (res.ok) {
                props.onHide(true)
            } else {
                //todo errormessage gelcek
            }
        }).catch(() => {
            setErrorMessage('Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.')
        })
    }

    function callUserAddressInfoGetLocationAPI() {
        fetch('http://localhost:1234/location')
            .then((res) => {
                if (res.ok) {
                    res.json().then((responseBody) => {
                        setLocationList(responseBody)
                    })
                }
            })
    }

    function onAddressSaveModalSubmit(e) {
        e.preventDefault()
        if (validate()) {
            callUserAddressInfoPostAPI()
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
        return ok
    }

    return (
        <Modal
            show={props.show}
            onHide={() => props.onHide(false)}
            keyboard={false}
            centered
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
                            <Form.Group className='user-address-info-modal-form-group'>
                                <Form.Label style={{marginBottom: '4px'}}>Soyad*</Form.Label>
                                <Form.Control
                                    className={` ${!isSurnameValid ? 'address-save-modal-form-control-validation' : ''}`}
                                    onChange={handleChangeModalSurname}
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
                                <Form.Label style={{marginBottom: '4px'}}>İl</Form.Label>
                                <Form.Select onClick={callUserAddressInfoGetLocationAPI} style={{height: '42px'}}>
                                    <option>Seçiniz</option>
                                    {locationList.map((location) =>(
                                        <option>{location.name}</option>
                                    ))}
                                </Form.Select>
                                <div style={{
                                    display: "flex",
                                    height: '16px',
                                    width: '100%',
                                    marginTop: '4px',
                                }}>
                                    {/*<span className='modal-form-validation-text'>Lütfen seçim yapınız</span>*/}
                                </div>
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className='user-address-info-modal-form-group'>
                                <Form.Label style={{marginBottom: '4px'}}>İlçe*</Form.Label>
                                <Form.Control
                                    className={` ${!isTownValid ? 'address-save-modal-form-control-validation' : ''}`}
                                    onChange={handleChangeModalTown}
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
                        <Button className='w-50 user-address-info-modal-form-button'>
                            Bireysel
                        </Button>
                        <Button className='w-50 user-address-info-modal-form-button'>
                            Kurumsal
                        </Button>
                    </div>
                    <Button type='submit' className='w-100 user-address-info-modal-form-save-button'>Kaydet</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
