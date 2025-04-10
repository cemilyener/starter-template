import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">Header</h1>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="bg-gray-200 w-full md:w-64 p-4">
          <h2 className="text-lg font-semibold">Sidebar</h2>
          <ul className="mt-2">
            <li className="py-1">Link 1</li>
            <li className="py-1">Link 2</li>
            <li className="py-1">Link 3</li>
          </ul>
        </aside>

        {/* Content */}
        <main className="flex-1 p-4 bg-white">
          <h2 className="text-lg font-semibold">Content</h2>
          <p className="mt-2">
            Bu, ana içerik alanıdır. Buraya istediğiniz içeriği ekleyebilirsiniz.
          </p>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>Footer &copy; 2025</p>
      </footer>
    </div>
  );
}

export default App;