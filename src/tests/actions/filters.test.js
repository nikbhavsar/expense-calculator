import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';
import moment from 'moment';

test('shoul generate start date', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({

        type: 'SET_START_DATE',
        startDate: moment(0)

    });
});

test('should generate end date', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({

        type: 'SET_END_DATE',
        endDate: moment(0)

    });
});

test('set the text filter value', ()=>{
    const action = setTextFilter('abc');
    expect(action).toEqual({

        type:'TEXT_FILTER',
        filterValue: 'abc'

    });
});

test('should display sort by amount', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({

        type:'SORT_BY_AMOUNT',
        sortBy:'amount'

    });
});

test('should display sort by Date', ()=>{
    const action = sortByDate();
    expect(action).toEqual({

        type:'SORT_BY_DATE',
        sortBy:'date'

    });
});