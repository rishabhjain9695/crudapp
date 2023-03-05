// // import React, { useState } from 'react';

// // export function Test() {

// //   const [count, setCount] = useState(0);

// //   return (
// //     <div>
// //       <p>You clicked {count} times</p>
// //       <button onClick={() => setCount(count + 1)}>
// //         Click me
// //       </button>
// //     </div>
// //   );
// // }
// import React,{useState} from 'react';

// export default function Test() {
//     const[data,setData]=useState({name:"Ayush",age:9});
//   return (
//     <div>
//       {data.name}
//       {data.age}
//       {data.gender}
//       <button onClick={()=>{setData({...data,name:"aaaaa",age:11,gender:"male"})}}>aaaaaaaaaa</button>
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react'

export default function Test() {
    // useEffect({
    //     console.log(state)  
    //  },[state]);
    const [state, setState] = useState({ name: "ris", age: 88 });
   

    return (
        <div>
            {state.name}
            <button onClick={() => { setState({ ...state, name: "ayushjain" });console.log(state) }}>click hereeeeeee</button>
            <button onClick={() => { console.log(state)}}>click me</button>
        </div>
    )
}
