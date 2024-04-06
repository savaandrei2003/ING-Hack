import React, { useState, useEffect } from 'react';

const CameraApp = ({ rearCamera }) => {
    const [stream, setStream] = useState(null);
    const [facingMode, setFacingMode] = useState('environment'); // Setează implicit camera pe spate

    useEffect(() => {
        const videoConstraints = {
            facingMode: facingMode
        };

        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            console.log('getUserMedia is not supported');
            return;
        }

        navigator.mediaDevices.getUserMedia({ video: videoConstraints })
            .then(mediaStream => {
                setStream(mediaStream);
                if (rearCamera.current) {
                    rearCamera.current.srcObject = mediaStream;
                }
            })
            .catch(error => console.error('Error accessing media devices:', error));

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => {
                    track.stop();
                });
            }
        };
    }, [facingMode, rearCamera]);

    const switchCamera = () => {
        setFacingMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'));
    };

    return (
        <div>
            <button onClick={switchCamera}>Switch Camera</button>
            <video ref={rearCamera} autoPlay playsInline muted />
        </div>
    );
};

export default CameraApp;