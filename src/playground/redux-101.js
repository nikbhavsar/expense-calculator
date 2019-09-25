import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_ACTION

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0 } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id} = {}) => ({
type: 'REMOVE_EXPENSE',
id
});

const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
})

//expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ]
        case 'REMOVE_EXPENSE':
        return state.filter(({id}) => id !== action.id)
        case 'EDIT_EXPENSE':
        return state.map((expense) => {

            if(expense.id === action.id){
               return{
                   ...expense,
                   ...action.updates
               }
            } else{
                return expense;
            }

        })
        default:
            return state;
    }
};

//Filter Actions


const setTextFilter = (filterValue = '') => {
    type: 'TEXT_FILTER',
    filterValue
};

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    date
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    date
});

const getVisibleExpenses = (expenses, { text , sortBy , startDate , endDate}) =>{
 return expenses.filter((expense) => {
  const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
  const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
  const textMatch  = expense.description.toLowerCase().includes(text.toLowerCase());

  return startDateMatch && endDateMatch && textMatch;
 }).sort((a,b) => {

    if(sortBy === 'date'){
        return a.createdAt < b.createdAt ? 1:-1;
    } else if(sortBy === 'amount'){
        return a.amount < b.amount ? 1:-1;
    }

 });

};

//Filter Reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'TEXT_FILTER':
         return {
             ...state,
             text: action.text
         }

         case 'SORT_BY_DATE':
         return {
             ...state,
             sortBy:'date'
         }
         case 'SORT_BY_AMOUNT':
         return {
            ...state,
            sortBy:'amount'
        }

        case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate
        }

        case 'SET_END_DATE': 
        return {
            ...state,
            endDate: action.endDate
        }
        
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() =>{
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description:'Rent',amount:65000}));
const expenseTwo = store.dispatch(addExpense({description:'coffee',amount:250}));

state.dispatch(removeExpense({id: expenseOne.expense.id}));

state.dispatch(editExpense(expenseTwo.expense.id, {amount:200}));

state.dispatch(setTextFilter('rent'));


const demoState = {
    expenses: [{
        id: 'Nikhar',
        description: 'rent',
        note: 'This was the final amount.',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

