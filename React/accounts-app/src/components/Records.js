import React, { Component } from 'react';
import Record from './Record';
import * as RecordsAPI from '../utils/RecordsAPI'; //(RecordsAPI.js)
import RecordForm from './RecordForm'; //(RecordsAPI.js)
import AmountBox from './AmountBox'; 

//import $ from 'jquery';
//import {getJSON} from 'jquery';



class Records extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            records: []
        }
    }

    addRecord(record){
        console.log("Records.js addRecord: " + record);
        //renew table
        this.setState({
            error: null,
            isLoaded: true,
            // merge all the existing records with new record
            records: [
                ...this.state.records,
                record
            ]
        })
    }

    updateRecord(record,data){
        const recordIndex = this.state.records.indexOf(record);
        const newRecords = this.state.records.map((item, index) => {
            if(index != recordIndex)
                return item
            else
                return {...item, ...data}
        })
        this.setState({
            records: newRecords
        })
    }

    deleteRecord(record){
        const recordIndex = this.state.records.indexOf(record);
        const newRecords = this.state.records.filter((item, index) => index !== recordIndex)
        this.setState({
            records: newRecords
        })
    }

    credits(){
        let credits = this.state.records.filter( (record) => {
            return record.amount >= 0;
        })
        return credits.reduce((prev, curr) => {
            return prev+ Number.parseInt(curr.amount, 0)
        },0)
    }

    debits(){
        let credits = this.state.records.filter( (record) => {
            return record.amount < 0;
        })
        return credits.reduce((prev, curr) => {
            return prev+ Number.parseInt(curr.amount, 0)
        },0)
    }

    balance(){
        return this.credits() + this.debits();
    }



    render() {
        const { error, isLoaded, records } = this.state;
        if (error) {
            return <div>Error: {error.responseText} </div>
        }
        else if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    <h2>Records</h2>
                    <div className="row mb-3">
                        <AmountBox text="Credits" type="success" amount={this.credits()}/>
                        <AmountBox text="Debits" type="danger" amount={this.debits()}/>
                        <AmountBox text="Balance" type="info" amount={this.balance()}/>
                    </div>
                    <RecordForm handleNewRecord={this.addRecord.bind(this)} />
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Title</th>
                                <th>Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((record, i) => 
                                <Record 
                                    record={record} 
                                    key={record.id} 
                                    handleEditedRecord={this.updateRecord.bind(this)}
                                    handleDeleteRecord={this.deleteRecord.bind(this)}
                                />)}
                            {/* {...record} is the same with id={record.id} date=...
                            or
                            {records.map((record, i) => <Record {...record} key={record.id} handleEditedRecord={this.updateRecord.bind(this)}/>)}
                            or
                            {records.map((record, i) => 
                                <Record id={record.id} 
                                        date={record.date} 
                                        title={record.title} 
                                        amount={record.amount} 
                                        key={record.id} />
                                    )}
                            */}
                        </tbody>
                    </table>
                </div>
            );
        }

    }


    componentDidMount() {
        //console.log(RecordsAPI.api);
        //getJSON("http://5adf0cdebf932f0014d11b77.mockapi.io/api/v1/records").then(
        //getJSON(RecordsAPI.apiRecords).then(
        RecordsAPI.getAllRecords().then(
            response => this.setState({
                records: response,
                isLoaded: true
            }),
            error => this.setState({
                isLoaded: true,
                error  //This is the same with error:error
            })
        )

        //axios.get also can be used
    }

}

export default Records;
