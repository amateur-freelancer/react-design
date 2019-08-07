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
    cle=()=>{
        console.log(11)
    }
    hdl = () => {
        let tmp = document.querySelectorAll('.choosePl');
        for (let i = 0; i < tmp.length; i++) {
            let arr = []
            if(i==0){
                tmp[i].style.transform= `translate(${-78}px,${-45}px)` 
                tmp[i].setAttribute('data-chk','-78,-45')
            }if(i==1){
                tmp[i].style.transform= `translate(${-73}px,${-11}px)`
                tmp[i].setAttribute('data-chk','-73,-11') 
            }if(i==2){
                tmp[i].style.transform= `translate(${-72}px,${28}px)` 
                tmp[i].setAttribute('data-chk','-72,28')
            }if(i==3){
                tmp[i].style.transform= `translate(${-70}px,${46}px)` 
                tmp[i].setAttribute('data-chk','-70,46')
            }if(i==4){
                tmp[i].style.transform= `translate(${-66}px,${28}px)` 
                tmp[i].setAttribute('data-chk','-66,28')
            }if(i==5){
                tmp[i].style.transform= `translate(${-68}px,${-10}px)`
                tmp[i].setAttribute('data-chk','-68,-10') 
            }else{
            }
            if(tmp[i].getAttribute('data-chk')){arr.push(Number(tmp[i].getAttribute('data-chk').split(',')))}
            console.log(arr)
            tmp[i].style.transition = "all 0.5s linear"
        }
    }
    render(){
        return(
            <div className="mainWrapForSect">
            <div className="bowlSelectContainer updatet forSumm">
                 <div className="circle updatetCircle">
                    <Summary/>
                   <Link to="/bowlselect2"><img className="prevBtn" src="./images/prevBtn.png"/></Link>
                   <img onClick={this.cl.bind(this)} className="ordsm" src="./images/ordsm.png"></img>

                    <div className="selectCont regCont">
                        <span className="entered"></span>
                        <span className="entered"></span>
                        <span className="active"></span>
                        <span></span> 
                        <span></span>
                        <span></span>
                    </div>
                    <h4></h4>
                    <img className="regMainBowl" src="./images/regularBowl.png" />
                    <div className="textArea updatetTextarea"><p>Select your</p> <span>pasta</span></div>

                </div> 

                <div className="under-sect plpops">

                    {
                        this.props.data.pastaTypes.map((item , index) => {
                            return  <Plcomponent type={'pasta'} info = {item} key= {index} id={index}/>
                         })
                    }
                </div>

                <Link to="/bowlselect4" className="nextBtn wtCart">Next</Link>
                <Link to="/cart" className="cartBtn">Your cart</Link>
            </div>
            </div>
        )
    }
}
export default connect(mapStateToProps)(Bowlselect);