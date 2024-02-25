import { Table, Button, Row, Col, Tag, Input, message } from 'antd';
import moment from 'moment/moment';
import { BiTrash } from "react-icons/bi";
import { Method, Category } from './utils';
import { BiRevision } from "react-icons/bi";
import { useData } from '../../context/context';
import { Recycle, hardDelete } from '../../context/operation';

export default function getTrashTable(typeData){
    const { dispatcher}  = useData();
    function handleHardDelete(e){  
        hardDelete(e, dispatcher);
    }
    function handleRecycle(e){  
       Recycle(e, dispatcher);
    }
    return [
        {
            title: '#',
            dataIndex: 'no',
            width: "40px",
            key: 'no',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: "auto",
            description: 'description',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: "100px",
            render: (date) => <>{date ? <span className='text-primary fw-semibold'> {moment(date).format('ll')}</span> : <></>}</>
        },

        {
            title: 'Payment To',
            dataIndex: 'payto',
            key: 'payto',
            width: "200px",
            align: "center",
            render: (payto) => {
                const selectedMethod = typeData[0] ? typeData.find(item => item.value === Number(payto)) : null
                return (<>{selectedMethod && (<>{selectedMethod.label}</>)}</>)
            }
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            width: "200px",
            align: "center",
            render: (category) => {
                const selectedMethod = Category.find(item => item.value === Number(category));
                return (<span style={{ "color": selectedMethod.type, fontWeight: "600" }}>
                    <Tag color={selectedMethod.type} bordered={false}> {selectedMethod && (<>{selectedMethod.label}</>)}</Tag>
                </span>)
            }
        },

        {
            title: 'Method',
            dataIndex: 'method',
            key: 'method',
            width: "100px",
            align: "center",
            render: (method) => {
                const selectedMethod = Method.find(item => item.value === Number(method));
                return (<>{selectedMethod && (<>{selectedMethod.label}</>)}</>)
            }
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            align: "center",
            width: "100px",
            render: (amount, e) => {
                return (
                    <Row justify="center">
                        <Col className=' fw-semibold'>
                            <span style={{ color: e.type === 0 ? "red" : "#16db65", }}>{e.type === 0 ? "-" : "+"} {amount} ₹</span>
                        </Col>
                    </Row >
                )
            }
        },
        {
            title: '',
            width: "80px",
            align: "center",
            render: (id) => (<Row gutter={[8, 8]} justify="space-around">
                <Col>
                    <Button size='small' type='text' shape='circle' onClick={() => handleRecycle(id)}>
                        <BiRevision className='fs-6' />
                    </Button>
                </Col>
                <Col>
                    <Button size='small' type='text' shape='circle' onClick={() => handleHardDelete(id)}>
                        <BiTrash className='fs-6' />
                    </Button>
                </Col>
            </Row>)
        },
    ];
}