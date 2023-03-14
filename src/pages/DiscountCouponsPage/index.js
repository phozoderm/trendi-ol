import Container from "react-bootstrap/Container";
import './index.css'
export function DiscountCouponsPage(){
    return(
        <Container>
            <div className='discount-coupons-container'>
                <div className='discount-header-div'>
                    <span>İndirim Kuponlarım</span>
                    <p>Kullanmak istediğiniz indirim kuponunu sepet sayfasında seçebilirsiniz.</p>
                </div>
                <div className='discount-div'>
                    <div className='discount-content-div'>
                        <div>
                            <img src='https://cdn.dsmcdn.com/web/master/coupon.svg'/>
                        </div>
                        <span>Kuponunuz Yok</span>
                        <p>Hesabınıza ait bir kupon bulunamadı</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
