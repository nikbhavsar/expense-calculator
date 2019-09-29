import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ( {dispatch, id, description, amount , createdAt}) => (
   
   <Link className="item-list" to={`/edit/${id}`} >
   <div>
   <h3 className="list-item__title"> {description} </h3>
   <span className="list-item__sub-title">    {numeral(amount/100).format('$0,0.00')} 
   </span>
   </div>
   <h3 className="list-item__date">    {moment(createdAt).format("MMMM Do YYYY").toString()}
     </h3>
 
    </Link>
    
);


export default ExpenseListItem;