import { PresetColorTypes } from 'antd/lib/_util/colors';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Menu from './Menu.js';
import {Icon} from "leaflet";

export default function LeafletMap(props) {
    const vendorIcon = new Icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg',
        iconSize: [40,40]
    })
    
    return (
        <>
            <MapContainer center={[-37.7963, 144.9614]} zoom={18} scrollWheelZoom={false} style={{height: "90vh"}}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    
                />
                <Marker position={[-37.7963, 144.9614]} iconUrl = {"https://static.thenounproject.com/png/780108-200.png"}>
                    <Popup>Your location </Popup>
                </Marker>
                {/* {props.vendors.map((vendor) => (
                    <Menu key={vendor.id} position={vendor.location} snacks={props.snacks}
                    vendor={vendor} customer={props.customer} />
                ))} */}
            </MapContainer>
        </>
    )
}
