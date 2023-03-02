import Card from "react-bootstrap/Card";
import './index.css'

export function ProductListItemComponent(props) {
    return (
        <Card className='product-list-card'>
            <Card.Img
                variant='top'
                src={props.bgImage} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    Card content
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
