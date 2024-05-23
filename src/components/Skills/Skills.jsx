import React, { useState } from 'react';
import "./Skills.css";
import skills from './data';
import ProgressBar from '../ProgressBar/ProgressBar';
import SkillsCard from './SkillsCard/SkillsCard';

const Skills = () => {

    const [selectedCategory, setSelectedCategory] = useState('hardSkills');
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="Skills">
            
            <h1 className="skills-title">Skills</h1>


            {/* CARDS */}
            <div className="cards-container">
                <SkillsCard 
                            icon={"bx bxs-terminal"} 
                            title={"Hard Skills"} 
                            description={"blbkobkbok"}
                            onClick={()=> handleCategoryChange('hardSkills')}>     
                </SkillsCard>

                <SkillsCard 
                            icon={"bx bxl-spring-boot"} 
                            title={"Soft Skills"} 
                            description={"blbkobkbok"}
                            onClick={()=> handleCategoryChange('softSkills')}>     
                </SkillsCard>
            </div>



            {/* Skills */}
            <div className="skills-container">

                <div className="skills-header">
                    <h3>{selectedCategory === 'hardSkills' ? 'Hard Skills' : 'Soft Skills'}</h3>
                </div>

                <div className="skills-body">

                    {skills[selectedCategory].map((skill, index) =>(
                        <div className="tech-container" key={index}>
                            <div className="tech-header">
                                <strong>{skill.name}</strong>
                                <span>{skill.level}%</span>
                            </div>
                            <div className="tech-body">
                                <i className={skill.icon}></i>
                                <ProgressBar level={skill.level} maxLevel={100}></ProgressBar>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default Skills;