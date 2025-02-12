import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
    label: "string";
    to: "string";
}

const Button: React.FC<ButtonProps> = ({ label, to}) => {
    return (
        <Link to={to} className="button">
            {label}
        </Link>
    )
    
};

export default Button;
