import axiosInstance from "./axiosInstance";

// axiosInstance

export const postIndicatorOne = async (indicatorFormData) => {
  return await axiosInstance.post(
    "/ioi/c1/make-post-no-of-training-programs-delivered-monitored",
    indicatorFormData
  );
};
