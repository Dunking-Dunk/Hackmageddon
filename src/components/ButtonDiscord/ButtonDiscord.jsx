import './ButtonDiscord.css'
import React from "react";

const ButtonDiscord = ({ children, onClick }) => {
    return (
        <button className="main__buttonD" onClick={onClick}>
            <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
            </svg>
            <span>{children}</span>
        </button>
    )
}
export default ButtonDiscord
