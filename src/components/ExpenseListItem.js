import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseItem = ({id, description, amount, createdAt, dispatch}) => (
    <div>
        <p>Description: {description}</p>
        <p>Amount: {amount} - Created at: {createdAt}</p>
        <button onClick={(e) => {
            console.log(id);
             dispatch(removeExpense({id}));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseItem);