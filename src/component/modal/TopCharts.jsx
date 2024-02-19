
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useData } from '../../context/context';

const TopCharts = () => {
    const {state } = useData();
    return (

        <div className='px-2'>
            <PieChart
                label={false}
                series={[
                    {
                        data: state.Details || [],
                    },
                ]}
                width={600}
                height={400}
            />
            <div className='fs-6 p-2'>
                Total Expense : ₹ {state.Expense}
            </div>
        </div>
    )
}

export default TopCharts