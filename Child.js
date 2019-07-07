import React from 'react';

const Child = React.memo((props)=>{
console.log('Inside the child component')
return (
  <div>
Hello , {props.name}
  </div>
)

})

export default Child;