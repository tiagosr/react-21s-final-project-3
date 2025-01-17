import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetailsPage() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `https://redi-final-restaurants.herokuapp.com/restaurants`
      );
      const details = await response.json();

      console.log(details.results.find((restaurant) => restaurant.id === id));
      setDetails(details.results.find((restaurant) => restaurant.id === id));
    };
    fetchDetails();
  }, [id]);

  return (
    <div className="detailsPage">
      <h1>Details page</h1>
      <h1>{details.name}</h1>
      <p>{details.cuisine}</p>
    </div>
  );
}

export default DetailsPage;
