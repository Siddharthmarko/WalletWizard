import { Category } from "../component/compo/utils";

export function setChartLevel(data){
    const ChartLavel = data ? data.map(({ amount, category, type }) => {
        // issue: if category, amount, type is null 
        const selectedMethod = Category.find(item => item.value === Number(category));
        // console.log("this is selected method",selectedMethod);
        var data = {
            value: Number(amount),
            color: selectedMethod.type,
            type: type,
            category: Number(category),
            label: selectedMethod.label
        };

        return type === 0 ? data : {};
    }) : [];

    return ChartLavel;
}
export function setOutputArray(ChartLavel){
    const outputArray = ChartLavel[0] ? ChartLavel.reduce((accumulator, currentValue) => {
        const category = currentValue.category;
        const value = currentValue.value;
        const color = currentValue.color;
        const label = currentValue.label;
        const index = accumulator.findIndex((element) => element.category === category);

        if (index === -1) {
            accumulator.push({ category: category, value: value, color: color, label: label });
        } else {
            accumulator[index].value += value;
        }
        return accumulator;
    }, []) : []

    return outputArray;
}

export function details(outputArray){
    const Details = outputArray[0] ? outputArray.map((e, i) => {
        const data = {
            ...e, id: i
        }
        return data
    }) : []
    return details;
}
export function result(){
    const result = updatedObj.reduce((acc, cur) => {
        if (cur.type === 1) {
            acc.profit.push(cur);
        } else {
            acc.loss.push(cur);
        }
        return acc;
    }, { profit: [], loss: [] });
    return result;
}