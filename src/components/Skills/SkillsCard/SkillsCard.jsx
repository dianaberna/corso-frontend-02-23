import React from 'react';
import './SkillsCard.css';

const SkillsCard = ({title, description, icon, onClick}) => {
    return (
        <div className="Card" onClick={onClick}>
            <i class={icon}></i>
            <h3 className="card-title">{title}</h3>
            <p className="card-desc">{description}</p>
        </div>
    );
}

export default SkillsCard;