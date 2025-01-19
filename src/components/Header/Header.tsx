import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../../assets/stackline_logo.svg";

export const Header: React.FC = () => (
    <header className="header">
        <div className="logo-container">
            <Logo className="logo" />
        </div>
    </header>
);