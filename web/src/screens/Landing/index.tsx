import React from 'react'
import { logo, landing, study, giveClasses, purpleHeart } from '../../assets'
import './styles.css'
import { Link } from 'react-router-dom'

export const Landing: React.FC = () => {
    return (
       <div id="page-landing">
           <div id="page-landing-content" className="container">
               <div className="logo-container">
                   <img src={logo} alt="logo-proffy"/>
                   <h2>Sua plataforma de estudos online</h2>
               </div>
               <img src={landing} alt="Plataforma de estudos" className="hero-image"/>

               <div className="buttons-container">
                   <Link to="/study" className="study">
                       <img src={study} alt="Estudar"/>
                       Estudar
                   </Link>
                   <Link to="/give-classes" className="give-classes">
                       <img src={giveClasses} alt="Dar aulas"/>
                       Dar aulas
                   </Link>
               </div>
               <span className="total-connections">
                   Total de 100 conexões já realizadas
                   <img src={purpleHeart} alt="Coração roxo"/>
               </span>
           </div>
       </div>
    )
}