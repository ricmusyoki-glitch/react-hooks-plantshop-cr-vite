
import React, { useEffect, useState } from "react";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <Search
        search={search}
        setSearch={setSearch}
      />

      <NewPlantForm
        onAddPlant={handleAddPlant}
      />

      <PlantList
        plants={filteredPlants}
      />
    </main>
  );
}

export default PlantPage;
    