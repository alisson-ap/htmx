
import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';


const Get = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
          const jsonData = await response.json();
          setData([jsonData]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>API Data</h1>
        <ul>
          {data.map((item) => (
            <>
        
            <li>id: {item.id}</li>
            <li>title: {item.title} </li>
            <li>body {item.body} </li>
            </>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Get;
  
  
  
  
  