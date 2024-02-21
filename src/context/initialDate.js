import dayjs from "dayjs"
export const dummyDates = {
    "startDate": dayjs().startOf('month').format('YYYY-MM-DD'),
    "endDate": dayjs().endOf('month').format('YYYY-MM-DD')
}
export const initially = {
    loading: false,
    isModal: false,
    isType: false,
    isPay: false,
    trashData: false,
    isDeleteModal: false,
    profit: 0,
    expense: 0,
    datefilter: { ...dummyDates },
    calculate: { "Profit": 0, "Expense": 0 },
    update: null,
    typeData: [],
    data:[],
    detail: [],
    updateState: false,
}