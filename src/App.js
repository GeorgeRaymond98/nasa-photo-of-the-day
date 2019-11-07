import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import photoCard from './components/photoCard';

function App() {
  const[data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=saHDkz7D4ahhIjiLqbqnaKEQ1SeGkYhPKphqQ8dk').then(res => {
      console.log(res.data);
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  },[]);
  return (
    <div className="App">
      <h3>Shawn's Page. I think I did it.</h3>
      <photoCard title = {data.title}
        url = {data.url}
        explaination = {data.explaination}
        date = {data.date}
        copy = {data.copyright}
        />
    </div>
  );
}

export default App;
