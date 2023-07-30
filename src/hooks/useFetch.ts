import React from "react";
import axiosInterceptorInstance from "@/app/interceptor";

type Options = {
  enabled?: boolean;
};

export const useFetch = (url: string, options: Options) => {
  const refetch = (url: string) => axiosInterceptorInstance.get(url);

  return { refetch };
};
