function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-800 text-white p-6 shadow-md">
        <h1 className="text-4xl font-bold text-center">Paisley Highland Games</h1>
        <p className="mt-2 text-center text-lg">
          Discover roles, register for events, and celebrate Scottish tradition
        </p>
        <nav className="mt-4 flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="#" className="hover:underline">Events</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Introduction */}
      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">About the Games</h2>
        <p className="mb-4">
          The Paisley Highland Games celebrate Scottish heritage through traditional competitions,
          music, and community spirit. This portal allows you to apply for event roles, register
          for competitions, and view results once the games begin.
        </p>
        <p className="mb-6">
          Whether you're a volunteer, competitor, or visitor, this site is your gateway to
          participating in one of Paisley's most exciting cultural events.
        </p>
      </section>

      {/* Job Listings */}
      <section className="bg-white p-6 max-w-4xl mx-auto rounded-lg shadow mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Available Roles</h2>
        <ul className="space-y-6">
          <li className="border-l-4 border-green-700 p-4 bg-gray-50 rounded">
            <h3 className="text-xl font-bold">Event Steward</h3>
            <p>Help manage crowd flow and safety during the games.</p>
            <span className="text-yellow-500 font-semibold">Applications open</span>
          </li>
          <li className="border-l-4 border-green-700 p-4 bg-gray-50 rounded">
            <h3 className="text-xl font-bold">Registration Assistant</h3>
            <p>Assist participants with signing up for events.</p>
            <span className="text-yellow-500 font-semibold">Applications open</span>
          </li>
          <li className="border-l-4 border-green-700 p-4 bg-gray-50 rounded">
            <h3 className="text-xl font-bold">Scorekeeper</h3>
            <p>Record and publish competition results.</p>
            <span className="text-yellow-500 font-semibold">Applications open</span>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-6 text-center text-sm">
        <p>&copy; 2025 Paisley Highland Games Committee</p>
        <p className="mt-2">Contact: info@paisleygames.org | Follow us on social media</p>
      </footer>
    </div>
  );
}

export default App;