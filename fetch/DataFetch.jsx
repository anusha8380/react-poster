import React, { useState, useEffect } from 'react';

function MyComponent() {
    // State to store fetched data
    const [data, setData] = useState(null);
  
    // Effect to fetch data when the component mounts
    useEffect(() => {
        setTimeout(()=>{fetchData();},30000)
      
    }, []); // Empty dependency array ensures the effect runs once on mount
  
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Make a GET request using the Fetch API
        const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');
        
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        // Parse the JSON data from the response
        const result = await response.json();
  
        // Update the state with the fetched data
        setData(result);
        
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    // Render the component
    return (
      <div>
        {data ? (
          // Display the fetched data
          <p>{JSON.stringify(data)}</p>
        ) : (
          // Display a loading message or other UI while data is being fetched
          <p>Loading...</p>
        )}
      </div>
    );
  }
  
  export default MyComponent;