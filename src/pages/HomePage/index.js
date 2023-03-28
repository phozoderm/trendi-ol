import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Carousel from "react-bootstrap/Carousel";
import {HomeSalesItemComponent} from "../../components/HomeSalesItemComponent";
import './index.css'
import {useNavigate} from "react-router-dom";
import {useMemo} from "react";

export function HomePage() {

    const navigate = useNavigate()

    function navigateToProductList() {
        navigate('/product-list')
    }

    const homePageColList = useMemo(() => {
        return [
            {
                id: 1,
                image: 'https://cdn.dsmcdn.com/ty734/pimWidgetApi/mobile_20230217084506_Son30GununEnDusukFiyatiWidget.jpg',
                title: 'Saat & Gözlükte Son 30 Günün En Düşük Fiyatları'
            },
            {
                id: 2,
                image: 'https://cdn.dsmcdn.com/ty671/pimWidgetApi/mobile_20230102103720_2298819SaatAksesuarMobile202212301101.jpg',
                title: 'Küpelerde Kaçırılmayacak Fırsatlar'
            },
            {
                id: 3,
                image: 'https://cdn.dsmcdn.com/ty711/pimWidgetApi/mobile_20230203100037_2300953KadinMobile202301311601.jpg',
                title: 'Penti - Yıldızlı Ürünler'
            },
            {
                id: 4,
                image: 'https://cdn.dsmcdn.com/ty705/campaign/banners/original/619051/7a2dc3003c_0.jpg',
                title: 'Trendyol Collection - Sezonun En İyileri'
            },
            {
                id: 5,
                image: 'https://cdn.dsmcdn.com/ty727/pimWidgetApi/mobile_20230212163436_mavimobil3.jpg',
                title: 'mavi - Yeni Sezon'
            },
            {
                id: 6,
                image: 'https://cdn.dsmcdn.com/ty722/pimWidgetApi/mobile_20230207123955_inditexbanner0601231.jpg',
                title: 'Dev Markalarda Sezon Sonu İndirimi'
            },
            {
                id: 7,
                image: 'https://cdn.dsmcdn.com/ty734/pimWidgetApi/mobile_20230217084506_Son30GununEnDusukFiyatiWidget.jpg',
                title: 'Saat & Gözlükte Son 30 Günün En Düşük Fiyatları'
            },
            {
                id: 8,
                image: 'https://cdn.dsmcdn.com/ty671/pimWidgetApi/mobile_20230102103720_2298819SaatAksesuarMobile202212301101.jpg',
                title: 'Küpelerde Kaçırılmayacak Fırsatlar'
            },
            {
                id: 9,
                image: 'https://cdn.dsmcdn.com/ty711/pimWidgetApi/mobile_20230203100037_2300953KadinMobile202301311601.jpg',
                title: 'Penti - Yıldızlı Ürünler'
            },
            {
                id: 10,
                image: 'https://cdn.dsmcdn.com/ty705/campaign/banners/original/619051/7a2dc3003c_0.jpg',
                title: 'Trendyol Collection - Sezonun En İyileri'
            },
            {
                id: 11,
                image: 'https://cdn.dsmcdn.com/ty727/pimWidgetApi/mobile_20230212163436_mavimobil3.jpg',
                title: 'mavi - Yeni Sezon'
            },
            {
                id: 12,
                image: 'https://cdn.dsmcdn.com/ty722/pimWidgetApi/mobile_20230207123955_inditexbanner0601231.jpg',
                title: 'Dev Markalarda Sezon Sonu İndirimi'
            },

        ]
    })

    return (
        <>
            <Container className='mt-4'>
                <Row md={2} lg={3}>
                    {homePageColList.map((colList)=>(
                        <Col onClick={navigateToProductList}>
                            <HomeSalesItemComponent
                                bgImage={colList.image}
                                bottomTitle={colList.title}/>
                        </Col>

                    ))}
                </Row>
            </Container>
        </>
    )
}
