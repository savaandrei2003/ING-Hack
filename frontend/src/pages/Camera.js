import Webcam from "react-webcam";
import React, { useRef, useState, useEffect } from "react";
import Page from "../common/components/Page";
import './general.css';

export default function Camera() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [displayText, setDisplayText] = useState("mama");
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startCamera = () => {
    setIsCameraActive(true);
    const id = setInterval(async () => {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot().substring(23);
        setImgSrc(imageSrc);

        const user_data_face = {
          image: imageSrc,
        };

        try {
          const response = await fetch('http://127.0.0.1:5000/photo2material', {
            method: 'POST',
            body: JSON.stringify(user_data_face),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          if (data['status'] === true) {
            console.log(data);
            setDisplayText(data['predictions'][0]['label']);
            clearInterval(id);
          }
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      }
    }, 5000);
    setIntervalId(id);
  };

  const stopCamera = () => {
    clearInterval(intervalId);
    setIsCameraActive(false);
    setDisplayText(""); // Opțional: Poți să resetezi textul afișat dacă dorești
    // Opțional: Dacă dorești să oprești stream-ul camerei:
     webcamRef.current.video.srcObject.getTracks().forEach(track => track.stop());
  };

  // Curăță intervalul dacă componenta se demontează pentru a evita memory leaks
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <Page>
    <div className="flex flex-col h-full justify-center items-center">
      <div className="w-full p-5 rounded-lg shadow-lg">
        {isCameraActive ? (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="100%"
            height="auto"
            className="rounded-lg h-96"
            videoConstraints={{
              facingMode: "environment",
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
              <button onClick={startCamera} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300">Start</button>

          </div>
        )}
        
        {isCameraActive && <div className="flex flex-col items-center justify-center"><button onClick={stopCamera} className="px-4 py-2 mt-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors duration-300">Stop</button></div>}
      </div>

      <div className='flex flex-col mt-10 w-5/6 h-10 recycle-bg rounded-xl items-center justify-around text-white'>
                            
          <div className='flex flex-col items-center  justify-center '>
              <h1 className='text-xl'> </h1>
              <p className='text-large resp'>{displayText}</p>
          </div>
                                                  
      </div>

    </div>
  </Page>
  );
}
