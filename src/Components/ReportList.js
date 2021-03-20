import React from 'react';

const ReportList = ({reportList=[]}) => {
  return (
    <>
    { reportList.map((data,index) => {
        if (data) {
          return (
            <div key={data.title}>
              <h1>{data.title}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default ReportList