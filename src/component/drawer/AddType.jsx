import React, { useEffect, useState } from 'react'
import { Row, Col, Input, Button, message, Divider, Space, Tag } from 'antd';
import axios from 'axios';
// import BASE_URL from './url'

const AddType = ({ handleOk }) => {

    const [formData, setFormData] = useState({ "description": "", })
    const [paymentType, setPaymentType] = useState([])

    const handleOnChnage = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });


    useEffect(() => { }, [formData])
    return (<>
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <div style={{ padding: "5px", color: "gray" }}>
                    Payment Type <span className='text-danger'>*</span>
                </div>
                <Input size="large" autoComplete='off' name="description" placeholder="Add Payment Type" value={formData.description} onChange={handleOnChnage} />
            </Col>
            <Col span={24}>
                <Row justify="end" gutter={[8, 8]}>
                    <Col span={24}>
                        <Button type='primary' style={{ width: "100%" }} className='px-4' >
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
                    paymentType.map(({ value, label }) => {
                        return (
                            <Tag bordered={false} closable key={value} onClose={false}>
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