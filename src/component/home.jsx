import axios from "axios";
import { Table, Modal, Drawer } from "antd";
import Header from "./header";
import CashFlow from "./cashFlowHead";
import { useState, useEffect } from "react";
import getMainColumn from "./compo/mainTable";
import { useData } from "../context/context";
import AddExpense from "./drawer/AddExpense";
import AddType from "./drawer/AddType";
import Trash from "./modal/Trash";
import {  getExpenseType } from "../context/operation";
import { setResult } from "../context/methods";

const BASE_URL = process.env.BASE_URL;

export default function Home(){
    const {state, dispatcher} = useData();
    const columns = getMainColumn();
    function handleOk(){
        dispatcher({ type: 'closeAll' });
     }

    const fetchData = () => {
        dispatcher({ type: 'loading' });
        getExpenseType(dispatcher);
        axios.post(`${BASE_URL}/expense-data-filter`, state.datefilter)
        .then((res) => {
            const newObj = res.data;
            const updateObj = newObj[0] ? newObj.map((e, i) => {
                const obj = { ...e, "no": i + 1 }
                return obj;
            }) : [];
            const [Profit, Expense] = setResult(updateObj);
            
            dispatcher({ type: 'data', data: updateObj });
            dispatcher({type: 'profit', data: Profit});
            dispatcher({type: 'expense', data: Expense});
            dispatcher({ type: 'loading'});
        }).catch((err) => console.log(err));
    }
    useEffect(() => fetchData(), []);
    useEffect(() => fetchData(), [state.updateState]);
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
                    dataSource={state.data}
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
                <AddExpense handleOk={handleOk} />
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
            <Drawer
                placement={"bottom"}
                closable={false}
                onClose={() => dispatcher({ type: 'trashData'})}
                open={state.trashData}
                key={'bottom'}
            >   
                <Trash value={state.trashData} />
            </Drawer>
        </>
    )
}