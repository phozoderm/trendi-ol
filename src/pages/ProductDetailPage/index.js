import './index.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../App";
import {useParams} from "react-router-dom";

export function ProductDetailPage() {
    const {id}= useParams()
    const userInfo = useContext(UserContext);
    const [product, setProduct] = useState({});
    //todo if null loading

    function callProductDetailGetAPI(id) {
        const headers = userInfo.jwt ? {'authorization': `bearer ${userInfo.jwt}`} : {}
        fetch(`https://trendi-ol-backend.safiyeturk.com/product/${id}`, {
            headers: headers
        }).then((res) => {
            if (res.ok) {
                res.json().then((responseBody) => {
                    setProduct(responseBody)
                })
            }
        }).catch(() => {
            //todo error message
        })
    }

    useEffect(() => {
        callProductDetailGetAPI(id)
    }, [])
    return (
        <>
            <Container>
                <Row>
                    <div className='product-detail-breadcrumbs-div'>
                        <Nav>
                            <Nav.Link className='product-detail-breadcrumbs-nav-link'>Anasayfa
                                <i className="bi bi-chevron-right"/>
                            </Nav.Link>
                            <Nav.Link className='product-detail-breadcrumbs-nav-link'>Kadın
                                <i className="bi bi-chevron-right"/>
                            </Nav.Link>
                            <Nav.Link className='product-detail-breadcrumbs-nav-link'>Giyim
                                <i className="bi bi-chevron-right"/>
                            </Nav.Link>
                            <Nav.Link className='product-detail-breadcrumbs-nav-link'>
                                {product.name}
                            </Nav.Link>
                        </Nav>
                    </div>
                    <div className='product-detail-container'>

                    </div>
                </Row>
            </Container>
        </>
    )
}
