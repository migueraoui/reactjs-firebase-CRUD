import React, { useState } from 'react';
import app from "../Firebase";
import { getDatabase, ref, get} from "firebase/database"

const Reader = () => {

  let [jargonList, setJargonList] = useState([]); //array for jargons

  const fetchJargon = async () => {
    const database = getDatabase(app);
    const databaseLocation = ref(database, "Disc/Jargon");
    const getJargon = await get(databaseLocation);
    if(getJargon.exists()){
      setJargonList(Object.values(getJargon.val())); //object values to remove id data and save it in array
    }else{
      alert("Error")
    }

  }


  return (
    <div style={{  padding: '50px' }}>
      <h3>Show jargons</h3>
      <ul>
        {jargonList.map( (data, index) =>(
          <li key={index}>
            <label>Name </label>{data.jargonName}<br/>
            <label>Categorie </label>{data.jargonCategorie}<br/>
            <label>Definition </label>{data.jargonDefinition}<br/>
            <br/>
          </li>
          
        )
        )}
      </ul>
      <button onClick={fetchJargon}>Show all jargon</button>
    </div>
  )
}

export default Reader