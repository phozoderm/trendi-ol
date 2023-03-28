import Card from "react-bootstrap/Card";
import './index.css'

export function ProductListItemComponent(props) {
    return (
        <Card className='product-list-card'>
            <Card.ImgOverlay>
                <div className='product-list-card-img-overlay'>
                    <i className="bi bi-truck truck-icon-component"/>
                    <span style={{fontSize: '10px', lineHeight: '9px', marginLeft: '4px', marginTop: '1px'}}>BUGÜN KARGODA</span>
                </div>
                <i className='product-favorite-icon'/>
                <div className='color-options'>
                    <div>
                        <span className='color-option'> </span>
                        <span className='color-option'> </span>
                    </div>
                    <span>14</span>
                </div>
            </Card.ImgOverlay>
            <Card.Img
                alt='dress'
                variant='top'
                src={props.bgImage}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <i className="bi bi-star-fill"/>
                    <i className="bi bi-star-fill"/>
                    <i className="bi bi-star-fill"/>
                    <i className="bi bi-star-fill"/>
                    <i className="bi bi-star-fill star-icon"/>
                    <small style={{color: "#999", marginLeft: '5px'}}>(138401)</small>
                    <img style={{width: "15px", marginLeft: "5px"}}
                         src='https://cdn.dsmcdn.com/mobile/reviewrating/kamera-emoji6x.png'/>
                </Card.Text>
                <Card.Text style={{color: '#f27a1a', fontSize: '16px'}}>149,99 TL</Card.Text>
            </Card.Body>
        </Card>
    )
}
