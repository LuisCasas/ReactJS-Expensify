import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseItem = ({id, description, amount, createdAt, dispatch}) => (
    <div>
        <Link to={`/edit/${id}`} >Edit</Link>
        <p>Description: {description}</p>
        <p>Amount: {amount} - Created at: {createdAt}</p>
    </div>
);

export default ExpenseItem;