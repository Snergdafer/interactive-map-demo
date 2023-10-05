import React, { useEffect } from "react";

const MapDisplay = ({zoom, view, mapRef}) => {

    useEffect(() => {
      if (!view) {
        return;
      }
      if (view.zoom !== Math.round(zoom, 0)) {
        view.zoom = zoom;
      }
    }, [zoom, view]);

  return( 
      <div style={{ height: '100%', width: '100%'}} ref={mapRef} />
  )
}

export default MapDisplay
