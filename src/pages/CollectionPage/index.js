import Container from "react-bootstrap/Container";
import './index.css'
import {Nav} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export function CollectionPage() {
    return (
        <Container fluid>
            <Row>
                <div className='collection-page-header-container'>
                    <div className='collection-header-item-div'>
                        <div className='collection-header-item-first'>
                            <Nav defaultActiveKey="koleksiyonlar">
                                <Nav.Item className='collection-header-my-favorite-nav-item'>
                                    <Nav.Link href="favoriler">
                                        <i className="bi bi-heart-fill"/>
                                        Favorilerim</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='collection-header-my-collection-nav-item'>
                                    <Nav.Link href='koleksiyonlar'>
                                        <i className="bi bi-bookmark-fill"/>
                                        Koleksiyonlarım
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className='collection-header-item-second'>
                            <Form>
                                <Form.Group className='collection-header-search-input'>
                                    <i className="bi bi-search"/>
                                    <Form.Control
                                        className='collection-header-search-control'
                                        type='search'
                                        placeholder='Favorilerimde ara'
                                    />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}
