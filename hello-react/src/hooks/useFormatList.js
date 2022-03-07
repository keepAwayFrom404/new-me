import { useMemo } from "react";

export const useFormatList = (list = []) => {
  return useMemo(() => (list.map(item => {
    console.log('done');
    return item.toUpperCase()
  })), [list])
}