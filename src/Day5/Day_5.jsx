import React from 'react'
const Day_5 = (props) => {
  if(props.a.every((ele)=>typeof ele==='string')){
    return (
        <div>
          <ul>
            {/* <li>{(typeof(props.a.map())=='string') ? "yes" : "no"}</li> */}
            <li>{props.a[0]}</li>
            <li>{props.a[1]}</li>
            <li>{props.a[2]}</li>
            <li>{props.a[3]}</li>
          </ul>
      </div>
    )
  }
  else{
      throw new Error('Error caught!!!');
  }
}
  export default Day_5