import { Tag, Button, Row, Col, Input, message } from 'antd';
import moment from 'moment/moment';
import { Method, Category } from './utils';
import { BiTrash } from "react-icons/bi";
import { useData } from '../../context/context';
import { deleteData } from "../../context/operation";

export default function getMainColumn(){
    const {state, dispatcher} = useData();
    function showDeleteModal(id) {
        deleteData(id);
        dispatcher({type: 'updateState'});
    }
    return [
        {
            title: '#',
            dataIndex: 'no',
            width: "40px",
            align: "center",
            key: 'no',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: "300px",
            render: (description) => (<Input value={description} bordered={false} />)
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            align: "center",
            width: "100px",
            render: (date) => <>{date ? <span className='text-primary fw-semibold'> {moment(date).format('ll')}</span> : <></>}</>
        },
        {
            title: 'Payment To',
            dataIndex: 'payto',
            key: 'payto',
            width: "100px",
            align: "center",
            ellipsis: true,
            render: (payto) => {
                const selectedMethod = state.typeData[0] ? state.typeData.find(item => item.value === payto) : null
                return (<>{selectedMethod && (<>{selectedMethod.label}</>)}</>)
            }
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            width: "100px",
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
            title: 'Amount ₹',
            dataIndex: 'amount',
            key: 'amount',
            width: "100px",
            align: "center",
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
            title: 'Action',
            width: "50px",
            align: "center",
            render: (e) => (<Row gutter={[8, 8]} justify="space-around">
                <Col>
                    <Button size='small' type='text' shape='circle' onClick={() => {
                        console.log(e);
                        showDeleteModal(e._id)
                    }}>
                        <BiTrash className='fs-6' />
                    </Button>
                </Col>
            </Row>)
        },
    ];
}

