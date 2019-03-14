import React, { Component } from 'react';
import config from './config.js';
import Loader from 'react-loader-spinner';
import finder from "./img/finder.png";
import creator from "./img/creator.png";
import ultimaker from "./img/ultimaker.png";
import prusa from "./img/prusa.png";
import logo from "./img/logo.png";
import printer from "./img/3d.png";
//import Moment from 'react-moment';
import moment from 'moment'
import firebase from 'firebase'

moment.fn.fromNoworNow = function (a) {
  if (Math.abs(moment().diff(this)) < 2000) { // 1000 milliseconds
      return 'Just now';
  }else if(Math.abs(moment().diff(this)) < 6000){
    return Math.floor(Math.abs(moment().diff(this)/1000))+" seconds ago"
  }
  return this.fromNow(a);
}

 export default class App extends Component {
   constructor(){
     super();
     this.state={
       data:undefined,
       settings:undefined,
       error:undefined,
       time:Date.now(),
       updateTime:Date.now()
     }
   }
   componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidMount() {
    this.interval = setInterval(() => {this.setState({ time: Date.now() });
    }, 5000);
  }

   onSettingsChange=(data)=>{
     this.setState({settings:data});
   }

   onDataChange=(data)=>{
    this.setState({data:data});
  }

  onErrorChange=(error)=>{
    if(error.code!=429){
    this.setState({error:error, time: Date.now()})
    }
  }

  onSetUpdateTime=(time)=>{
    this.setState({updateTime:time})
  }

  render() {
    return (
      <main >
      <DataSync timeCallback={this.onSetUpdateTime.bind(this)} time={this.state.time} settingCallback={this.onSettingsChange.bind(this)} dataCallback={this.onDataChange.bind(this)} errorCallback={this.onErrorChange.bind(this)}/>
      <div className="logo_div mt-3">
      <img className="logo" src={logo}></img>
      </div>
      <h1>CoMotion Maker Space 3D Printer Status</h1>
     <Header time={this.state.updateTime}/>
      
      {this.state.error!==undefined?
            <h4 style={{color:"red"}}>{this.state.error.message}</h4>:
        this.state.data===undefined || this.state.settings==undefined? 
        <div id="overlay"><div style={{
          margin:((window.innerHeight - 240) /2.0)+"px 0 0 "+((window.innerWidth - 240) /2.0)+"px"
          }} >
      <Loader className="loader" type="Puff"
      color="#b2cfff" height="240"	width="240" 
      /></div></div>:
              <PrinterList setting={this.state.settings} data={this.state.data}/>}
      
      </main>
    );
  }
}

