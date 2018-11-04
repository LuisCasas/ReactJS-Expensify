import React from 'react';

const ExpenseItem = ({description, amount, createdAt}) => (
    <div>
        <p>Description: {description}</p>
        <p>Amount: {amount} - Created at: {createdAt}</p>
    </div>
);

export default ExpenseItem;