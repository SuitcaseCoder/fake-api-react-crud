import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

const Navbar = () => {
    return (
        <div style={{backgroundColor: 'black', color: 'white', padding: '25px 0'}}>
            <ul>
                <li>posts</li>
                <li>about</li>
            </ul>
        </div>
    )
}

export default Navbar