import React from "react"
import { ThemeContextConsumer } from "./ThemeContext"


const Header =()=> {
    return (
        <ThemeContextConsumer>
            {context => (
                <h1 className={`${context.theme}-theme`}>{context.theme} theme</h1>
            )}
        </ThemeContextConsumer>
    )
}

export default Header 