

import axios from "axios";
export const apiBaseUrl = process.env.REACT_APP_BASE_URL_LOGIN;

export const apiAuthToken = process.env.REACT_APP_BASE_URL_REQUEST;


export const publicRequest = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        "Content-Type": "application/json",
    }
});


export const userRequest = axios.create({
    baseURL: apiAuthToken,
});


export const setHeaderToken = (token) => {
    userRequest.defaults.headers.Authorization = `Bearer ${token}`
};

const token = JSON.parse(localStorage.getItem("user"))?.access;


if (token) {
    setHeaderToken(token)
}