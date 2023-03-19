import React from 'react';
import { getPAgesArray } from '../../../utils/pages';

const Pagination = ({totalPages, page, changePage}) => {

    let pagesArray = getPAgesArray(totalPages)


    return (
        
        <div className="page__wrapper">
            {pagesArray.map(p => 
            <span
            onClick={() => changePage(p)}
            key={p} 
            className={page === p ? 'page page__current' : 'page'}>{p}</span>
            )}
        </div>
       
    );
};

export default Pagination;