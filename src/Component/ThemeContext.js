import React, { useState } from "react"
const { Provider, Consumer } = React.createContext()

const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState("dark")

    const toggle = ()=> {
        setTheme(theme => theme === "dark" ? "light": "dark")
    }

    return (
        <Provider value={{theme, toggle}}>
            {props.children}
        </Provider>
    )
}
export { ThemeContextProvider, Consumer as ThemeContextConsumer }