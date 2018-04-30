import React, { Component } from 'react';
import Record from './Record';
import RecordForm from './RecordForm';
import * as RecordsAPI from '../utils/RecordsAPI'; //(RecordsAPI.js)


class AmountBox extends Component {

    constructor(){
        super();
    }

    render(){
        return(
            <div className="col">
                <div className="card">
                    <div className={`card-header bg-${this.props.type} text-white`}>
                        {this.props.text}
                    </div>
                    <div className="card-body">
                        {this.props.amount}
                    </div>
                </div>
            </div>
        )
        

       
    
    }



}
export default AmountBox;