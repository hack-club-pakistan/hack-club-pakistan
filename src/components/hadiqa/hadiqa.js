import React from 'react'
import Conference from './Conference.jpg'
import "./hadiqa.css"




export default class Hadiqa extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <>
        <div className="container">
          <div className="avatar">
            <img src={Conference} alt="Hadiqa" id="avatar"/>
            <small>She/her</small>
         </div>
          <div className="intro">
            <h3 className="heading">Hadiqa  </h3>
            <span className="sppan">Member</span>
            <p>Hello! My name is Hadiqa, I am a Computer Science student and a member of Hack Club Pakistan. Hello! My name is Hadiqa, I am a Computer Science student and a member of Hack Club Pakistan. </p>
          </div>
        </div>
      </>
    )
  }
}
