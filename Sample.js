import React from 'react';
import Child from './Child';
class Sample extends React.Component{

constructor(){
super();
this.state = {
  names : ['elon musk','Bill Gates','Narayanmurthuy'],
  name : ''
}

}

componentDidMount(){
setInterval(()=>{

let randomName = this.state.names[Math.floor(Math.random(0,1)*this.state.names.length)]

console.log('Randon name : ',randomName)
this.setState({
  name : randomName
})
},2000)
}

render(){
  return (
    <div>
<Child name={this.state.name}/>
    </div>
  )
}

}

export default Sample;