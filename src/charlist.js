import React from 'react';


export default function CharList(props){
//props.filter is the search word
let characterList = [];
if(props.filter.length > 0){
    props.chars.forEach(object=>{
        if(object.name.toLowerCase().includes(props.filter.toLowerCase())){
            characterList.push(object);
        }
    });
} else {
    characterList = props.chars;
}
characterList = characterList.map((character, index) =>{
       return (
      <li key={index}>
      <strong>{character.name}</strong> played by: <strong>{character.actor}</strong>:{character.description}
      </li>
      );
    });
return (<ol>{characterList}</ol>);
}