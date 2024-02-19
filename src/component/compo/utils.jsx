import { PiMoneyLight } from "react-icons/pi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoCard } from "react-icons/io5";
import { HiOutlineRefresh } from "react-icons/hi";
import { CiGlobe } from "react-icons/ci";

export const Method = [
    {
        value: 1,
        label: "CASH",
        icon: <PiMoneyLight />,
    },
    {
        value: 2,
        label: "UPI",
        icon: <HiOutlineStatusOnline />,
    },
    {
        value: 3,
        label: "DEBIT CARD",
        icon: <IoCard />,
    },
    {
        value: 4,
        label: "CREDIT CARD",
        icon: <IoCard />,
    },
    {
        value: 5,
        label: "AUTO DEBIT",
        icon: <HiOutlineRefresh />,
    },
    {
        value: 6,
        label: "Other",
        icon: <PiMoneyLight />,
    },
];

export const Category = [
    {
        id: 1,
        value: 1,
        label: "Buy",
        action: "#3772ff",
        type: "#3772ff",
        icon: <PiMoneyLight />,
    },
    {
        id: 1,
        value: 2,
        label: "Sell",
        action: "#df2935",
        type: "#16db65",
        icon: <HiOutlineStatusOnline />,
    },
    {
        id: 3,
        value: 3,
        type: "#5F00BA",
        action: "ff9e00",
        label: "Investment",
        icon: <IoCard />,
    },
    {
        id: 14,
        value: 14,
        action: "#3772ff",
        type: "#df2935",
        label: "Profit",
        icon: <IoCard />,
    },
    {
        id: 4,
        value: 4,
        action: "#3772ff",
        type: "#df2935",
        label: "loss",
        icon: <IoCard />,
    },
    {
        id: 5,
        value: 5,
        action: "#3772ff",
        type: "#df2935",
        label: "Emi",
        icon: <HiOutlineRefresh />,
    },
    {
        id: 6,
        value: 6,
        action: "#3772ff",
        type: "#20FC8F",
        label: "Trade Loss",
        icon: <CiGlobe />,
    },
    {
        id: 7,
        value: 7,
        action: "#df2935",
        type: "#16db65",
        label: "Trade Profit",
        icon: <PiMoneyLight />,
    },
    {
        id: 8,
        value: 8,
        action: "#3772ff",
        type: "#fdca40",
        label: "Recharge",
        icon: <PiMoneyLight />,
    },
    {
        id: 9,
        value: 9,
        action: "#3772ff",
        type: "#5bba6f",
        label: "Daliy Needs",
        icon: <PiMoneyLight />,
    },
    {
        id: 10,
        value: 10,
        action: "#3772ff",
        type: "#20FC8F",
        label: "Extra",
        icon: <PiMoneyLight />,
    },
    {
        id: 11,
        value: 11,
        action: "ff9e00",
        type: "#df2935",
        label: "Borrow",
        icon: <IoCard />,
    },
    {
        id: 12,
        value: 12,
        action: "ff9e00",
        type: "#df2935",
        label: "Rent",
        icon: <IoCard />,
    },
    {
        id: 13,
        value: 13,
        action: "ff9e00",
        type: "#df2935",
        label: "Income",
        icon: <IoCard />,
    }
];