import React, { Component } from 'react';
import './livesearch.css';
import CharList from './charlist';
import SearchForm from './searchform';

class LiveSearch extends Component {
constructor(props){
  super(props);
this.state = {
  characters : this.props.chars,
  search : ''

};
}
searchfilter(word){
  this.setState({search: word});
};

render(){
  return (<div>
    <SearchForm  search={e=>this.searchfilter(e)} />
    <CharList chars={this.state.characters} filter={this.state.search}/>
  </div>);
}
}
export default LiveSearch;
