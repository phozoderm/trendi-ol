import './index.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function ElitePage() {
    return (
        <Container>
            <div className='d-flex flex-column'>
                <div className='elite-header-container'>
                    <h1>Trendi-ol Elite</h1>
                    <div>
                        <p>Elite ayrıcalıklarından yararlan!</p>
                        <div className='elite-header-divs'>
                            <div>
                                <i className="bi bi-box-seam-fill"/>
                                <span>100 TL ve üzeri <b> Kargo Bedava</b></span>
                            </div>
                            <div>
                                <i className="bi bi-chat-left-dots-fill"/>
                                <span>Müşteri hattında <b> Öncelik</b></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='elite-info-container'>
                    <span>Elite üye olmak için <b> 22 Aralık 2022</b>’den itibaren kazandığın puanları aşağıda görebilirsin.</span>
                    <div>
                        <div className='elite-progress-bar-header'>
                            <div className='elite-progress-bar-header-point-container'>
                                <div>
                                    <span>
                                        <i className="bi bi-star-fill"/>
                                    </span>
                                </div>
                                <span>
                                    Puanın: <b>0</b>
                                </span>
                                <i className="bi bi-info-circle"/>
                            </div>
                            <div className='elite-progress-bar-history-button'>
                                <span>Sipariş ve Puan Geçmişi</span>
                                <i className="bi bi-chevron-right"/>
                            </div>
                        </div>
                        <div className='elite-progress-bar-container'>
                            <div className='progress-bar-item-container'>
                                <div className='progress-bar-items'>
                                    <div className='progress-bar-items-inner'>
                                        <div className='progress-bar-item-icon'>
                                        <span>
                                            <i className="bi bi-star-fill"/>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='progress-bar-badge'>
                                    <div className='progress-bar-badge-item'>
                                        <span>
                                            <i className="bi bi-ticket-perforated-fill"/>
                                        </span>
                                    </div>
                                    <div className='progress-bar-badge-item-info'>
                                        <p>50 TL Kupon</p>
                                        <p>(500 Puan)</p>
                                    </div>
                                </div>
                            </div>
                            <div className='progress-bar-item-container'>
                                <div className='progress-bar-items'>
                                </div>
                                <div className='progress-bar-badge'>
                                    <div className='progress-bar-badge-item'>
                                        <span>
                                            <i className="bi bi-ticket-perforated-fill"/>
                                        </span>
                                    </div>
                                    <div className='progress-bar-badge-item-info'>
                                        <p>100 TL Kupon</p>
                                        <p>(1000 Puan)</p>
                                    </div>
                                </div>
                            </div>
                            <div className='progress-bar-item-container'>
                                <div className='progress-bar-items'>
                                </div>
                                <div className='progress-bar-badge'>
                                    <div className='progress-bar-badge-item'>
                                        <span>
                                           <i className="bi bi-suit-diamond-fill"/>
                                        </span>
                                    </div>
                                    <div className='progress-bar-badge-item-info'>
                                        <p>Elite Üye</p>
                                        <p>(2000 Puan)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='elite-point-delay-info-container'>
                        <i className="bi bi-info-circle"/>
                        <div className='d-flex flex-column'>
                            <p>Yorum sonrası kazandığınız puanların toplam puanınıza eklenmesi ve görüntülenmesinde 3
                                saate varan gecikmeler yaşanabilir.</p>
                            <p>27 Mart itibariyle Elite olmak veya Elite üyeliğinin devam etmesi için ise, yaptığın
                                alışverişlerden toplaman gereken puan 2500 olarak güncellenecektir.</p>
                        </div>
                    </div>
                </div>
                <div className='elite-point-calculator-container'>
                    <div className='elite-point-calculator-item-first'>
                        <div>
                            <img src='https://cdn.dsmcdn.com/web/production/calculator-elite.svg'/>
                        </div>
                        <span> Nasıl Puan Kazanırım? </span>
                        <i className="bi bi-info-circle"/>
                    </div>
                    <div className='elite-point-calculator-item-second'>
                        <span className='elite-point-calculator-button'>
                            <span>Örnek Puan Hesaplamasını Gör</span>
                            <div>
                                <i className="bi bi-chevron-right"/>
                            </div>
                        </span>
                    </div>
                </div>
                <div className='elite-points-container'>
                    <div className='elite-points-items-div'>
                        <div className='elite-points-item'>
                            <div className='elite-points-item-first'>
                                <div className='elite-points-item-first-icon'>
                                    <i className="bi bi-box-fill"/>
                                </div>
                                <div>
                                    <span>
                                        Her 100 TL'lik alışverişinde
                                    </span>
                                </div>
                            </div>
                            <div className='elite-points-item-second'>
                                <div className='elite-points-item-second-icon'>
                                    <i className="bi bi-star-fill"/>
                                </div>
                                <div className='elite-points-item-second-desc'>
                                    <span>
                                        15 Puan
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='elite-points-item'>
                            <div className='elite-points-item-first'>
                                <div className='elite-points-item-first-icon-meal'>
                                    <i className="bi bi-egg-fried"/>
                                </div>
                                <div>
                                    <span>
                                        Her 100 TL'lik Yemek alışverişinde
                                    </span>
                                </div>
                            </div>
                            <div className='elite-points-item-second'>
                                <div className='elite-points-item-second-icon'>
                                    <i className="bi bi-star-fill"/>
                                </div>
                                <div className='elite-points-item-second-desc'>
                                    <span>
                                        30 Puan
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='elite-points-item'>
                            <div className='elite-points-item-first'>
                                <div className='elite-points-item-first-icon-bag'>
                                    <i className="bi bi-basket2-fill"/>
                                </div>
                                <div>
                                    <span>
                                        Her 100 TL'lik Market alışverişinde
                                    </span>
                                </div>
                            </div>
                            <div className='elite-points-item-second'>
                                <div className='elite-points-item-second-icon'>
                                    <i className="bi bi-star-fill"/>
                                </div>
                                <div className='elite-points-item-second-desc'>
                                    <span>
                                        30 Puan
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='elite-points-item'>
                            <div className='elite-points-item-first'>
                                <div className='elite-points-item-first-icon-closet'>
                                    <i className="bi bi-palette2"/>
                                </div>
                                <div>
                                    <span>
                                        Her 100 TL'lik Dolap alışverişinde
                                    </span>
                                </div>
                            </div>
                            <div className='elite-points-item-second'>
                                <div className='elite-points-item-second-icon'>
                                    <i className="bi bi-star-fill"/>
                                </div>
                                <div className='elite-points-item-second-desc'>
                                    <span>
                                        30 Puan
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='elite-points-item'>
                            <div className='elite-points-item-first'>
                                <div className='elite-points-item-first-icon-chat'>
                                    <i className="bi bi-chat-fill"/>
                                </div>
                                <div>
                                    <span>
                                        Yorum yapma
                                    </span>
                                </div>
                            </div>
                            <div className='elite-points-item-second'>
                                <div className='elite-points-item-second-icon'>
                                    <i className="bi bi-star-fill"/>
                                </div>
                                <div className='elite-points-item-second-desc'>
                                    <span>
                                        10 Puan
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='elite-points-item'>
                            <div className='elite-points-item-first'>
                                <div className='elite-points-item-first-icon-camera'>
                                    <i className="bi bi-camera-fill"/>
                                </div>
                                <div>
                                <span>
                                    Fotoğraflı yorum yapma
                                </span>
                                </div>
                            </div>
                            <div className='elite-points-item-second'>
                                <div className='elite-points-item-second-icon'>
                                    <i className="bi bi-star-fill"/>
                                </div>
                                <div className='elite-points-item-second-desc'>
                                    <span>
                                        20 Puan
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
