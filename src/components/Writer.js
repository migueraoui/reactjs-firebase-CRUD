import React, { useState } from 'react';
import app from "../Firebase";
import { getDatabase, ref, push, set } from "firebase/database"

const Writer = () => {
  let [name, setName] = useState("");
  let [categorie, setCategorie] = useState("");
  let [definition, setDefinition] = useState("");

  const saveJargon = async () => {
    const database = getDatabase(app);
    const newDocument = push(ref(database, "Disc/Jargon"));
    set(newDocument, {
      jargonName: name,
      jargonCategorie: categorie,
      jargonDefinition: definition,
      
    }).then(() => {
      alert("Jargon saved");
    }).catch((error)=> {
      alert("Error: ", error.message);
    })
    setName("");
    setCategorie("");
    setDefinition("");
  }

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h3>Insert a jargon</h3>
      <label>Name </label><input type='text' value={name} onChange={(e) => setName(e.target.value)}/><br/>
      <label>Categorie </label><input type='text' value={categorie} onChange={(e) => setCategorie(e.target.value)}/> <br/>
      <label>Definition </label><input type='text' value={definition} onChange={(e) => setDefinition(e.target.value)}/> <br/>
      <br/>
      <button onClick={saveJargon}>Save Value</button>
    </div>
  )
}

export default Writer