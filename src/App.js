import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Photocard from './components/photoCard';
import Image from './components/Image';
import Date from './components/Date';
import Copyright from './components/Copyright';


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
      <Image url={data.url}/>
      <Photocard title = {data.title}/>
      <Date date = {data.date} />
      <Copyright copy = {data.copyright}/>
    </div>
  );
}

export default App;
