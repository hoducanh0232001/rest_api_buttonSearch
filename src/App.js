
import React, {useState} from "react";
import './App.css';
import CarParkingComponent from './components/CarParkingComponent';
import PostFiltersForm from './components/PostFiltersForm';



function HandleFilterChange(newFilter) {
  const [filters, setFilters] = useState({
    title_like : '',
  });
  console.log("New Filter: ",newFilter);
  setFilters({
    ...filters,
    title_like: newFilter.searchTerm,
  })
}

function App() {
  return (
    <div className="App">
      <PostFiltersForm />
      <CarParkingComponent/>
    </div>
  );
  
}

export default App;
