import {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {Divider, Drawer, PageHeader} from 'antd';
import axios from "../commons/axios"

import OrderList from '../components/OrderList.js';
import Menu from '../components/Menu.js';

export default function CustomerMain(props) {

    const [drawerVisible, setDrawerVisible] = useState(false); 
    const handleDrawerClose = () => setDrawerVisible(false); 
    const handleDrawerShow = () => setDrawerVisible(true); 
    const [orders, setOrders] = useState([]);
    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
        axios.get('/order?customer=' + props.location.state.customer.id).then(response => {
            setOrders(response.data.allOrders)
        })
        axios.get('/snack').then(response => {
            setSnacks(response.data.snacks)
        })
    }, [props.location.state.customer.id]); 



    // welcome!!
    return (
        <>
            <PageHeader title = {"Welcome" + props.location.state.customer.givenName}
                extra = {[<Menu key="0" snacks={snacks} customer={props.location.state.customer.id} />,
                    <Button variant = "outline-primary" key = "1"
                        onClick = {handleDrawerShow}>See Orders</Button>
                ]}>
            </PageHeader>
            <Drawer visible ={drawerVisible}
                closable = {true}
                onClose = {handleDrawerClose}
                width={"60vw"}>
                All Orders
                <Divider/>
                <OrderList orders={orders} />
            </Drawer>
        </>
    )

    
}
