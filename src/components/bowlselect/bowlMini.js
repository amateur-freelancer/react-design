import React from 'react'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'

let mapStateToProps=(state)=>{
    return {data:state}
  }
   
class Bowlselect extends React.Component { 
    constructor(props){
        super(props);
    }
    handler = () => {
        this.props.data.bow = 'Mini bowl'
        
    }

    render(){
        return(
            <div className="bowlSelectContainer updatet">
            <div className="circle updatetCircle">
               <Link to="/bowlselect1">
                   <img className="prevBtn" src="./images/prevBtn.png"/></Link>
                <div className="selectCont regCont">
                    <span className="active"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            <img className="regMainBowl" src="/images/regularBowl.png"/>

                <div className="textArea updatetTextarea"><p>Select your</p> <span>bowl</span></div>
            </div>

            <div className="underArea">
                <div className="mainSelectedBowl">
                    <h5>Mini bowl</h5>
                    <p>350 ml</p>
                    <span>Starting from 250$</span>
                </div>
            </div>
            <div className="miniBowlArea">
                <img className="regBowlImg" src="./images/miniBowl.png"/>
                <p>Regular bowl</p>
                <span>650ml</span>
            </div>
            <Link onClick={this.handler} to="/bowlselect2" className="nextBtn">Next</Link>
        </div>
        )
    }
}
export default connect(mapStateToProps)(Bowlselect);