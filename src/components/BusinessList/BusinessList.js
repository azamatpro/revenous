import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

function BusinessList({ businesses }) {
  return (
    <div className='BusinessList'>
      {businesses.map((business, i) => (
        <Business key={business.id ? business.id : i} business={business} />
      ))}
    </div>
  );
}

export default BusinessList;
