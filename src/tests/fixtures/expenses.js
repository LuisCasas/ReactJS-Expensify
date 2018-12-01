import moment from 'moment';

export default [{
    id: '1',
    description: 'Mario Bros',
    amount: 30,
    note: '',
    createdAt: 0
}, {
    id: '2',
    description: 'Battletoads',
    amount: 40,
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Metroid',
    amount: 60,
    note: '',
    createdAt: moment(0).add(4, 'days').valueOf()
}];