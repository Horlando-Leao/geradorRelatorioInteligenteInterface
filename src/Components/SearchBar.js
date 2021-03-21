import React from 'react';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  function handleClick(e) {
    e.preventDefault();
    alert('O link foi clicado.');
}
  
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  
  return (
    <div>
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Digite o nome do relatório"}
     onChange={(e) => setKeyword(e.target.value)}
    />
    <button onClick={handleClick}>BUSCAR</button>
    </div>
    
  );
}

export default SearchBar