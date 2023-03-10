import Card from "react-bootstrap/Card";
import './index.css'
import Button from "react-bootstrap/Button";

export function UserAddressInfoItemComponent(props) {
    return (
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
                <div onClick={props.onDeleteAddressClick}
                     style={{cursor: 'pointer'}}><i className="bi bi-trash3"
                                                    style={{marginRight: '3px', fontSize: '15px'}}/> <span
                    className='user-address-component-delete-span'>Sil</span></div>
                <Button onClick={props.onEditClick} className='user-address-component-card-button'>Adresi
                    Düzenle</Button>
            </div>
        </Card>
    )
}
