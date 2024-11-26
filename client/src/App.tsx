import { useState, Suspense, useEffect } from "react";
import "./App.css";

async function getter() {
  const response = await fetch("http://localhost:8000/fetcher");
  return response.text();
}

function App() {
  const [hello, setHello] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getter();
      setHello(response);
    };

    fetchData();
  }, [hello]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://taurify.app" target="_blank">
          <img src="/tauri-logo.png" className="logo" alt="Tauri logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/react.svg" className="logo" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/deno.svg" className="logo" alt="Deno logo" />
        </a>
      </div>
      <h1>Taurify + Deno Backend</h1>
      <div className="card">
        <Suspense fallback="fetching">
          Request from Server:: <span>{hello}</span>
        </Suspense>
      </div>
    </>
  );
}

export default App;
