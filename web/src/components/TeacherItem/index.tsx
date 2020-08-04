import React from 'react'
import { whatsapp } from '../../assets'
import './styles.css'

export const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/37668315?s=460&u=318702ad41f981c46b5c89ee4d2bb4e28160a1e4&v=4" alt="Vitoria Tenorio"/>
            <div>
                <strong>Vitória Tenório</strong>
                <span>Quimica</span>
            </div>
        </header>

        <p>Lorem ipsum</p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 70,00</strong>
            </p>
            <button>
                <img src={whatsapp} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>      
    </article>
    )
}