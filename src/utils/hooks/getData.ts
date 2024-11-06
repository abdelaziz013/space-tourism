import React from "react"
const useGetData = <T>(index: number, data: Array<T>) => {
    const [itemData, setItemData] = React.useState(data[index])
    const getItemData = React.useCallback((i: number) => {
        setItemData(data[i])
    }, [data])
    return { getItemData, itemData }
}
export default useGetData