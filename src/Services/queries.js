import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postIndicatorOne } from "./api";

export function usePostIndicator() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (indicatorData) => postIndicatorOne(indicatorData),
    onSuccess: () => {
      console.log("Post Indicator created successfully");
    },
  });
}
