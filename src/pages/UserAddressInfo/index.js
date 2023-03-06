import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import {useState} from "react";
import './index.css'

export function UserAddressInfo() {

    const [show, setShow] = useState(false)

    const addNewAddressHandleShow = () => setShow(true)
    const addNewAddressHandleClose = () => setShow(false)


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
                            <Col>
                                <Card className='user-address-info-card'>
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Light Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='user-address-info-card'>
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Light Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='user-address-info-card'>
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Light Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='user-address-info-card'>
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Light Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='user-address-info-card'>
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Light Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='user-address-info-card'>
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Light Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='user-address-info-card'>
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Light Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>

            <Modal
                show={show}
                onHide={addNewAddressHandleClose}
                keyboard={false}
                centered
            >
                <Modal.Header className='user-address-info-modal-header' closeButton>
                    <Modal.Title style={{fontSize: '18px', color: '#333'}}>Adres Ekle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='user-address-info-modal-form-group'>
                                    <Form.Label style={{marginBottom: '4px'}}>Ad*</Form.Label>
                                    <Form.Control style={{height: '42px'}}/>
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='user-address-info-modal-form-group'>
                                    <Form.Label style={{marginBottom: '4px'}}>Soyad*</Form.Label>
                                    <Form.Control style={{height: '42px'}}/>
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='user-address-info-modal-form-group'>
                                    <Form.Label style={{marginBottom: '4px'}}>Telefon*</Form.Label>
                                    <Form.Control style={{height: '42px'}}/>
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className="user-address-info-modal-form-group">
                                    <Form.Label style={{marginBottom: '4px'}}>İl</Form.Label>
                                    <Form.Select style={{height: '42px'}}>
                                        <option>option</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='user-address-info-modal-form-group'>
                                    <Form.Label style={{marginBottom: '4px'}}>İlçe*</Form.Label>
                                    <Form.Control style={{height: '42px'}}/>
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='user-address-info-modal-form-group'>
                                    <Form.Label style={{marginBottom: '4px'}}>Mahalle*</Form.Label>
                                    <Form.Control style={{height: '42px'}}/>
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group className='user-address-info-modal-form-group'>
                                    <Form.Label style={{marginBottom: '4px'}}>Adres*</Form.Label>
                                    <Form.Control style={{height: '42px'}}/>
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group className='user-address-info-modal-form-group'>
                                    <Form.Label style={{marginBottom: '4px'}}>Adres Başlığı*</Form.Label>
                                    <Form.Control style={{height: '42px'}}/>
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
                        <Button className='w-100 user-address-info-modal-form-save-button'>Kaydet</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
