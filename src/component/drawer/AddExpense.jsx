import React, { useEffect, useState } from 'react'
import { Select, Switch, Row, Breadcrumb, Col, Input, DatePicker, InputNumber, Button, Card, message } from 'antd';
import { Method, Category } from '../compo/utils';
import dayjs from 'dayjs';
import { useData } from '../../context/context';
import { submitExpensedata } from '../../context/operation';

const { TextArea } = Input;
const dummyData = { "date": null, "method": null, "payto": null, "category": null, "amount": null, "description": null, "type": 0, "tag": null }

const categoryList = Category

const AddExpense = ({ handleOk, fetch }) => {
    const {state, dispatcher} = useData();
    const [formData, setFormData] = useState(dummyData)
    const onClear = () => {
        setFormData(dummyData)
    }

    const onSubmit = () => {
        submitExpensedata(formData);
        setFormData(dummyData)
        handleOk();
        dispatcher({type: 'updateState'})
    }
    useEffect(() => { }, [formData])
    return (
        <>
            <div>
                <Row gutter={[16, 16]}>
                    <Col className='pt-2' span={12}>
                        Expense
                        <Switch 
                            checked={formData.type === 1 ? true : false} 
                            onChange={(value) => setFormData({ ...formData, "type": value ? 1 : 0 })} 
                            className='mx-2' 
                            style={{ color: "#16db65" }} />
                        Income
                    </Col>
                    <Col span={12} align="end">
                        <InputNumber
                            style={{ width: "100%" }}
                            value={formData.amount}
                            size="large"
                            name="amount"
                            min={1}
                            max={1000000}
                            defaultValue={0}
                            onChange={(e) => setFormData({ ...formData, "amount": e })}
                        />
                    </Col>
                    <Col span={24}>
                        <div style={{ padding: "5px", color: "gray" }}>
                            Date <span className='text-danger'>*</span>
                        </div>
                        <DatePicker
                            value={formData.date ? dayjs(formData.date) : null}
                            onChange={(dateString) => setFormData({ ...formData, "date": dateString })}
                            size="large"
                            style={{ width: "100%" }}
                        />
                    </Col>
                    <Col span={24}>
                        <div style={{ padding: "5px", color: "gray" }}>
                            Payment Method<span className='text-danger'>*</span>
                        </div>
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
                    <Col span={24}>
                        <div style={{ padding: "5px", color: "gray" }}>
                            Payment To / From<span className='text-danger'>*</span>
                        </div>
                        <Select
                            value={formData.payto}
                            placeholder="Select type"
                            size="large"
                            style={{ width: "100%" }}
                            options={state.typeData}
                            name="payto"
                            onChange={(e) => {
                                // console.log(typeData);
                                setFormData({ ...formData, "payto": e })}}
                        />
                    </Col>
                    <Col flex="100%">
                        <Row justify="space-between">
                            <div style={{ padding: "5px", color: "gray" }}>
                                Payment Type <span className='text-danger'>*</span>
                            </div>
                            <Col span={24}>
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
                        </Row>
                    </Col>
                    <Col flex="100%">
                        <div style={{ padding: "5px", color: "gray" }}>
                            Note <span className='text-danger'>*</span>
                        </div>
                        <TextArea
                            value={formData.description}
                            maxLength={100}
                            size="large"
                            name="description"
                            placeholder="Description"
                            onChange={(e) => setFormData({ ...formData, "description": e.target.value })}
                        />
                    </Col>
                    <Col flex="100%" className='mt-4'>
                        <Row justify="end" gutter={[16, 16]}>
                            <Col span={24}>
                                <Button style={{ width: "100%" }} type='primary' onClick={() => onSubmit()} >
                                    Save
                                </Button>
                            </Col>
                            <Col span={24}>
                                <Button style={{ width: "100%" }} onClick={() => {
                                    onClear()
                                    handleOk()
                                }}>
                                    Cancel
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default AddExpense