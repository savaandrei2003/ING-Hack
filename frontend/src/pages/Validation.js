import React, { useState } from 'react';
import Page from '../common/components/Page';


function Validation() {
  const [number, setNumber] = useState(''); // Starea pentru stocarea numărului introdus

  const handleInputChange = (e) => {
    setNumber(e.target.value); // Actualizează starea la fiecare modificare a input-ului
  };

  const handleSubmit = async () => {
    // Verifică dacă input-ul este un număr
    if (!number || isNaN(number)) {
      alert('Te rog introdu un număr valid.');
      return;
    }
    let result = {};

    if(number > 0 && number < 10) {
        result = {
            "material" : "Plastic",
            "points" : 10,
            "date" : "2024-04-07" 
        }

    } else if(number >= 10 && number < 20) {
        result = {
            "material" : "Hârtie",
            "points" : 20,
            "date" : "2024-04-07" 
        }
    } else if(number >= 20 && number < 30) {
        result = {
            "material" : "Sticlă",
            "points" : 30,
            "date" : "2024-04-07" 
        }
    } else {
        result = {
            "material" : "Metal",
            "points" : 40,
            "date" : "2024-04-07" 
        }
    }


    try {
      const response = await fetch('http://127.0.0.1:5000/add2recycles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(result), // Trimite numărul sub formă de obiect
      });

      if (response.ok) {
        // Procesează răspunsul de la server
        const data = await response.json();
        console.log(data); // Afișează răspunsul în consolă sau procesează-l cum consideri necesar
        alert('Număr trimis cu succes!');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Eroare la trimiterea numărului:", error);
      alert('A apărut o eroare la trimiterea numărului.');
    }
  };

  return (
    <Page>
    <div className="flex flex-col items-center justify-center p-4">
        <input 
        type="text" 
        value={number} 
        onChange={handleInputChange} 
        placeholder="Introdu un număr"
        className="text-center form-input px-4 py-2 border rounded-md shadow-sm border-gray-300 w-full max-w-xs focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
        <button 
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition-colors duration-150 ease-in-out"
        >
        Trimite Numărul
        </button>
    </div>
    {/* <Speech /> */}
    {/* <Scan /> */}
    </Page>
  );
}

export default Validation;
