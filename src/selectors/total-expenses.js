export default(expenses) => {
    return expenses.map((expense)=>expense.amount).reduce((prevExpense,nextExpense) => {
       return  prevExpense + nextExpense;
    },0)
}