class Header extends Component{
  constructor(props){
    super(props);
    this.state={time:this.props.time, updateTime:undefined}
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidMount() {
    this.interval = setInterval(() => {this.setState({ updateTime: Date.now() });
    }, 1000);
  }
  componentWillReceiveProps(newProps){
    if(this.props.time!=newProps.time){
      this.setState({time:newProps.time})
    }
  }
  render(){
    return(
      <h4 style={{textAlign:"center",fontStyle:"italic"}}>Last updated: {moment(this.state.time).fromNoworNow()}</h4>
    )
  }
}

export function load(callback, sheetName, area) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: sheetName+"!"+area
      })
      .then(
        response => {
          const data = response.result.values;
          callback(data);
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}


class DataSync extends Component{
  constructor(props){
    super(props);
    this.state={settings:undefined,data:undefined}
  }

  componentWillReceiveProps(newProps){
    if (this.props.time!=newProps.time){
      this.checkDB()
    }
  }
  onSettingLoad = (data, error) => {
    if (data) {
      firebase.database().ref("settings").remove().then(
        firebase.database().ref("settings").set(data)
      )
      
    } else {
      this.props.errorCallback(error);
    }
  };
  onDataLoad = (data, error) => {
    if (data) {
      firebase.database().ref("updatetime").remove().then(
        firebase.database().ref("updatetime").set(Date.now())
      )
      firebase.database().ref("data").remove().then(
        firebase.database().ref("data").set(data)
      ) 
    } else {
      this.props.errorCallback(error)
    }
  };

  getDataFromGoogle=()=>{
    window.gapi.client
    .init({
      apiKey: config.apiKey,
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: config.discoveryDocs
    })
    .then(() => {
    // 3. Initialize and make the API request.
    load(this.onSettingLoad, "settings","A2:D");
    load(this.onDataLoad, "current","A2:Q");
  });
  }

  LoadGoogle=()=>{
    window.gapi.load("client", this.getDataFromGoogle);
  }

  checkDB=()=>{
    firebase.database().ref("updatetime").on('value', (snapshot) =>{
      let value = snapshot.val()
      if (value !== null && Date.now()-value > 10000){
        this.LoadGoogle()
      }
      if (value !== null ){
        this.props.timeCallback(value);
      }
    });
    firebase.database().ref("settings").on('value', (snapshot) =>{
      let value = snapshot.val()
      if (value !== null ){
      this.props.settingCallback(value);
      }
      
    });
    firebase.database().ref("data").on('value', (snapshot) =>{
      let value = snapshot.val()
      if (value !== null ){

      this.props.dataCallback(value);
      }
    });
  }

  componentDidMount(){
    this.checkDB()
  }

  render(){
    return(<></>);
  }
}

class PrinterList extends Component{

  processJobs(){
    let data = this.props.data;
    let machine_types=this.props.setting.map(item=>item[0]);
    let machine = {};
    machine_types.forEach(element => { 
      machine[element] = []
    });
    data = data.filter(item=>
      moment(item[0]).add(
      moment.duration(item[7])
      ) > moment()
    )

    return data;

  }

  render(){
    let data = this.processJobs();
    let printers = this.props.setting.map(item=><Printer job={data} id={item[0]} type={item[1]} warning={item[2]} working={item[3]==="N"}/>)
    return(
      <div className="printer_list container-fluid">
      <ul>
        {printers}
        </ul>
      </div>
    )
  }
}

class Printer extends Component{
  render(){
    let type_img="";
    switch(this.props.type){
      case "FlashForge Finder":
        type_img=finder;
        break;
      case "Creator Pro":
        type_img=creator;
        break;
      case "Ultimaker 2+" :
        type_img=ultimaker;
        break;
      case "Ultimaker 2+ Extended":
        type_img=ultimaker;
        break;
      case "PRUSA":
        type_img=prusa;
        break;
      default:
        type_img=printer;
        break;
    }
    let cur = this.props.job.filter(item=>item[5]===this.props.id);
    this.busy=cur.length > 0;
    if(this.busy){
      this.percent=moment().diff(moment(cur[0][0])) / moment.duration(cur[0][7],'seconds')._milliseconds;
      this.percent = (this.percent * 100).toFixed(3);
      this.radius = this.percent/100 *20;
    }
    
    return(
      <li>
        
      <div className="card printer mx-2" style={{width: "15rem",background: !this.busy?"#d9ead3":"#D9BF73"}} >
      <div className={"printer-wrapper ".concat(this.props.working?"":"d-none")} style={{
          background: !this.busy?"green":"#fff2cc",
          height:!this.busy?"0%":this.percent.toString()+"%",
          borderRadius: this.busy?"20px 20px "+this.radius.toString()+"px "+this.radius.toString()+"px ":"0"
        }}></div>
      <div className={this.props.working?"":"card-img-overlay no-work"}>{this.props.working?"":"In Maintenance"}</div>
        <div className="card-img-wrapper">
        <img className="card-img-top" src={type_img} alt="Printer"></img></div>
        <div className="card-body">
          <p>ID: <span className="printTitle">{this.props.id}</span></p>
          <p>{this.props.type}</p>
          {this.props.working?
              <>
              {this.props.warning!=="N/A"?<p className="warning">Warning: {this.props.warning}</p>:null}
              {this.busy?<><p><strong>Estimate End: {moment(cur[0][0]).add(moment.duration(cur[0][7])).fromNow()}</strong></p>
              <p className="percent">{parseFloat(this.percent).toFixed(0)}%</p></>
              :<p className="status">IDLE</p>}
              </>:
            null}
        </div>
      </div>
      </li>
    )
  }
}