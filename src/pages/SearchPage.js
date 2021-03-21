import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import ReportList from '../Components/ReportList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [reportListDefault, setReportListDefault] = useState();
  const [reportList, setReportList] = useState();

  const fetchData = async () => {
    //return await fetch('https://restcountries.eu/rest/v2/all')
    return await fetch('http://127.0.0.1:5000/relatorio/nomes')
      .then(response => response.json())
      .then(data => {
         setReportList(data) 
         setReportListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = reportListDefault.filter(country => {
      //return country.name.toLowerCase().includes(input.toLowerCase())
      return country.nome.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setReportList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Relatório inteligente</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      {/* <ReportList ReportList={ReportList}/> #comentado para testes*/}
      <ReportList reportList={reportList}/>
      
      
    </>
   );
}

export default SearchPage