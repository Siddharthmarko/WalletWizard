import React from "react";
import dayjs from "dayjs";
import { DatePicker, Space } from "antd";
import { useData } from "../../context/context";

// working with DatePicker 
const { RangePicker } = DatePicker;

const rangePresets = [
    {
        label: 'Last 7 Days',
        value: [dayjs().add(-7, 'd'), dayjs()],
    },
    {
        label: 'Last 14 Days',
        value: [dayjs().add(-14, 'd'), dayjs()],
    },
    {
        label: 'Last 30 Days',
        value: [dayjs().add(-30, 'd'), dayjs()],
    },
    {
        label: 'Last 90 Days',
        value: [dayjs().add(-90, 'd'), dayjs()],
    },
];

const DateFilter = () => {
    const {state, dispatcher} = useData();
    
    const onRangeChange = (dates, dateStrings) => {
        if (dates) {
            dispatcher({ type: 'datefilter', obj: {
                "startDate": dateStrings[0],
                "endDate": dateStrings[1]
            }} 
            )
            console.log(state.datefilter);
        } 
    };
    return (
        <RangePicker presents={rangePresets} onChange={onRangeChange} />
    )
};
export default DateFilter;