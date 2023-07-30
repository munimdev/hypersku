import React from "react";
import axiosInterceptorInstance from "@/app/interceptor";

export const useFetch = (url: string) => {
  return axiosInterceptorInstance.get(url);
};
