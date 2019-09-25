import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('should remove expense action object', ()=> {
const action = removeExpense({id:'123abc'});
expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id:'123abc'
});
});

test('should update value of expense',()=>{
    const action = editExpense('123abc',{note:'new Note Value'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note:"new Note Value"
        }
    });
});