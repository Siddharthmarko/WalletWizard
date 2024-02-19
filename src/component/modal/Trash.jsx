import React, { useEffect, useState } from 'react';
import { Table, Button, Row, Col, Tag, Input, message } from 'antd';
import axios from 'axios';
import moment from 'moment/moment';
import { BiTrash } from "react-icons/bi";
import { Method, Category } from '../compo/utils';
import { BiRevision } from "react-icons/bi";
import { MdRefresh } from "react-icons/md";
import getTrashTable from '../compo/trashTable';

// import BASE_URL from './url';
const Trash = ({value}) => {

    const [trash, setTrash] = useState([])
    const [loading, setLoading] = useState(false)

    const columns = getTrashTable();

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