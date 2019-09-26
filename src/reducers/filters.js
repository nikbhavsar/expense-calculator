import moment from 'moment';

//Filter Reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'TEXT_FILTER':
         return {
             ...state,
             text: action.filterValue
         }

         case 'SORT_BY_DATE':
         return {
             ...state,
             sortBy:action.sortBy
         }
         case 'SORT_BY_AMOUNT':
         return {
            ...state,
            sortBy:action.sortBy
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