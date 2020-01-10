import React, { Component } from 'react';
import ResultList from './resultList.js';
import "./main.css";
const axios = require('axios');
/*
  The Main Page for the Instagram Engagment App
  Used By:
      None
  Props:
      None
*/
  class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      individual: false,
      jobId: "",
      jobResult: [],
      jobFailed: false,
      jobPending:false,
    }
    this.handleTextChange=this.handleTextChange.bind(this);
    this.handleCheckboxChange=this.handleCheckboxChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.checkState=this.checkState.bind(this);
    this.getResults=this.getResults.bind(this);

  }
  //saves whatever text is inputed into the state
  handleTextChange(event) {
    this.setState({textValue: event.target.value});
  }
  //saves what mode the individual checkbox is on into the state
  handleCheckboxChange(){
    var newIndiv = !(this.state.individual);
    this.setState({individual: newIndiv})
  }
  //sends relevant information to the API
  handleClick(){
    this.setState({jobFailed: false,jobPending:true});
    if(this.state.textValue!==""){
      this.setState({jobResult:[]});
      if(this.state.individual===true){
        var data = {"username": this.state.textValue,"individual":true};
      }else{
        var data = {"username": this.state.textValue};
      }
      axios.post("https://fe-test-zyper-engagement.herokuapp.com/start",data)
        .then((response) =>{
          var jobId = response.data;
          this.setState({jobId: jobId});
          this.getResults(jobId);
        })
        .catch((error) =>{
          console.log(error);
          this.setState({jobFailed:true,jobPending:false});
        });
      }
    }
    //gets the result, if its not ready it checks every second   
    getResults(jobId){
      axios.get("https://fe-test-zyper-engagement.herokuapp.com/results/"+jobId)
        .then((response) =>{
          if(response.status===200){
            this.setState({jobPending: false, jobResult: response.data});
          }
          else if (response.status===202){
            setTimeout(this.getResults,1000,jobId);
          }
        })
        .catch((error)=>{
          console.log(error);
          this.setState({jobFailed:true,jobPending:false});
        });
      }
    //function used for testing, outputs the current state
    checkState(){
      console.log(this.state);
    }

    render() {
      return (
        <div>
          <div className="headline">
            <p className="headline-text">
            Zyper Frontend Interview Challenge - Instagram Engagement Tool
            </p>
            <p className="headline-text">
            By Zachary Plante
            </p>
          </div>
          <div className="left-aligned-page">
            <h5>Enter Instagram Users</h5>
            <textarea
              className="big-text-box"
              onChange={this.handleTextChange}
              />
            <br/>
            <input
              type="checkbox"
              checked={this.state.individual}
              onChange={this.handleCheckboxChange}
              />
            <span className="individual">Individual</span>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleClick}
              >
              Submit
              </button>
              <br/>
              <ResultList jobFailed= {this.state.jobFailed}
                jobPending= {this.state.jobPending}
                results= {this.state.jobResult}/>
          </div>
        </div>
      );
    }
  }
export default App;
