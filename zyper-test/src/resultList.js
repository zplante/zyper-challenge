import React,{Component} from 'react';
import FlatList from 'flatlist-react';
import Result from './result.js';
/*
  ResultList Component for displaying one or more results from the API.
  Utilizes the Result and FlatList Component

  Used By:
      App.js
  Props:
      results - and object array containing all the response 
          from the API returned by the API
      jobFailed - boolean value saying if there was an error when contacting the API,
          making the job to fail and display a failure message
      jobPending - boolean value to denote if a job is currently being worked on,
          displays a waiting message if its true
*/

class ResultList extends Component {
  constructor(props) {
    super(props);
  }
  //renders the card that the result appears in, 
  //and passes relevant information to the component
  renderResult(result) {
    return(
      <div className="card custom-card"  >
        <div className ="card-body">
          <Result data={result.output}/>
        </div>
      </div>
    );
  }

  render() {
    if(this.props.jobFailed){
      return(
        <div>
          <h5 className="result-padding">RESULTS</h5>
          <hr className="line-padding"/>
          <h5 className="error-padding">An Error Occured, Please Try Again</h5>
        </div>
      );
    }
    else if(this.props.jobPending){
      return(
        <div>
          <h5 className="result-padding">RESULTS</h5>
          <hr className="line-padding"/>
          <h5 className="error-padding">Please Wait...</h5>
        </div>
      );
    }
    else if(this.props.results.length!==0){
      return (
        <div>
          <h5 className="result-padding">RESULTS</h5>
          <hr className="line-padding"/>
            <ul>
              <FlatList list={this.props.results} renderItem={this.renderResult}/>
            </ul>
        </div>
      );
    }else{
      return(
        <div/>
      );
    }
  }
}

export default ResultList;