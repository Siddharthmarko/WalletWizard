import { Col, Row, Button, Table, Modal, Drawer } from "antd";
import { ArrowDownOutlined } from '@ant-design/icons';
import { useData } from "../context/context";

export default function CashFlow(){
    const {state} = useData();
    return (
        <>
            <div className='p-4 '>
                <Row gutter={[16]} >
                    <Col style={{ width: "200px" }}>
                        <div className='bg-white rounded-1 shadow-sm py-2 px-4 fs-4' style={{ color: "#16db65" }}>
                            <div style={{ color: "gray", fontSize: "14px" }}>
                                Income
                            </div>
                            + {state.profit} ₹

                        </div>
                    </Col>
                    <Col style={{ width: "200px" }}>
                        <div className='bg-white rounded-1 shadow-sm py-2 px-4 fs-4 text-danger'>
                            <div style={{ color: "gray", fontSize: "14px" }}>
                                Expense
                            </div>
                            - {state.expense} ₹
                        </div>
                    </Col>
                    <Col style={{ width: "200px" }}>
                        <div className='bg-white rounded-1 shadow-sm py-2 px-4 fs-4'>
                            <div style={{ color: "gray", fontSize: "14px" }}>
                                Average
                            </div>
                            {state.Profit > state.Expense ?
                                <span className='text-primary'>
                                    {state.profit - state.expense}
                                </span>
                                :
                                <span className='text-danger'>
                                    -{state.expense - state.profit} <ArrowDownOutlined />
                                </span>
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}