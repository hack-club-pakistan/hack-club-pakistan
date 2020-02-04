
import React from "react"
import Bannner from './Bannner.jpg'
import "./banner.css"

export default class Banner extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(

  <>

<div className='header-img' >
    <div className='about-us'>
      <h1 className='web-name'>Hack Club Pakistan</h1>
      <h1 className='we-student'>We the Students</h1>
      <p>We believe in a world where every young person is empowered to be the change they want to see around them. At Hack Club, we’re working hard to make it reality.</p>
    </div>
</div>
  </>
    )
  }
}
