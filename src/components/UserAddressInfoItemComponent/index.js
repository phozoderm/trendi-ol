import Card from "react-bootstrap/Card";
import './index.css'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useState} from "react";

export function UserAddressInfoItemComponent(props) {
    const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);

    const handleCloseDeleteConfirmation = () => setShowDeleteConfirmationModal(false);
    const handleShowDeleteConfirmation = () => setShowDeleteConfirmationModal(true);
    return (
        <>
            <Card className='user-address-info-card'>
                <Card.Header style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    backgroundColor: '#fafafa'
                }}>{props.address.title}</Card.Header>
                <Card.Body style={{margin: '5px 15px', padding: '0'}}>
                    <Card.Title style={{
                        marginBottom: '0',
                        lineHeight: '24px',
                        fontSize: '12px',
                        fontWeight: '700'
                    }}>{props.address.name} {props.address.surname}</Card.Title>
                    <Card.Text style={{
                        marginBottom: '0',
                        lineHeight: '24px',
                        fontSize: '12px'
                    }}>{props.address.district} Mah</Card.Text>
                    <Card.Text className='user-address-details-component-text'>
                        {props.address.details}
                    </Card.Text>
                    <Card.Text style={{marginBottom: '0', lineHeight: '24px', fontSize: '12px'}}>
                        {props.address.cityName}/{props.address.town}
                    </Card.Text>
                    <Card.Text style={{
                        marginBottom: '0',
                        lineHeight: '24px',
                        fontSize: '12px'
                    }}>{props.address.phoneNumber}</Card.Text>
                </Card.Body>
                <div className='user-address-component-footer'>
                    <div onClick={handleShowDeleteConfirmation}
                         style={{cursor: 'pointer'}}><i className="bi bi-trash3"
                                                        style={{marginRight: '3px', fontSize: '15px'}}/> <span
                        className='user-address-component-delete-span'>Sil</span></div>
                    <Button onClick={props.onEditClick} className='user-address-component-card-button'>Adresi
                        Düzenle</Button>
                </div>
            </Card>
            <Modal
                show={showDeleteConfirmationModal}
                onHide={handleCloseDeleteConfirmation}
                keyboard={false}
                centered
                contentClassName='user-address-delete-confirmation-modal-container'
                size="sm"
            >
                <Modal.Body className='user-address-delete-confirmation-modal-body'>
                    <div onClick={handleCloseDeleteConfirmation} className='modal-delete-x-icon-div'>
                        <i className="bi bi-x"/>
                    </div>
                    <div className='user-address-component-delete-modal-div'>
                        <div>
                            <i className="bi bi-trash3 user-address-info-trash-icon"/>
                        </div>
                        <div>
                            <span style={{fontSize: '14px', lineHeight: '18px', color: '#333333'}}>Adresi silmek istediğinizden emin misiniz?</span>
                        </div>
                    </div>
                </Modal.Body>
                <div className='user-address-component-delete-modal-button-div'>
                    <Button style={{marginRight: '0'}}
                            onClick={props.onDeleteAddressClick}
                            className='user-address-component-delete-modal-button' variant="secondary">
                        Evet
                    </Button>
                    <Button onClick={handleCloseDeleteConfirmation}
                            className='user-address-component-delete-modal-button'
                            variant="secondary">Hayır</Button>
                </div>
            </Modal>
        </>
    )
}
