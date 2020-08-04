import React from 'react'
import { Link } from 'react-router-dom'
import { back, logo } from '../../assets'
import './styles.css'

interface PageHeaderProps {
    text: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({ text, children }) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={back} alt="Voltar"/>
                </Link>
                    <img src={logo} alt="Logo proffy"/>
            </div>
            <div className="header-content">
                <strong>{text}</strong>
                {children}
            </div>
        </header>
    )
}