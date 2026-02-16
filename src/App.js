import './App.css';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lingerie Ads</h1>
        <p>
          Welcome to Lingerie Ads application
        </p>
      </header>
      <Analytics />
    </div>
  );
}

export default App;
