import React from 'react';

const UsersData = ({props}) => {
   const {name} = props;
   return (
      <div>
         <h1>name : {name}</h1>
      </div>
   );
};

export default UsersData;