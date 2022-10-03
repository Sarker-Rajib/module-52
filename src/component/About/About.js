import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UsersData from '../UsersData/UsersData';

const About = () => {
   const data = useLoaderData();
   return (
      <div>
         <h1 className="text-5xl">This is About</h1>
         {
            data.map(user => <UsersData
            key={user.id}
            props={user}
            ></UsersData>)
         }
      </div>
   );
};

export default About;