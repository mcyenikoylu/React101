import React from 'react';
import {FirstComponent} from './index';

class Sayfa1 extends React.Component()
{
    disClickEvent=(a)=>{
        console.log("Dis Event a:" + a)
    }
    render(){
        return  <div>Hello mcy <FirstComponent onClick={this.disClickEvent} name="m. cenk" surname="yenikoylu" /> </div>
    }
}