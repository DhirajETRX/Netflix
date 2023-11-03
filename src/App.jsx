import React from "react";
import Card from './Cards';
import data from './Sdata';

// function ncard(val){
//   return(
//     <Card
//       imgSrc={val.imgSrc}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//     />
//   );
// }


const App=()=>{
    return(
        <>
            <h1 className='heading_style'>List of top 5 Netflix webseries in 2020</h1>
            {/* {data.map(ncard)} */}
            {data.map((val,index) =>{
                return (
                <Card
                key={val.id}
                imgSrc={val.imgSrc}
                title={val.title}
                sname={val.sname}
                link={val.link}
                />
                );
            })}
        </>
    )
}

export default App;