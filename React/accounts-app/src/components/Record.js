import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as RecordAPI from '../utils/RecordsAPI';




class Record extends Component {
    constructor(){
        super();
        this.state={
            edit: false,
        }
    }

    edit(){
        this.setState({
            edit: true
        })
    }

    cancelEdit(){
        this.setState({
            edit: false
        })
    }

    update(event){
        event.preventDefault();
        const updatedRecord = {
            date: this.refs.date.value,
            title: this.refs.title.value,
            amount: Number.parseInt(this.refs.amount.value)
        };
        RecordAPI.updateRecord(this.props.record.id, updatedRecord).then(
            response => {
                this.setState({edit:false})
                this.props.handleEditedRecord(this.props.record, response.data)
            }
        ).catch(
            error => console.log(error.message)
        )
    }

    delete(event){
        event.preventDefault();
        RecordAPI.removeRecord(this.props.record.id).then(
            response => {
                this.setState({edit:false})
                this.props.handleDeleteRecord(this.props.record) //just to renew the data for frontend
            }
        ).catch(
            error => console.log(error.message)
        )
    }

    recordRow() {
        return (
            <tr>
                <td>{this.props.record.date}</td>
                <td>{this.props.record.title}</td>
                <td>{this.props.record.amount}</td>
                <td>
                    <button className="btn btn-info mr-1" onClick={this.edit.bind(this)}>Edit</button>
                    <button className="btn btn-danger" onClick={this.delete.bind(this)}>Delete</button>
                </td>
            </tr>
        );
    }

    editableRecordRow(){ 
        return (
            <tr>
                <td><input type="text" className="form-control" defaultValue={this.props.record.date} ref='date'/></td>
                <td><input type="text" className="form-control" defaultValue={this.props.record.title} ref='title'/></td>
                <td><input type="text" className="form-control" defaultValue={this.props.record.amount} ref='amount'/></td>
                <td>
                    <button className="btn btn-info mr-1" onClick={this.update.bind(this)}>Update</button>
                    <button className="btn btn-danger" onClick={this.cancelEdit.bind(this)}>Cancel</button>
                </td>
            </tr>
        );
    }



    render(){
        if(this.state.edit){
            return this.editableRecordRow();
        }
        else{
            return this.recordRow();
        }
    }
}

export default Record;


Record.propTypes = {
    //id:PropTypes.number,
    date: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.number,

}