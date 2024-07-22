import React, { useState } from "react";

function Workout() {
  const [searchTerm, setSearchTerm] = useState("");
  const [exercises, setExercises] = useState([]);

  const handleSearch = () => {
    // Perform search logic here and update exercises state
    setExercises([searchTerm]);
  };

  return (
    <div>
      <h2>Workout Page</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for exercises"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
}

export default Workout;
