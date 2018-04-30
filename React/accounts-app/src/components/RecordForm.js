import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as RecordsAPI from '../utils/RecordsAPI';




class RecordForm extends Component {
    constructor(...args){
        super(...args);
        this.state = {
            date: "",
            title: "",
            amount: "",
        }
    }

    handleChange(event){
        let name = event.target.name;
        let obj;
        this.setState((
            obj ={},
            obj["" + name] = event.target.value,
            obj
        ))
        
    }

    validButton(){
        return this.state.date && this.state.title && this.state.amount;
    }

    handleSubmit(event){
        event.preventDefault();
        const data = {
            date: this.state.date,
            title: this.state.title,
            amount: Number.parseInt(this.state.amount, 0)
        }
        RecordsAPI.createRecord(data).then(
            (response) => {
                console.log(response.data);
                this.props.handleNewRecord(response.data);
                //empty from input data
                this.setState({
                    date: "",
                    title: "",
                    amount: "",
                });
            }
        ).catch(
            (error) => {console.log(error.message)}
        )
    }

    render() {
        return (
            <form action="" className="form-inline mb-3" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group mr-1">
                    <input type="text" className="form-contol" onChange={this.handleChange.bind(this)} placeholder="Date" name="date" value={this.state.date} />
                </div>
                <div className="form-group mr-1">
                    <input type="text" className="form-contol" onChange={this.handleChange.bind(this)} placeholder="Title" name="title" value={this.state.title}/>
                </div>
                <div className="form-group mr-1">
                    <input type="text" className="form-contol" onChange={this.handleChange.bind(this)} placeholder="Amount" name="amount" value={this.state.amount}/>
                </div>
                <button className="btn btn-primary" disabled={!this.validButton()}>Create Record</button>
                {/*- here validButton followed by bracket, because it will be executed, not passed --*/}
            </form>
        );
    }
}

export default RecordForm;


RecordForm.propTypes ={
    //id:PropTypes.number,
    date:PropTypes.string,
    title:PropTypes.string,
    amount:PropTypes.number,

}