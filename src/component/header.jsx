import { Col, Row, Button, Table, Modal, Drawer } from "antd";
import { MdPayment } from "react-icons/md";
import { FaRecycle } from "react-icons/fa";0
import { MdOutlineAddToPhotos } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import DateFilter from "./compo/DateFilter";
import { useData } from "../context/context";

export default function Header(){
    // remote state from here
    const {state, dispatcher} = useData();
        // console.log(state);
    return (
        <>
            <Row className='myNavbar px-5 shadow-md' justify="space-between" >
                <Col span={8} className="logoStyle" >
                    Cash
                </Col>
                <Col>
                    <Row justify="end" style={{ paddingTop: '1px' }} gutter={[16, 16]}>
                        <Col>
                            <DateFilter/>
                        </Col>
                        <Col>
                            <Button onClick={() => dispatcher({ type: 'isModal'})} type='primary' className='fw-semibold' shape='circle' >
                                <MdOutlineAddToPhotos className='fs-5' />
                            </Button>
                        </Col>
                        <Col>
                            <Button onClick={() => dispatcher({ type: 'isType'})} type="primary" className='fw-semibold' shape='circle' style={{ background: "#ff0054" }} >
                                <MdPayment className="fs-5" />
                            </Button>
                        </Col>
                        <Col>
                            <Button onClick={() => dispatcher({ type: 'isPay'})} type="primary" className='fw-semibold' shape='circle' style={{ background: "#7b2cbf" }} >
                                <FaChartLine className='fs-5' />
                            </Button>
                        </Col>
                        <Col>
                            <Button onClick={() => dispatcher({ type: 'trashData'})} type="primary" className='fw-semibold' shape='circle' style={{ background: "#ffc300" }}>
                                <FaRecycle className='fs-5' />
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}