import React, { useState, useEffect } from 'react';
import  GraphicPage from "../Pages/GraphicPage";
import {appendBase,  getBase } from "../Util/operation";

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  const [input, setInput] = useState('');

  const fetchData = async () => {
    return await fetch(`http://127.0.0.1:5000/relatorio?intencao_usuario=?${input}`)
      .then(response => response.json() )
      .then(data => appendBase(data) )
      .then(console.log(getBase()) )
  }
  
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  
  return (
    
    <div>
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Digite o nome do relatório"}
     onChange={(e) =>{ setKeyword(e.target.value); setInput(e.target.value) }}
    />
    <button onClick={fetchData}>Buscar</button>
    </div>
    
  );
}

export default SearchBar