import uuid from 'uuid';
import database from '../firebase/firebase.js';


export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//START_REMOVE_EXPENSE

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
      database.ref(`expenses/${id}`).remove().then(()=>{
          dispatch(removeExpense({id}));
      });
    };
};

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//START_EDIT_EXPENSE

export const startEditExpense = (id,updates) => {
  return(dispatch) => {
      return database.ref(`expenses/${id}`).update(updates).then(()=>{
         dispatch(editExpense(id,updates));
      });
  }
};

//SET_EXPENSES
export const setExpenses = (expenses) =>({
   type: 'SET_EXPENSES',
   expenses
});

//START_SET_EXPENSES
export const startSetExpenses = () => {
  return (dispatch) => {

    return database.ref('expenses').once('value').then((snapshot)=>{
    const expenses = [];

    snapshot.forEach((childSnapshot)=>{
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });

    dispatch(setExpenses(expenses));

    });

  };
};

