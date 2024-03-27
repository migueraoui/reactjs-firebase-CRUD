import React, { useState } from 'react';
import app from "../Firebase";
import { getDatabase, ref, get} from "firebase/database"

const Updater = () => {

  let [jargonList, setJargonList] = useState([]); //array for jargons

  const fetchJargon = async () => {
    const database = getDatabase(app);
    const databaseLocation = ref(database, "Disc/Jargon");
    const getJargon = await get(databaseLocation);
    if(getJargon.exists()){

        const recordIDs = getJargon.val();
        const tempVal = Object.keys(recordIDs).map( records => {
                return{
                    ...recordIDs[records],
                    jargonID: records
                }
            }
        );

      setJargonList(tempVal); //object values to remove id data and save it in array
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
            <label>ID </label>{data.jargonID}<br/>
            <label>Name </label>{data.jargonName}<br/>
            <label>Categorie </label>{data.jargonCategorie}<br/>
            <label>Definition </label>{data.jargonDefinition}<br/>
            <br/>
          </li>
        )
        )}
        <br/>
      </ul>
      <button onClick={fetchJargon}>Show all jargon</button>
    </div>
  )
}

export default Updater