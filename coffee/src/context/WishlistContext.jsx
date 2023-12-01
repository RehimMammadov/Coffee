import { createContext, useState } from "react";



export const wishlistContext = createContext()

function WishlistPovider({children}) {
    const [favs, setFavs] = useState([])
    const data = {
        favs,
        setFavs
    }

    return (
        <wishlistContext.Provider value={data}>
            {children}
        </wishlistContext.Provider>
    )
}

export default WishlistPovider