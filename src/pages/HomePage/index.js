import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import {HomeSalesItemComponent} from "../../components/HomeSalesItemComponent";
import './index.css'
import {useState} from "react";

export function HomePage() {

    return (
        <>
            {/*<Container>*/}
            {/*    <Carousel variant='dark'>*/}
            {/*        <Carousel.Item>*/}
            {/*            <img*/}
            {/*                src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/En_Cok_Satanlar_202302142041.png'*/}
            {/*                width='68'*/}
            {/*                height='68'*/}
            {/*            />*/}
            {/*            <img*/}
            {/*                src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/Senin_Icin_Sectik_202302142041.png'*/}
            {/*                width='68'*/}
            {/*                height='68'*/}
            {/*            />*/}
            {/*            <img*/}
            {/*                src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/11/29/Screenshot20221128At163430_202211290324.png'*/}
            {/*                width='68'*/}
            {/*                height='68'*/}
            {/*            />*/}
            {/*            <img*/}
            {/*                src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/15/Widget_202302151451.png'*/}
            {/*                width='68'*/}
            {/*                height='68'*/}
            {/*            />*/}
            {/*        </Carousel.Item>*/}
            {/*    </Carousel>*/}
            {/*</Container>*/}

            <Container>
                <Row md={2} lg={3}>
                    <Col>
                        <HomeSalesItemComponent
                            bgImage='https://cdn.dsmcdn.com/ty734/pimWidgetApi/mobile_20230217084506_Son30GununEnDusukFiyatiWidget.jpg'
                            bottomTitle='Saat & Gözlükte Son 30 Günün En Düşük Fiyatları'/>
                    </Col>
                    <Col>
                        <HomeSalesItemComponent
                            bgImage='https://cdn.dsmcdn.com/ty671/pimWidgetApi/mobile_20230102103720_2298819SaatAksesuarMobile202212301101.jpg'
                            bottomTitle='Küpelerde Kaçırılmayacak Fırsatlar'/>
                    </Col>
                    <Col>
                        <HomeSalesItemComponent
                            bgImage='https://cdn.dsmcdn.com/ty711/pimWidgetApi/mobile_20230203100037_2300953KadinMobile202301311601.jpg'
                            bottomTitle='Penti - Yıldızlı Ürünler'/>
                    </Col>
                    <Col>
                        <HomeSalesItemComponent
                            bgImage='https://cdn.dsmcdn.com/ty705/campaign/banners/original/619051/7a2dc3003c_0.jpg'
                            bottomTitle='Trendyol Collection - Sezonun En İyileri'/>
                    </Col>
                    <Col>
                        <HomeSalesItemComponent
                            bgImage='https://cdn.dsmcdn.com/ty727/pimWidgetApi/mobile_20230212163436_mavimobil3.jpg'
                            bottomTitle='mavi - Yeni Sezon'/>
                    </Col>
                    <Col>
                        <HomeSalesItemComponent
                            bgImage='https://cdn.dsmcdn.com/ty722/pimWidgetApi/mobile_20230207123955_inditexbanner0601231.jpg'
                            bottomTitle='Dev Markalarda Sezon Sonu İndirimi'/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
