import React from 'react';

const Pagination = ({prevOnClick, nextOnClick}) => {
    return (
        <div class="pagination">
        <button class="prev" onClick={prevOnClick}>
          PREVIOUS
        </button>
        <button class="next" onClick={nextOnClick}>
          NEXT
        </button>
      </div>
    );
};

export default Pagination;