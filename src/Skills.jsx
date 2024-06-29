import React from 'react';
import Skill from './Skill';

function Skills() {
    var skill=[
        {title:"WebDev", Description:"hella amigo", color:"#323238"},
        {title:"Video Editing", Description:"hella amigo", color:"#FBC92B"},
        {title:"Graphic Designing", Description:"hella amigo", color:"#CC0000"},
        {title:"Photography", Description:"hella amigo", color:"#0740AA"},
        {title:"Sketching", Description:"hella amigo", color:"#323238"}
    ]
  return (
    <>
    {skill.map((val,index)=><Skill val={val}/>)}

    </>
  )
}

export default Skills;
