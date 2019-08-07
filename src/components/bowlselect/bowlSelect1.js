import React from 'react'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'

class Bowlselect extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            select:''
        }
    }
    handler=(e)=>{
        if(e.target.getAttribute('data-bowl')=='regular'){
            this.props.history.push({pathname:"/regularbowl"})
        }else if(e.target.getAttribute('data-bowl')=='mini'){
            this.props.history.push({pathname:"/minibowl"})
        }
        console.log(this.props.location)
      
    }
    render(){
        return(
           <div className="bowlSelectContainer">
                <div className="circle">
                   <Link to="/"><img className="prevBtn" src="./images/prevBtn.png"/></Link>
                    <div className="selectCont">
                        <span className="active"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="textArea"><p>Select your</p> <span>bowl</span></div>
                </div>

                <div className="underArea">
                    <div  className="leftSide">
                        <img data-bowl="mini" onClick={this.handler.bind(this)} className="miniBowlImg" src='/images/miniBowl.png'/>
                        <h5>Mini bowl</h5>
                        <p>350 ml</p>
                    </div>
                    <div  className="rightSide">
                        <img data-bowl="regular" onClick={this.handler.bind(this)} className="regBowlImg" src='/images/regularBowl.png'/>
                        <h5>Regular bowl</h5>
                        <p> 650 ml</p>
                    </div>
                </div>
                <Link to="/bowlselect2" className="nextBtn">Next</Link>
            </div>
        )
    }
}
export default Bowlselect;