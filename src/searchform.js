import React from 'react';

export default function SearchForm(props){
return (<form onSubmit={e=>e.preventDefault()}><label htmlFor="in">Search</label>
<input id="in" name="in" placeholder="search for a character.." onChange={e=>props.search(e.target.value)}>
</input>
</form>);

};