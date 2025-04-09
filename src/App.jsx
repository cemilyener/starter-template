import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-6">
        TailwindCSS ile Merhaba Dünya!
      </h1>
      <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
        Tıkla Beni
      </button>
    </div>
  );
};

export default App;