import React from 'react'
import {connect} from 'react-redux'

 let mapStateToProps=(state)=>{
    return {data:state}
  }

class Plcomponent extends React.Component {
    constructor(props){
        super(props);
        this.pos = 0;
        if(this.props.id == 0 || this.props.id == 4){
            this.pos = 0
        }else if(this.props.id == 1){
            this.pos = 30;
        }else if(this.props.id == 2){
            this.pos = 60;
        }else if(this.props.id == 3){
            this.pos = 40;
        }else{
            this.pos = this.props.id*-10
        }
    }   
        

      handler=(e)=>{
          let tmp = document.querySelectorAll('.plpops .choosePl');
          for (let i = 0; i < tmp.length; i++) {
              tmp[i].style.border = '3px solid transparent'
          }
        if(e.target.parentNode.className=="choosePl"){
            e.target.parentNode.style.border = "3px dashed #67023F"
        }
        
        if(this.props.data[this.props.type] == 'pasta'){this.props.data[this.props.type] = this.props.info.name}
        else{
            this.props.data[this.props.type] = this.props.info.name + ' ,'
        }
        console.log(this.props.data)
    }
    
    render(){
        return(
            <div onClick={this.props.fun} onClick={this.handler.bind(this)} style={{transform:`translateY(${this.pos}px)` , marginLeft:10}} className="choosePl">
                { this.props.info.kk ? <img className="decForPl" src={this.props.info.kk}></img> : null }
                <img src={this.props.info.src}></img>
                <div className="nameSection">
                    <p >{this.props.info.name}</p>
                </div>

            </div>
        )
    }
}
export default connect(mapStateToProps)(Plcomponent);