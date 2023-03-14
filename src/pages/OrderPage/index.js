import Container from "react-bootstrap/Container";
import './index.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function OrderPage() {
    return (
        <Container>
            <div className='order-containers' >
                <div className='order-header-div'>
                    <span>Siparişlerim</span>
                    <Form style={{width:'310px'}}>
                        <Form.Group className='form-group-order-search'>
                            <i className="bi bi-search"/>
                            <Form.Control
                                className='order-header-search-control'
                                type='search'
                                placeholder='Ürün ismi veya Marka ara'
                            />
                        </Form.Group>
                    </Form>
                    <Form.Select className='order-header-select' size='sm'>
                        <option>Tüm Siparişler</option>
                        <option>Son 1 Ay</option>
                        <option>Son 3 Ay</option>
                        <option>2022</option>
                    </Form.Select>
                </div>
                <div className='order-content-div'>
                    <div>
                        <i className="bi bi-box-fill"/>
                    </div>
                    <span>Hesabınıza ait bir sipariş bulunamadı.</span>
                    <Button className='order-content-button' variant='primary'>
                        Alışverişe Başla
                    </Button>
                </div>
            </div>
        </Container>
    )
}
