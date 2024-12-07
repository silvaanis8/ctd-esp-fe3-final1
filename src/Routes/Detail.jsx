import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { id } = useParams(); 
  const { state } = useContext(ContextGlobal); 
  const [dentist, setDentist] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  
  useEffect(() => {
    const fetchDentist = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error("Error fetching dentist details");
        }
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDentist();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={`container ${state.theme}`}> 
      <h1 className="title">Dentist Details</h1>
      <div className="dentist-card text-center">
        <h2>{dentist.name}</h2>
        <p><strong>Email:</strong> <span>{dentist.email}</span></p>
        <p><strong>Phone:</strong> <span>{dentist.phone}</span></p>
        <p><strong>Website:</strong> 
          <span>
            <a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer">
              {dentist.website}
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Detail;
