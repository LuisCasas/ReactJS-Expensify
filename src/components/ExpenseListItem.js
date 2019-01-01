import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`} >Edit</Link>
        <p>Description: {description}</p>
        <p>Amount: 
            {numeral(amount / 100).format('$0,0.00')} 
            - 
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

export default ExpenseItem;
