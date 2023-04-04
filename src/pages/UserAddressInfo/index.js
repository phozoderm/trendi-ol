import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import './index.css'
import {AddressSaveModalComponent} from "../../components/AddressSaveModalComponent";
import {UserAddressInfoItemComponent} from "../../components/UserAddressInfoItemComponent";
import Modal from "react-bootstrap/Modal";
import {ToastComponent} from "../../components/ToastComponent";

export function UserAddressInfo() {
    const [errorMessage, setErrorMessage] = useState('')
    const [show, setShow] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [addressList, setAddressList] = useState([])
    const [addressToEdit, setAddressToEdit] = useState(null)
    const [showSavedConfirmationModal, setShowSavedConfirmationModal] = useState(false)

    const handleCloseSavedConfirmation = () => setShowSavedConfirmationModal(false)
    const handleShowSavedConfirmation = () => setShowSavedConfirmationModal(true)


    useEffect(() => {
        userAddressCallGetAPI()
    }, [])

    const addNewAddressHandleShow = () => {
        setShow(true)
        setAddressToEdit(null)
    }
    const addNewAddressHandleClose = (isSuccess) => {
        setShow(false)
        if (isSuccess) {
            handleShowSavedConfirmation()
            userAddressCallGetAPI()

        }
    }


    function userAddressCallGetAPI() {
        fetch('https://trendi-ol-backend.safiyeturk.com/address', {
            headers: {
                'authorization': `bearer ${localStorage.getItem('jwt')}`
            }
        }).then((res) => {
            if (res.ok) {
                res.json().then((responseBody) => {
                    setAddressList(responseBody)
                })
            }
        }).catch(() => {
            setShowToast(true)
            setErrorMessage('Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.')
        })
    }

    function userAddressCallDelAPI(id) {
        fetch(`https://trendi-ol-backend.safiyeturk.com/address/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${localStorage.getItem('jwt')}`
            },
        }).then((res) => {
            if (res.ok) {
                userAddressCallGetAPI()
            }
        }).catch(() => {
            setShowToast(true)
            setErrorMessage('Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.')
        })
    }

    function singleUserAddressCallGetAPI(id) {
        fetch(`https://trendi-ol-backend.safiyeturk.com/address/${id}`, {
            headers: {
                'authorization': `bearer ${localStorage.getItem('jwt')}`
            }
        }).then((res) => {
            if (res.ok) {
                res.json().then((responseBody) => {
                    setAddressToEdit(responseBody)
                    setShow(true)
                })
            }
        }).catch(() => {
            setShowToast(true)
            setErrorMessage('Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.')
        })
    }

    function onAddressEditClick(id) {
        singleUserAddressCallGetAPI(id)
    }

    function onDeleteAddressClick(id) {
        userAddressCallDelAPI(id)
    }

    return (
        <>
            <Container>
                <div style={{marginBottom: '20px', padding: '14px'}}>
                    <div
                        className='user-info-new-add-address-container d-flex justify-content-between align-items-center'>
                        <span style={{fontSize: '18px', fontWeight: '700'}}>Adres Bilgilerim</span>
                        <Button variant='link'
                                className='user-info-new-add-address-button'
                                onClick={addNewAddressHandleShow}> <i
                            className="bi bi-plus-lg"/> Yeni Adres Ekle</Button>
                    </div>
                    <div className='user-info-addresses-container'>
                        <Row md={2} lg={3}>
                            {addressList.map((address) => (
                                <Col>
                                    <UserAddressInfoItemComponent
                                        address={address}
                                        onEditClick={() => onAddressEditClick(address.id)}
                                        onDeleteAddressClick={() => onDeleteAddressClick(address.id)}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </Container>

            {
                !show ? null :
                    <AddressSaveModalComponent
                        onHide={addNewAddressHandleClose}
                        address={addressToEdit}
                    />
            }
            <Modal show={showSavedConfirmationModal}
                   onHide={handleCloseSavedConfirmation}
                   centered
                   keyboard={false}
                   contentClassName='saved-confirmation-modal-container'>
                <Modal.Body style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }} className='saved-confirmation-modal-body'>
                    <div onClick={handleCloseSavedConfirmation} className='modal-saved-x-icon-div'>
                        <i className="bi bi-x"/>
                    </div>
                    <div className='modal-saved-check-icon-div'>
                        <i className="bi bi-check-lg modal-saved-check-icon"/>
                    </div>
                    <div style={{marginTop: '16px',}}>
                        <span style={{
                            fontSize: '22px',
                            lineHeight: '28px',
                            textAlign: 'center',
                            fontFamily: 'source_sans_proregular',
                            fontWeight: '700'
                        }}>ADRESİNİZ KAYDEDİLDİ</span>
                    </div>
                    <div style={{marginTop: '8px',}}>
                        <span style={{
                            fontSize: '16px',
                            fontFamily: 'source_sans_proregular',
                            fontWeight: 'normal',
                            lineHeight: '20px',
                            textAlign: 'center',
                            color: '#666666',
                        }}>İşleminiz başarıyla gerçekleştirildi</span>
                    </div>
                    <Button style={{
                        width: '100%',
                        height: '48px',
                        marginTop: '48px',
                        fontSize: '18px',
                        borderRadius: '6px',
                        fontFamily: 'source_sans_proregular',
                        fontWeight: '600',
                    }} variant="primary" onClick={handleCloseSavedConfirmation}>
                        Tamam
                    </Button>
                </Modal.Body>
            </Modal>
            <ToastComponent
            toastMessage={errorMessage}
            showToast={showToast}
            onClose={()=>setShowToast(false)}
            />
        </>
    )
}
