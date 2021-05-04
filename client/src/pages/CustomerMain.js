import {Component, useState, useEffect} from 'react';
import {Button, Navbar, Nav, Container, Modal} from 'react-bootstrap';
import {Divider, Drawer, Row, Col, Card, InputNumber,Avatar} from 'antd';
import { EditOutlined, EllipsisOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../pages/main.css';

import axios from "../commons/axios"
import Layout, { Footer } from 'antd/lib/layout/layout';
import OrderList from '../components/OrderList.js';
import Menu from '../components/Menu.js';

const{Meta}= Card;
function onChange(value) {
    console.log('changed', value);
  }

export default function CustomerMain(props) {
    
    const [drawerVisible, setDrawerVisible] = useState(false); 
    const handleDrawerClose = () => setDrawerVisible(false); 
    const handleDrawerShow = () => setDrawerVisible(true); 
    const[modalVisible, setModalVisible]= useState(props.modalVisible);
    const handleModalShow = () => setModalVisible(true);
    const handleModalClose = () => setModalVisible(false);

    return (
        <>
            <Layout>
                <Navbar id="nav">
                    <img alt="" src="/coffee-truck.png" width="70" height="50" className="d-inline-block align-top"/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#home">My Account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav class="justify-content-end">
                        <Button variant="outline-light" class="btn"
                            onClick={handleModalShow}>Start Order</Button>
                        <Button variant = "outline-light" class="btn" key = "1"
                            onClick = {handleDrawerShow}>See Orders
                        </Button>
                    </Nav>
                </Navbar>

                <Modal show={modalVisible} onHide={handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Menu</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row gutter={[8, 8]}>
                                <Col span={4}>
                                    <img alt="" src="https://images.unsplash.com/photo-1568046562322-0bbc869368ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" 
                                        width="60px">
                                    </img>
                                </Col>
                                <Col span={6}>Product Name </Col>
                                <Col span={6}>$ 3.95 </Col>
                                <Col span={6}>
                                    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                                </Col>
                            </Row>
                            <Divider style={{borderWidth:2, borderColor: '#593e34' }} plain>
                            </Divider>

                            <Row gutter={[8, 8]}>
                                <Col span={4}>
                                    <img alt="" src="https://images.unsplash.com/photo-1568046562322-0bbc869368ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" 
                                        width="60px">
                                    </img>
                                </Col>
                                <Col span={6}>Product Name </Col>
                                <Col span={6}>$ 3.95 </Col>
                                <Col span={6}>
                                    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                                </Col>
                            </Row>
                            <Divider style={{borderWidth:2, borderColor: '#593e34' }} plain>
                            </Divider>

                            <Button variant="outline-light" class="btn">
                                Submit
                            </Button>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-dark">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Drawer visible ={drawerVisible}
                    closable = {true}
                    onClose = {handleDrawerClose}
                    width={"35%"}>
                    <h2>All Orders</h2>
                    <Divider/>
                    <Card id="order"
                        style={{ width: '100%' }}
                        actions={[
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                        avatar={<Avatar src="https://www.flaticon.com/svg/vstatic/svg/848/848043.svg?token=exp=1619981902~hmac=bc98b49598df719fa58d79c1c0eb6f6e" />}
                        title="Order Number"
                        description="Order Stage"
                        />
                    </Card>
                    <Divider style={{borderWidth:1, borderColor: 'white' }} plain>
                    </Divider>
                    <Card id="order"
                        style={{ width: '100%' }}
                        actions={[
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                        avatar={<Avatar src="https://www.flaticon.com/svg/vstatic/svg/848/848043.svg?token=exp=1619981902~hmac=bc98b49598df719fa58d79c1c0eb6f6e" />}
                        title="Order Number"
                        description="Order Stage"
                        />
                    </Card>
                </Drawer>


                <div id="menu-container">
                    <Row id="Coffee-Row">
                        <Divider orientation="left" style={{borderWidth:2, borderColor: '#593e34' }} plain>
                            <h2>Coffee</h2>
                        </Divider>
                        <Row gutter={{ xs:8, sm:16, md:24, lg:32 }} wrap="true">
                            <Col span={6}>
                            <Card id="coffeemenu" hoverable
                                    cover={<img alt="" src="https://images.unsplash.com/photo-1568046562322-0bbc869368ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" 
                                    width="100%"></img>}
                                >
                                    <Meta title="Latte $4.95" description="Latte is a coffee-based drink made primarily from espresso and steamed milk. It consists of one-third espresso, two-thirds heated milk and about 1cm of foam." />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card id="coffeemenu" hoverable
                                    cover={<img alt="" src="https://images.unsplash.com/photo-1568046562322-0bbc869368ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" 
                                    width="100%"></img>}
                                >
                                    <Meta title="Latte $4.95" description="Latte is a coffee-based drink made primarily from espresso and steamed milk. It consists of one-third espresso, two-thirds heated milk and about 1cm of foam." />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card id="coffeemenu" hoverable
                                    cover={<img alt="" src="https://images.unsplash.com/photo-1568046562322-0bbc869368ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" 
                                    width="100%"></img>}
                                >
                                    <Meta title="Latte $4.95" description="Latte is a coffee-based drink made primarily from espresso and steamed milk. It consists of one-third espresso, two-thirds heated milk and about 1cm of foam." />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card id="coffeemenu" hoverable
                                    cover={<img alt="" src="https://images.unsplash.com/photo-1568046562322-0bbc869368ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" 
                                    width="100%"></img>}
                                >
                                    <Meta title="Latte $4.95" description="Latte is a coffee-based drink made primarily from espresso and steamed milk. It consists of one-third espresso, two-thirds heated milk and about 1cm of foam." />
                                </Card>
                            </Col>
                        </Row> 
                    </Row>
                    <Row id="Food-Row">
                        <Divider orientation="left" style={{borderWidth:2, borderColor: '#593e34' }} plain>
                            <h2>Food</h2>
                        </Divider>
                        <Row gutter={{ xs:8, sm:16, md:24, lg:32 }} wrap="true">
                            <Col span={6}>
                                <Card id="foodmenu" hoverable
                                    cover={<img alt="" src="https://images.unsplash.com/photo-1516054237859-4e834cda4ac9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                                        width="100%"></img>}
                                >
                                    <Meta title="Latte $4.95" description="Latte is a coffee-based drink made primarily from espresso and steamed milk. It consists of one-third espresso, two-thirds heated milk and about 1cm of foam." />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card id="foodmenu" hoverable
                                    cover={<img alt="" src="https://images.unsplash.com/photo-1516054237859-4e834cda4ac9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                                        width="100%"></img>}
                                >
                                    <Meta title="Latte $4.95" description="Latte is a coffee-based drink made primarily from espresso and steamed milk. It consists of one-third espresso, two-thirds heated milk and about 1cm of foam." />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card id="foodmenu" hoverable
                                    cover={<img alt="" src="https://images.unsplash.com/photo-1516054237859-4e834cda4ac9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                                        width="100%"></img>}
                                >
                                    <Meta title="Latte $4.95" description="Latte is a coffee-based drink made primarily from espresso and steamed milk. It consists of one-third espresso, two-thirds heated milk and about 1cm of foam." />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card id="foodmenu" hoverable
                                    cover={<img alt="" src="https://images.unsplash.com/photo-1516054237859-4e834cda4ac9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                                        width="100%"></img>}
                                >
                                    <Meta title="Latte $4.95" description="Latte is a coffee-based drink made primarily from espresso and steamed milk. It consists of one-third espresso, two-thirds heated milk and about 1cm of foam." />
                                </Card>
                            </Col>
                        </Row>
                    </Row>
                </div>
                <Footer>
                    <Divider orientation="center" style={{borderWidth:2, borderColor: '#593e34' }} plain>
                        <h2>Le Sillage</h2>
                    </Divider>
                </Footer>
            </Layout>
        </>
    )
}
