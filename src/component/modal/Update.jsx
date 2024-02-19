import React, { useEffect, useState } from 'react'
import { Select, Row, Breadcrumb, Col, Input, DatePicker, InputNumber, Tag, Button, Card, message, Switch } from 'antd';
import axios from 'axios';
import { Method, Category } from '../compo/utils';
import dayjs from 'dayjs';

// import BASE_URL from './url';
const { TextArea } = Input;

const categoryList = Category
const Update = ({ handleOk, id }) => {
    
    const [typeData, setTypeData] = useState([])
    const [formData, setFormData] = useState({
        "date": null,
        "method": null,
        "payto": null,
        "category": null,
        "type": 0,
        "amount": null,
        "description": null,
        "tag": null
    })

    const onClear = () => {
        setFormData({
            "date": null,
            "method": null,
            "payto": null,
            "category": null,
            "amount": null,
            "type": 0,
            "description": null,
            "tag": null
        })
    }


    const onChange = (date, dateString) => setFormData({ ...formData, "date": dateString });

    return (
        <>
            <div className='mt-4'>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <DatePicker
                            value={formData.date ? dayjs(formData.date) : null}
                            onChange={onChange}
                            size="large"
                            style={{ width: "100%" }}
                        />
                    </Col>
                    <Col span={8}>
                        <Select
                            value={formData.method}
                            style={{ width: "100%" }}
                            placeholder="Select Method"
                            showSearch
                            name="method"
                            options={Method}
                            size="large"
                            onChange={(e) => setFormData({ ...formData, "method": e })}
                        />
                    </Col>
                    <Col span={8}>
                        <Select
                            value={formData.payto}
                            placeholder="Select type"
                            size="large"
                            style={{ width: "100%" }}
                            options={typeData}
                            name="payto"
                            onChange={(e) => setFormData({ ...formData, "payto": e })}
                        />
                    </Col>
                    <Col flex="100%">
                        <Row justify="space-between">
                            <Col span={8}>
                                <Select
                                    value={formData.category}
                                    placeholder="Select type"
                                    size="large"
                                    style={{ width: "100%" }}
                                    options={categoryList}
                                    name="category"
                                    onChange={(e) => setFormData({ ...formData, "category": e })}
                                />
                            </Col>
                            <Col className='pt-2'>
                                {Number(formData.type) === 1 ?
                                    <Tag color="#16db65" bordered={false}>Profit</Tag>
                                    :
                                    <Tag color="red" bordered={false}>Expense</Tag>
                                }
                            </Col>
                            <Col>
                                <InputNumber
                                    value={formData.amount}
                                    size="large"
                                    name="amount"
                                    min={1}
                                    max={100000}
                                    defaultValue={3}
                                    onChange={(e) => setFormData({ ...formData, "amount": e })}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col flex="100%">
                        <TextArea
                            value={formData.description}
                            maxLength={100}
                            size="large"
                            name="description"
                            placeholder="Description"
                            onChange={(e) => setFormData({ ...formData, "description": e.target.value })}
                        />
                    </Col>
                    <Col flex="100%">
                        <Row justify="end" gutter={[16, 16]}>
                            <Col>
                                <Button onClick={() => {
                                    onClear()
                                    handleOk()
                                }}>
                                    Cancel
                                </Button>
                            </Col>
                            <Col>
                                <Button type='primary'>
                                    Save
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Update