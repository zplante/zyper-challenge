import React, { Component } from 'react';
import FlatList from 'flatlist-react';

/*
  Individual Results, actually a FlatList of all the information in the JSON

  Used By:
  	resultList.js
  Props:
  	data: the JSON of an individual response, containing either information 
  		about one user or an aggregate of all the users
*/

class Result extends Component{
	constructor(props) {
    	super(props);
    	this.state={
    		stringResult: [],	
    	}
  	}
  	
  	componentDidMount(){
  		this.setState({stringResult: this.convertJSON()})
	}
  	//converts JSON into an Array so the FlatList can utlize it
  	convertJSON(){
  		var result=[];
  		for(var i in this.props.data){
    		result.push(i+": "+this.props.data[i]);
		}
		return result;
  	}
  	//renders an individual line of the result (one key value pair)
  	renderLine(data){
		return(
  			<div className="result-text">
  				{data}
  			</div>
  		);
  	}
  
  	render(){
  		return(
  			<div>
  				<FlatList list={this.state.stringResult} renderItem={this.renderLine}/>
  			</div>
  		);
  	}
}
export default Result;