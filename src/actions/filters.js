export const setTextFilter = (filterValue = '') => ({
    type: 'TEXT_FILTER',
    filterValue
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy:'date'
});

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy:'amount'
});

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
