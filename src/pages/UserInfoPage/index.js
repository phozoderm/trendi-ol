
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import './index.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export function UserInfoPage(){
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <div className='user-info-new-add-address-container d-flex justify-content-between align-items-center'>
                        <span style={{fontSize:'18px', fontWeight:'700'}}>Adres Bilgilerim</span>
                        <Button variant='link' className='user-info-new-add-address-button'> <i className="bi bi-plus-lg"/> Yeni Adres Ekle</Button>
                    </div>
                </Col>
            </Row>
            <Row >
                <Col>
                    <div className='user-info-addresses-container'>
                        hey
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
