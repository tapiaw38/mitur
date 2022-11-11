import moment from 'moment';

const formatDate = (date) => {
    if (date == null) {
        return '';
    }
    return moment(date).format('DD/MM/YYYY');
};

export { formatDate };
