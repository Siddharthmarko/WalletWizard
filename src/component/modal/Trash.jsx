import React, { useEffect, useState } from 'react';
import { Table, Button, Row, Col, Tag, Input, message } from 'antd';
import axios from 'axios';
import { MdRefresh } from "react-icons/md";
import getTrashTable from '../compo/trashTable';
import { useData } from '../../context/context';
import { getExpenseType } from '../../context/operation';
const BASE_URL = process.env.BASE_URL;

const Trash = () => {
    const {state,dispatcher} = useData();
    const [trash, setTrash] = useState([])
    const [loading, setLoading] = useState(true);

    const columns = getTrashTable(state.typeData);
    const fetchData = () => {
        getExpenseType(dispatcher);
        axios.get(`${BASE_URL}/expense-data-trash`)
            .then((response) => {
                const newObj = response.data;
                const updatedObj = newObj[0] ? newObj.map((e, i) => {
                    const obj = { ...e, "no": i + 1 }
                    return obj;
                }) : [];
                setTrash(updatedObj)
                setLoading(false);
            })
            .catch((error) => {
                setLoading(true);
                console.error(error)
            })
    }
    useEffect(() => fetchData(), [state.updateState])
    useEffect(() => fetchData(), [])
    return (<>
        <Row justify="space-between" >
            <Col className='fw-semibold fs-5'>
                Recycle Bin
            </Col>
            <Col className='px-4'>
                <Button  type="primary" shape='circle' size='small' >
                    <MdRefresh className='fs-6 mb-1' />
                </Button>
            </Col>
        </Row>
        <div className='pt-4'>
            <Table
                columns={columns}
                loading={loading}
                size='small'
                dataSource={trash}
            />
        </div>
    </>
    )
};
export default Trash;