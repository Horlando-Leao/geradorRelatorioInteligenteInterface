import React from 'react';

const ReportList = ({reportList=[]}) => {
  return (
    <>
    { reportList.map((data,index) => {
        if (data) {
          return (
            <div key={data.nome}>
              <h5>{data.nome}</h5>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default ReportList