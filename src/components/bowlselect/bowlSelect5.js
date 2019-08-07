import React from 'react'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Plcomponent from './pl'
import Summary from './summary'
import {connect} from 'react-redux'

 let mapStateToProps=(state)=>{
    return {data:state}
  }

class Bowlselect extends React.Component { 
    constructor(){
        super();
        this.clicked = false;
    }
    cl=(e)=>{
        e.target.style.transition = "all 0.5s linear"
        if(this.clicked == false){
            document.querySelector('.forSumm').style.transform = 'translateY(190px)'
            this.clicked = true;
            e.target.style.transform = 'translateY(-145px)'
            e.target.src = './images/summ1.png'
        }else{
            document.querySelector('.forSumm').style.transform = 'translateY(0px)'
            this.clicked = false;
            e.target.style.transform = 'translateY(0px)'
            e.target.src = './images/ordsm.png'
        }
    }
    render(){
        return(
            <div className="mainWrapForSect">
            <div className="bowlSelectContainer updatet forSumm">
                 <div className="circle updatetCircle">
                    <Summary/>
                   <Link to="/bowlselect4"><img className="prevBtn" src="./images/prevBtn.png"/></Link>
                   <img onClick={this.cl.bind(this)} className="ordsm" src="./images/ordsm.png"></img>

                    <div className="selectCont regCont">
                        <span className="entered"></span>
                        <span className="entered"></span>
                        <span className="entered"></span>
                        <span className="entered"></span> 
                        <span className="active"></span>
                        <span></span>
                    </div>
                    <img className="regMainBowl" src="./images/regularBowl.png" />
                    <div className="textArea updatetTextarea"><p>Select your</p> <span>garnish</span><h2 style={{fontSize:"8px",textAlign:'center'}}>(choose any 2)</h2></div>
                </div> 
                <div className="under-sect plpops">
                    {
                        this.props.data.garnishTypes.map((item , index) => {
                           return  <Plcomponent type={'garnish'} info = {item} key= {index} id={index}/>
                        })
                    }
                </div>
                <Link className="skpBtn">Skip >></Link>
                <Link to="/bowlselect6" className="nextBtn wtCart">Next</Link>
                <Link to="/cart" className="cartBtn">Your cart</Link>
            </div>
            </div>
        )
    }
}
export default connect(mapStateToProps)(Bowlselect);