export function setResult(updatedObj){
    const result = updatedObj.reduce((acc, cur) => {
        if (cur.type === 1) {
            acc.profit.push(cur);
        } else {
            acc.loss.push(cur);
        }
        return acc;
    }, { profit: [], loss: [] });

    const Profit = result.profit.reduce((acc, cur) => acc + parseInt(cur.amount), 0);
    const Expense = result.loss.reduce((acc, cur) => acc + parseInt(cur.amount), 0);
    
    return [Profit, Expense];
}