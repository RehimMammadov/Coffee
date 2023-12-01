import { createContext, useState } from "react";


export const searchContext = createContext()

function SearchProvider({children}) {
    const [inputValue, setInputValue] = useState('')
    const [category, setCategory] = useState('All')

    const data = {
        inputValue,
        setInputValue,
        category,
        setCategory
    }
    return (
        <searchContext.Provider value={data}>
            {children}
        </searchContext.Provider>
    )
}
export default SearchProvider