import { Table, Modal, Drawer } from "antd";
import Header from "./header";
import CashFlow from "./cashFlowHead";
import { useState } from "react";
import getMainColumn from "./compo/mainTable";
import { useData } from "../context/context";
import AddExpense from "./drawer/AddExpense";
import AddType from "./drawer/AddType";
import TopCharts from "./modal/TopCharts";
import Trash from "./modal/Trash";
import Update from "./modal/Update";

export default function Home(){
    const {state, dispatcher} = useData();
    const [data, setData] = useState([]); // by fetching
    const columns = getMainColumn();
    
    function handleOk(){
        dispatcher({type: 'update', id: null});
        dispatcher({ type: 'closeAll' });
        // console.log(state);
    }
    function handleDeleteModal(){
        dispatcher({ type: 'isisDeleteModal'});
    }

    return (
        <>
          <Header/>
          <CashFlow/>
            <div className='px-4' >
                <Table
                    scroll={{y: '65vh'}}
                    bordered
                    columns={columns}
                    loading={state.loading}
                    dataSource={data}
                    size='small'
                    className='shadow-sm bg-white'
                    pagination={{
                        position: ["bottomCenter"],
                    }} />
            </div>
            <Drawer
                title="Add Expense"
                placement={"right"}
                closable={false}
                onClose={handleOk}
                open={state.isModal}
                key={'add-expense-drawer'}
            >
                <AddExpense handleOk={handleOk} typeData={state.typeData} />
            </Drawer>
            <Drawer
                title="Payment To "
                placement={"right"}
                closable={false}
                onClose={handleOk}
                open={state.isType}
                key={'payment-to-drawer'}
            >
                <AddType handleOk={handleOk} />
            </Drawer>
            <Modal
                title="Expense View"
                footer={null}
                open={state.isPay}
                onCancel={handleOk}
                width="700px"
            >
                <TopCharts/>
            </Modal>
            <Modal 
                title="Delete"
                open={state.isDeleteModal}
                onOk={handleDeleteModal}
                onCancel={handleDeleteModal}
            >
                <span className='text-danger fs-6'>
                    Are you sure to delete
                </span>
            </Modal>
            <Drawer
                placement={"bottom"}
                closable={false}
                onClose={() => dispatcher({ type: 'trashData'})}
                open={state.trashData}
                key={'bottom'}
            >   
                <Trash value={state.trashData} />
            </Drawer>
            <Modal 
                title="Update Expense" 
                open={state.update}
                footer={null}
                onCancel={handleOk}
            >   
                <Update handleOk={handleOk} id={state.update} />
            </Modal>
        </>
    )
}