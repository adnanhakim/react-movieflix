import React from 'react';
import './MoreDetailsCard.css';

function MoreDetailsCard({ header, content }) {
   return (
      <div className="more-details-card">
         <div className="more-details-header title">{header}</div>
         <div className="more-details-content">{content}</div>
      </div>
   );
}

export default MoreDetailsCard;
