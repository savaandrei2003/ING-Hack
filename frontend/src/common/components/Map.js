import React from 'react';
import { useLocation } from "react-router-dom";

function Map() { // Adăugarea lui `materialType` ca prop
  // Mapăm fiecare tip de material la varianta sa corespunzătoare în URL

  const location = useLocation();
  const { displayText } = location.state || {};

  const materialMappings = {
    paper: "Hârtie%20%26%20carton",
    cardboard: "Hârtie%20%26%20carton",
    glass: "Sticlă",
    metal: "Metal%20%26%20aluminiu",
    plastic: "Plastic%20%26%20PET",
    trash: "Plastic%20%26%20PET",
  };

  // Verificăm dacă tipul de material primit ca prop este unul valid
  const iframeSrc = materialMappings[displayText]
    ? `https://localizare.hartareciclarii.ro/?material=${materialMappings[displayText]}`
    : "https://localizare.hartareciclarii.ro/"; // Dacă materialType nu este valid, afișăm URL-ul de bază

  const iframeTitle = "Harta Reciclării";

  return (
    <div style={{width: '100%', height: '600px', overflow: 'hidden'}}>
      <iframe
        src={iframeSrc}
        title={iframeTitle}
        width="100%"
        height="100%"
        style={{border: 'none'}}
        allowFullScreen>
      </iframe>
    </div>
  );
}

export default Map;
