import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filterByName }) => {
    return (
        <div className={css.filter}>
            <label htmlFor="filter">Find contacts by name</label>
            <input type="text" name="filter" id="filter" className={css.filterInput} onChange={filterByName} />
        </div>);
};

Filter.propTypes = {
    filterByName: PropTypes.func.isRequired
};

export default Filter;