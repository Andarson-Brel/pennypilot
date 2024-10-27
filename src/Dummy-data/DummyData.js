import { v4 as uuidv4 } from "uuid";
export const Onboardingdata = [
  {
    image: "./Assets/Illustrations/onboarding5.svg",
    title: "AI Integrated ",
    description:
      "Let artificial inteligence do the heavy work for you and watch your financial life grow",
  },
  {
    image: "./Assets/Illustrations/onboarding1.svg",
    title: "Gain total control of your money ",
    description: "Become your own money manager and make every cent count",
  },
  {
    image: "./Assets/Illustrations/onboarding2.svg",
    title: "Know where your money goes ",
    description:
      "Track your transaction easily, with categories and financial report",
  },
  {
    image: "./Assets/Illustrations/onboarding3.svg",
    title: "Planning ahead  ",
    description: "Setup your budget for each category so you in control",
  },
];
export const initialNavListItems = [
  {
    id: uuidv4(),
    icon: "./assets/icons/home-active.svg",
    text: "Dashboard",
    path: "/dashboard",
    roles: ["User"],
  },
];

export const history = [
  {
    icon: "heart",
    description: "Payment for shoes",
    category: "Shopping",
    time: "1:22",
    amount: 200,
  },
  {
    icon: "cart",
    description: "Grocery purchase",
    category: "Groceries",
    time: "2:15",
    amount: 50,
  },
  {
    icon: "restaurant",
    description: "Dinner at restaurant",
    category: "Dining",
    time: "7:30",
    amount: 75,
  },
  {
    icon: "car",
    description: "Fuel refill",
    category: "Transportation",
    time: "3:45",
    amount: 40,
  },
  {
    icon: "gift",
    description: "Birthday gift",
    category: "Gifts",
    time: "10:00",
    amount: 150,
  },
];

export const AreaChartsData = [
  {
    date: "Mar 22",
    Apples: 2890,
  },
  {
    date: "Mar 23",
    Apples: 2756,
  },
  {
    date: "Mar 24",
    Apples: 3322,
  },
  {
    date: "Mar 25",
    Apples: 3470,
  },
  {
    date: "Mar 26",
    Apples: 3129,
  },
];

export const colors = [
  {
    base: "#FDD5D7",
    shade: "#FD3C4A",
    category: "Shopping",
  },
  {
    base: "#EEE5FF",
    shade: "#7F3DFF",
    category: "",
  },
  {
    base: "#FCEED4",
    shade: "#FCAC12",
    category: "",
  },
  {
    base: "#CFFAEA",
    shade: "#00A86B",
    category: "",
  },
  {
    base: "#BDDCFF",
    shade: "#0077FF",
    category: "",
  },
  {
    base: "#FFD8C2",
    shade: "#FF6F61",
    category: "",
  },
];
