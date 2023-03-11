import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import './index.css'
import {AddressSaveModalComponent} from "../../components/AddressSaveModalComponent";
import {UserAddressInfoItemComponent} from "../../components/UserAddressInfoItemComponent";

export function UserAddressInfo() {
    const [errorMessage, setErrorMessage] = useState('')
    const [show, setShow] = useState(false)
    const [addressList, setAddressList] = useState([])
    const [addressToEdit, setAddressToEdit] = useState(null)

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
            userAddressCallGetAPI()
        }
    }


    function userAddressCallGetAPI() {
        fetch('http://localhost:1234/address', {
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
            setErrorMessage('Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.')
        })
    }

    function userAddressCallDelAPI(id) {
        fetch(`http://localhost:1234/address/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${localStorage.getItem('jwt')}`
            },
        }).then((res) => {
            if (res.ok) {
                userAddressCallGetAPI()
            }
        }).catch(()=>{
            setErrorMessage('Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.')
        })
    }

    function singleUserAddressCallGetAPI(id) {
        fetch(`http://localhost:1234/address/${id}`, {
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
        }).catch(()=>{
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
        </>
    )
}
