import React from 'react';


export default function CharList(props){
//props.filter is the search word
const characterList = props.chars.map((character, index) =>{
       return (
      <li key={index}>
      <strong>{character.name}</strong> played by: <strong>{character.actor}</strong>:{character.description}
      </li>
      );
    });
return (<ol>{characterList}</ol>);
}