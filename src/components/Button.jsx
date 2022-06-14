import React from 'react'
import { useStatContext } from '../context/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
    // const { setIsClicked, initialState } = useStatContext();
    return (
        <button
            type="button"
            // onClick={() => setIsClicked(initialState)}
            style={{ backgroundColor: bgColor, color, borderRadius, }}
            className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
        >
            {icon} {text}
        </button>
    )
}

export default Button