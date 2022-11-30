import { useEffect } from "react"

const UseTitle = title => {
    useEffect(()=> {
    document.title=`${title} Ariful`
    },[title])
}
export default UseTitle;