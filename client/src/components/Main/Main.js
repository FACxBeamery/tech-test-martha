import React, { useContext, useState, useEffect } from "react";
import LocationForm from "./LocationForm/LocationForm";

const Main = () => {
    const [location, setLocation] = useState(null);
    return (
        <>
            {location ? (
                <p>add jobs list</p>
            ) : (
                // <JobsList />
                <LocationForm location={location} setLocation={setLocation} />
            )}
        </>
    );
};

export default Main;
