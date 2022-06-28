import React from 'react';
import EachUser from './EachUser';

const Users = (props) => {    
    return (
      <div>
       <tr className='table-row'>
        <h2>Student List</h2>
            {/* <th>
              <td className='table-data'>Name</td>
              <td className='table-data'>Gen</td>
              <td className='table-data'>Status</td>
            </th> */} 
       </tr>
            {props.persons.map((item)=>
            { return( <div key={item.id}>
                        <EachUser user={item} delete={props.delete} edit={props.edit}/>
                    </div>
                 )
            })            
            }
        </div>
    );
}

export default Users;
