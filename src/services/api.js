// eslint-disable prettier/prettier
/* eslint-disable */
import axiosInstance from "@/axios";

export const createOrder = (orderData) => {
  return axiosInstance.post("/orders/add/", orderData);
};

export const getCategories = () => {
  return axiosInstance.get("/categories/");
};
