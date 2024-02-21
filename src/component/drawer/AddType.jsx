import React, { useEffect, useState } from 'react'
import { Row, Col, Input, Button, message, Divider, Space, Tag } from 'antd';
import { useData } from '../../context/context';
import { getExpenseType, submitExpenseType, deleteType } from '../../context/operation';

const AddType = ({ handleOk }) => {

     const {state, dispatcher} = useData();
    let paymentType = state.typeData;
    const [text, setText] = useState('');

    const onSubmit = () => {
        submitExpenseType(text);
        dispatcher({type: 'updateState'});
    }
    
    const handleOnTypeDelete = (value) => {
        deleteType(value);
        dispatcher({type: 'updateState'});
    }

    return (<>
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <div style={{ padding: "5px", color: "gray" }}>
                    Payment Type <span className='text-danger'>*</span>
                </div>
                <Input size="large" autoComplete='off' name="description" placeholder="Add Payment Type" value={text} onChange={(e) => setText(e.target.value)} />
            </Col>
            <Col span={24}>
                <Row justify="end" gutter={[8, 8]}>
                    <Col span={24}>
                        <Button type='primary' style={{ width: "100%" }} className='px-4' onClick={() => onSubmit()} > 
                            Save
                        </Button>
                    </Col>
                    <Col span={24}>
                        <Button style={{ width: "100%" }} onClick={() => {
                            handleOk()
                        }}>
                            Cancel
                        </Button>
                    </Col>

                </Row>
            </Col>
        </Row >
        <Divider />
        <Row>
            <Space size={[0, 'small']} wrap>
                {paymentType[0] ?
                    paymentType.map(({ value, label },idx) => {
                        return (
                            <Tag closable key={value} bordered={false} onClose={() => { handleOnTypeDelete(value) }}>
                                {label}
                            </Tag>
                        )
                    })
                    : null}
            </Space>
        </Row >
    </>
    )
}

export default AddType