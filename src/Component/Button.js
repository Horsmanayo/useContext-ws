import { ThemeContextConsumer } from "./ThemeContext"
import React from "react"


const Button = () => {
    return (
        <ThemeContextConsumer>
            {context => (
                <button 
                    className={`${context.theme}-theme`}
                    onClick={context.toggle}
                >Toggle Theme</button>
            )}
        </ThemeContextConsumer>
    )
}


export default Button 