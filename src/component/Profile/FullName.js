import React from'react';

const FullName = () => {
  const name = "Sabri Ben Khalil" 
  const MyStyle = {
      backgroundColor:'red',
      color: 'blue',
  } 
    return(
        <div>
            <h1 style={MyStyle}> {name}</h1>
        </div>
    );
};
export default FullName;
