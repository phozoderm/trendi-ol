import Container from "react-bootstrap/Container";
import './index.css'
import {Nav} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
export function FavoritePage(){
    return(
        <Container fluid>
            <Row>
                    <div className='favorite-page-header-container'>
                        <div className='favorite-header-item-div'>
                            <div className='favorite-header-item-first'>
                                <Nav defaultActiveKey="favoriler">
                                    <Nav.Item className='favorite-header-my-favorite-nav-item'>
                                        <Nav.Link href="favoriler">
                                            <i className="bi bi-heart-fill"/>
                                            Favorilerim
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='favorite-header-my-collection-nav-item'>
                                        <Nav.Link href='koleksiyonlar'>
                                            <i className="bi bi-bookmark-fill"/>
                                            Koleksiyonlarım
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className='favorite-header-item-second'>
                                <Form>
                                    <Form.Group className='favorite-header-search-input'>
                                        <i className="bi bi-search"/>
                                        <Form.Control
                                            className='favorite-header-search-control'
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
