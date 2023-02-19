import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './index.css'
import {useState} from "react";

export function HomeSalesItemComponent(props) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return (
        <Card className='home-page-card'>
            <Card.Img variant="top"
                      src={props.bgImage}/>
            <Button onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    className='home-page-button'>
                <span className='button-bottom-title'>{props.bottomTitle}</span> {isHovering && (
                <span>Alışverişe Başla</span>
            )}
            </Button>
        </Card>
    )
}
