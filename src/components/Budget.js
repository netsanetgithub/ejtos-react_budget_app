import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,currency ,dispatch,expenses} = useContext(AppContext);
   
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);

        if(event.target.value > 20000) {
            alert("The value cannot exceed 20000");
            console.log("hi");
            setNewBudget(totalExpenses);
            
            
        }else{

            if(event.target.value<totalExpenses){
                alert("You can not reduce the budget value lower than the spending");
                setNewBudget(totalExpenses);
                dispatch({ type: 'SET_BUDGET', payload: totalExpenses });
            }else{
            setNewBudget(event.target.value);
            dispatch({ type: 'SET_BUDGET', payload: event.target.value });
        }}
    }



    


    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10"  min='0'  value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;