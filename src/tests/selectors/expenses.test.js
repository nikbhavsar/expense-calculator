import selectExpenses from '../../selectors/expenses';

const expenses = [{
    id:'1',
    description:'gume',
    note:'',
    amount:200,
    createdAt:0
},
{
    id:'2',
    description:'chocoelat',
    note:'',
    amount:400,
    createdAt:1000
},
{
    id:'3',
    description:'popc',
    note:'',
    amount:400,
    createdAt:-1000
}];

test('should filter by text value', ()=> {

    const filters = {
        text: 'c',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses,filters);

    expect(result).toEqual([expenses[1],expenses[2]]);

});

test('shuld be filte by no value', ()=> {
    const filters = {
        text:'',
        sortBy:'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses,filters);

    expect(result).toEqual([expenses[1],expenses[0],expenses[2]]);
})