import React, { Component } from 'react'
import {connect} from "react-redux";



 class Counter extends React.Component {



    render() {
        return (
            <div>
                Counter : {this.state.counter}
                <br/><br/>
                <button onClick={this.increament}> + </button>
                <button onClick={this.decreament}> - </button>

            </div>
        )
    }
}

const mapStateToProps = (state)=> {
 return {
     counter:state.counter
 }

};


export default connect(mapStateToProps)(Counter);