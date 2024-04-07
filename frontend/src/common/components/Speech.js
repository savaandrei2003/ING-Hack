// import React, { useState } from "react";

// function Speech() {
//   const [isRecording, setIsRecording] = useState(false);
//   const [recognizedText, setRecognizedText] = useState("");

//   let mediaRecorder;
//   let chunks = [];

//   async function startRecording() {
//     console.log('start recording');
//     var a = new Audio(chrome.runtime.getURL('recordings/Recording.mp3'))
//     a.play();
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     mediaRecorder = new MediaRecorder(stream);
//     mediaRecorder.ondataavailable = event => {
//         chunks.push(event.data);
//     };
//     mediaRecorder.onstop = () => {
//         const blob = new Blob(chunks, { 'type': 'mp3' });
//         speech2text(blob).then((result) => {
//             console.log(result);
//             const number = result.text.match(/\d+/);
//             // number = textToNumber(number);
//             if (number) {
//                 tabToIndex(number[0]);

//             }

//             // if (result.text.includes('Go to') && href != null) {
//             //     window.location.href += href;
//             // }


//         });
//         chunks = [];
//     };
//     mediaRecorder.start();
// }

// function stopRecording() {
//   console.log('stop recording');
//   // var a = new Audio(chrome.runtime.getURL('recordings/yahu.mp3'))
//   // a.play();
//   mediaRecorder.stop();
// }

//   async function speech2text(data) {
//     const formData = new FormData();
//     formData.append("file", data);
//     const response = await fetch(
//       "https://api-inference.huggingface.co/models/facebook/whisper-large",
//       {
//         method: "POST",
//         headers: {
//           // Replace YOUR_API_KEY with your actual API key
//           Authorization: "Bearer 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"
//         },
//         body: formData,
//       }
//     );
//     const result = await response.json();
//     return result;
//   }

//   return (
//     <div>
//       <button onClick={startRecording} disabled={isRecording} className="btn btn-primary">
//         Start Recording
//       </button>
//       <button onClick={stopRecording} disabled={!isRecording} className="btn btn-secondary">
//         Stop Recording
//       </button>
//       <p>{recognizedText}</p>
//     </div>
//   );
// }

// export default Speech;
