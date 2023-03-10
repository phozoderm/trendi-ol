import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './index.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function UserInfoPage() {
    return (
        <Container>
            <div className='user-info-header-container'>
                <span style={{fontSize: '18px', fontWeight: '600', color: '#2a2a2a'}}>Kullanıcı Bilgilerim</span>
                <div>
                    <span style={{fontSize: '13px', marginRight:'7px'}}>İşlemler</span> <i className="bi bi-chevron-down"/>
                </div>
            </div>
            <div className='user-info-forms-container'>
                <div className='w-100 user-info-form-info-update-div'>
                    <div style={{marginBottom: '20px'}}>
                        <span style={{
                            fontSize: '16px',
                            fontWeight: '700',
                            lineHeight: '24px',
                            color: '#f27a1a'
                        }}>Üyelik Bilgilerim</span>
                    </div>
                    <Form>
                        <Row>
                            <Col xs={6}>
                                <Form.Group>
                                    <Form.Label style={{
                                        marginBottom: '8px',
                                        color: '#333333',
                                        fontSize: '14px',
                                        fontWeight: '600'
                                    }}>Ad</Form.Label>
                                    <Form.Control style={{height: '44px'}} type="email"/>
                                    <div style={{height: '26px', marginTop: '4px'}}/>
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group>
                                    <Form.Label style={{
                                        marginBottom: '8px',
                                        color: '#333333',
                                        fontSize: '14px',
                                        fontWeight: '600'
                                    }}>Soyad</Form.Label>
                                    <Form.Control style={{height: '44px'}} type="email"/>
                                    <div style={{height: '26px', marginTop: '4px'}}/>
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label style={{
                                        marginBottom: '8px',
                                        color: '#333333',
                                        fontSize: '14px',
                                        fontWeight: '600'
                                    }}>E-Mail</Form.Label>
                                    <Form.Control style={{height: '44px'}} type="email"/>
                                </Form.Group>
                                <div style={{height: '26px', marginTop: '4px'}}/>
                            </Col>
                            <Col xs={3}>
                                <Form.Label style={{
                                    marginBottom: '8px',
                                    fontSize: '14px',
                                    color: '#333333',
                                    fontWeight: '600'
                                }}>Cep Telefonu</Form.Label>
                                <Form.Select style={{height: '44px'}}>
                                    <option>+90</option>
                                    <option>+49</option>
                                    <option>+43</option>
                                </Form.Select>
                                <div style={{height: '26px', marginTop: '4px'}}/>
                            </Col>
                            <Col xs={6}>
                                <Form.Group>
                                    <div style={{height: '21px', marginBottom: '8px'}}/>
                                    <Form.Control style={{height: '44px'}} type="email"/>
                                </Form.Group>
                                <div style={{height: '26px', marginTop: '4px'}}/>
                            </Col>
                            <Col xs={3}>
                                <Button style={{height: '44px', marginTop: '29px'}} variant="primary" type="submit">
                                    Güncelle
                                </Button>
                            </Col>
                            <Col xs={4}>
                                <Form.Label style={{
                                    marginBottom: '8px',
                                    fontSize: '14px',
                                    color: '#333333',
                                    fontWeight: '600'
                                }}>Doğum Tarihiniz</Form.Label>
                                <Form.Select style={{height: '44px'}}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Select>
                                <div style={{height: '26px', marginTop: '4px'}}/>
                            </Col>
                            <Col xs={4}>
                                <div style={{height: '21px', marginBottom: '8px'}}/>
                                <Form.Select style={{height: '44px'}}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Select>
                                <div style={{height: '26px', marginTop: '4px'}}/>
                            </Col>
                            <Col xs={4}>
                                <div style={{height: '21px', marginBottom: '8px'}}/>
                                <Form.Select style={{height: '44px'}}>
                                    <option>1990</option>
                                    <option>1989</option>
                                    <option>1988</option>
                                </Form.Select>
                                <div style={{height: '26px', marginTop: '4px'}}/>
                            </Col>
                            <Col>
                                <Form.Label style={{
                                    marginBottom: '8px',
                                    fontSize: '14px',
                                    color: '#333333',
                                    fontWeight: '600'
                                }}>Cinsiyet</Form.Label>
                                <div className='d-flex flex-row'>
                                    <Form.Group style={{marginRight: '20px'}} className='d-flex flex-row'>
                                        <Form.Check style={{marginRight: '6px'}} type="checkbox"/>
                                        <Form.Text style={{
                                            fontSize: '14px',
                                            lineHeight: '18px',
                                            color: '#333333',
                                            marginLeft: '8px'
                                        }}> Kadın</Form.Text>
                                    </Form.Group>
                                    <Form.Group className='d-flex flex-row'>
                                        <Form.Check style={{marginRight: '6px'}} type="checkbox"/>
                                        <Form.Text style={{
                                            fontSize: '14px',
                                            lineHeight: '18px',
                                            color: '#333333',
                                            marginLeft: '8px',
                                        }}>Erkek</Form.Text>
                                    </Form.Group>
                                </div>
                                <div style={{height: '16px', marginTop: '4px'}}/>
                            </Col>
                            <Col xs={12}>
                                <Form.Label style={{
                                    marginBottom: '8px',
                                    fontSize: '14px',
                                    color: '#333333',
                                    fontWeight: '600'
                                }}>Kurumsal</Form.Label>
                                <Form.Group className='d-flex flex-row'>
                                    <Form.Check style={{marginRight: '6px'}} type="checkbox"/>
                                    <Form.Text style={{
                                        fontSize: '14px',
                                        lineHeight: '18px',
                                        color: '#333333',
                                        marginLeft: '4px',
                                        marginRight: '40px'
                                    }}>Kurumsal müşteri kampanyalarından/duyurularından haberdar olmak
                                        istiyorum.</Form.Text>
                                </Form.Group>
                                <div style={{height: '16px', marginTop: '4px'}}/>
                            </Col>
                            <Col xs={12}>
                                <Button style={{height: '44px', marginBottom:'10px'}} className='w-100 user-info-form-update-button' variant="primary" type="submit">
                                    GÜNCELLE
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div style={{borderLeft: '1px solid #e2e2e2'}}/>
                <div className='w-100 user-info-form-info-update-div'>
                    <div style={{marginBottom: '20px'}}>
                        <span style={{
                            fontSize: '16px',
                            fontWeight: '700',
                            lineHeight: '24px',
                            color: '#f27a1a'
                        }}>Şifre Güncelleme</span>
                    </div>

                    <Form>
                        <Row>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label
                                        style={{
                                            marginBottom: '8px',
                                            color: '#333333',
                                            fontSize: '14px',
                                            fontWeight: '600'
                                        }}>Şu
                                        Anki Şifre</Form.Label>
                                    <Form.Control style={{height: '44px'}} type="password"/>
                                    <div style={{height: '26px', marginTop: '4px'}}/>
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group style={{marginBottom: '20px'}}>
                                    <Form.Label
                                        style={{
                                            marginBottom: '8px',
                                            color: '#333333',
                                            fontSize: '14px',
                                            fontWeight: '600'
                                        }}>Yeni
                                        Şifre</Form.Label>
                                    <Form.Control style={{height: '44px'}} type="password"/>
                                    <Form.Text style={{
                                        fontSize: '13px',
                                        color: '#1b1b1b',
                                    }}>Şifreniz <span
                                        style={{fontFamily: 'source_sans_prosemibold', fontWeight: 'bold'}}>en az 7 karakter</span> ve <span
                                        style={{
                                            fontFamily: 'source_sans_prosemibold',
                                            fontWeight: 'bold'
                                        }}>en fazla 64 karakter</span> olmalı, harf ve rakam içermelidir.</Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label
                                        style={{
                                            marginBottom: '8px',
                                            color: '#333333',
                                            fontSize: '14px',
                                            fontWeight: '600'
                                        }}>Yeni
                                        Şifre (Tekrar)</Form.Label>
                                    <Form.Control style={{height: '44px'}} type="password"/>
                                    <div style={{height: '16px', marginTop: '4px'}}/>
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Button style={{height: '44px', marginBottom:'10px'}} className='w-100 user-info-form-update-button' type="submit">
                                    GÜNCELLE
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <div style={{
                        height: '120px',
                        backgroundColor: '#f2f2f2',
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '10px',
                        borderRadius: '6px',
                        padding:'20px'
                    }}>
                        <div className='d-flex flex-row justify-content-between'>
                            <span style={{color:'#333333', fontSize:'16px', fontWeight:'600'}}>İKİ ADIMLI DOĞRULAMA</span>
                            <Form.Check
                                disabled
                                type="switch"/>
                        </div>
                        <div style={{marginTop:'8px', maxWidth:'266px', lineHeight:'1.58', color:'#333333', fontSize:'12px'}}>
                            İki adımlı doğrulama yöntemini etkinleştirdiğinizde, kişisel şifrelerinize ek olarak kayıtlı cep telefonunuza gelen doğrulama koduyla oturum açarsınız.
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
