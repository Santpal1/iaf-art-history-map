import React from "react";
import IndianArtMap from "./IndianArtMap.jsx";
import { LOCATIONS } from "./assets/constants";

export default function App() {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <IndianArtMap />
        </div>
    );
}
