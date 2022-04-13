import React from 'react';
import sleeping from '../../images/sleeping.png'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is sleeping</h2>
            <img src={sleeping} className='w-100 img-fluid' alt="" />
        </div>
    );
};

export default NotFound;