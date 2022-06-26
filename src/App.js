
import React,{useState} from "react";
import './App.css';
import CarParkingComponent from './components/CarParkingComponent';
import PostFiltersForm from './components/PostFiltersForm';


function App() {
  return (
    <div className="App">
      <PostFiltersForm />
      <CarParkingComponent/>
    </div>
  );
  
}

export default App;
