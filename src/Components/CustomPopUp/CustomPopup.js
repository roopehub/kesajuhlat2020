import React, { Component } from 'react';
import classes from './CustomPopup.module.css'
import { Popup } from 'react-leaflet';

class CustomPopup extends Component {
    render() {
        let content = null;
        switch(this.props.item.id) {
            case 1:
                content = 
                <React.Fragment>
                    <h2 style={{color:'pink'}}>KESÄJUHLAT 2020</h2>                   
                    <br/>
                    <a href="https://www.festicket.com/magazine/features/festival-disasters-when-festivals-dont-go-plan/"><h2 style={{color:'orange'}}>Tapahtuman virallisille sivuille</h2></a>   
                    <hr />
                    <a href="https://www.vauva.fi/keskustelu/4421957/ketju/lasten_pukeutuminen_hohhoj"><h2 style={{color:'purple'}}>Parhaimmat vinkit kesäfestaripukeutumiseen kesäjuhlille 2020</h2> </a>  
                </React.Fragment>
                break;
            default:
                return null;
        }

        return (
            <Popup className={classes.Popup}>
                {
                    this.props.item.image ? <img src={this.props.item.image} /> : null
                }
                <h2>{this.props.item.name}</h2>
                { content }
            </Popup>
        )
    }
}

export default CustomPopup;