import Card from "react-bootstrap/Card";
import './index.css'
import {useState} from "react";
import Button from "react-bootstrap/Button";

export function ProductListItemComponent(props) {
    const [isFavorite, setIsFavorite] = useState(props.isFavorite);


    function callProductListItemComponentCallPostAPI(id) {
        fetch(`https://trendi-ol-backend.safiyeturk.com/product/${id}/favorite`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${localStorage.getItem('jwt')}`
            }
        }).then((res) => {
            if (res.ok) {
                setIsFavorite(true)
            }
        }).catch(() => {
            //todo error message
        })
    }

    function callProductListItemComponentDelAPI(id) {
        fetch(`https://trendi-ol-backend.safiyeturk.com/product/${id}/favorite`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${localStorage.getItem('jwt')}`
            }
        }).then((res) => {
            if (res.ok) {
                setIsFavorite(false)
                if(props.onFavoriteDeleted){
                    props.onFavoriteDeleted()
                }
            }
        }).catch(() => {
            //todo error message
        })
    }

    function handleChangeFavoriteButton() {
        if (isFavorite) {
            callProductListItemComponentDelAPI(props.id)
        } else if (!isFavorite) {
            callProductListItemComponentCallPostAPI(props.id)
        }
    }

    return (
        <Card className='product-list-card'>
            <Card.ImgOverlay>
                <div className='product-list-card-img-overlay'>
                    <i className="bi bi-truck truck-icon-component"/>
                    <span style={{fontSize: '10px', lineHeight: '9px', marginLeft: '4px', marginTop: '1px'}}>BUGÜN KARGODA</span>
                </div>
                {
                    props.isCrossIconVisible ?
                        <div onClick={handleChangeFavoriteButton} className='product-cross-icon'>
                            <i className="bi bi-x"/>
                        </div> :
                        <i onClick={handleChangeFavoriteButton}
                           className={`${isFavorite ? 'product-favorite-icon-fill' : 'product-favorite-icon'}`}/>
                }
                {
                    !props.isButtonVisible ?
                        <div className='color-options'>
                            <div>
                                <span className='color-option'> </span>
                                <span className='color-option'> </span>
                            </div>
                            <span>14</span>
                        </div>  : null
                }
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
                         src='https://cdn.dsmcdn.com/mobile/reviewrating/kamera-emoji6x.png'
                         alt='kamera emoji'/>
                </Card.Text>
                <Card.Text style={{color: '#f27a1a', fontSize: '16px'}}>{props.price} TL</Card.Text>
                {
                    props.isButtonVisible
                        ?
                        <div className='product-list-favorite-buttons-div'>
                            <Button className='product-list-favorite-size-button'>Tek Beden</Button>
                            <Button className='product-list-favorite-add-cart-button'>Sepete Ekle</Button>
                        </div> : null
                }
            </Card.Body>
        </Card>
    )
}
