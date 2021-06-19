import React from 'react';

const SearchMovie = () => {
    return (
        <>
        <div id='content' className='section'>
            <form className='form-control'>
                <label className='form-label'>MOVIE NAME</label>
                <input className='form-input' type="text" name='query' required/>

                <button className='form-button' type='submit'>Search</button>
            </form>
        </div>
        </>
    )
}

export default SearchMovie;
