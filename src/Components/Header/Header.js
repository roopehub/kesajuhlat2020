import React, { Component } from 'react';
import classes from './Header.module.css';
import { withLeaflet } from 'react-leaflet';

class Header extends Component {

    flyTo = (map, coord) => {
        map.flyTo(coord, 16);
    }

    render() {
        const { map } = this.props.leaflet;

        return (
            <div className={classes.Header}>
                <h2>KESÄJUHLAT2020 APP</h2>
                <a href="https://ylilauta.org/huumeet/46218737"><img src="https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/116179044_3657788790901427_8864681093239598833_o.jpg?_nc_cat=109&_nc_sid=b386c4&_nc_ohc=4Uj-cOH5bL4AX-jKEof&_nc_ht=scontent-hel2-1.xx&oh=466d47591a6a2b2fcbaf7a3b087d0d49&oe=5F45B589" /></a>
                <i>official piri productions 2020</i>
            </div>
        )
    }
}


export default withLeaflet(Header);