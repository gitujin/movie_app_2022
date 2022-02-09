import React from 'react';
import propTypes from 'prop-types';

function Movie(){
    return <h1></h1>
}

Movie.propTypes = { 
    id : PropTypes.number.isRequired,
    year : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
};

export default Movie;
