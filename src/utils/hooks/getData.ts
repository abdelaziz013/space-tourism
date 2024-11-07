import React from "react"
const useGetData = <T>(data: Array<T>) => {
    const [itemData, setItemData] = React.useState(data[0])
    const getItemData = React.useCallback((i: number) => {
        setItemData(data[i])
    }, [data])
    return { getItemData, itemData }
}
export default useGetData