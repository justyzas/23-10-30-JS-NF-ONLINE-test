import { useState } from "react";
import CountContext from "./CountContext";
import { useContext } from "react";

function Component1({ add }) {
  // 3. Panaudoti kontekste esančią reikšmę
  const { setCount } = useContext(CountContext);
  return (
    <button
      onClick={() => {
        setCount((c) => c + 1);
      }}
    >
      Atnaujinti state
    </button>
  );
}
function ComponentCountShow() {
  return (
    <div>
      <h2>Skaiciaus atvaizdavimas</h2>
      <TheActualCount />
    </div>
  );
}

function TheActualCount() {
  const { count } = useContext(CountContext);
  return <p>Skaicius yra: {count}</p>;
}

function Component2() {
  return <div>Aš esu footeris.</div>;
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello world!</h1>
      {/* 2.Sukurti konteksto tiekėją */}
      <CountContext.Provider value={{ count, setCount }}>
        <Component1 />
        <ComponentCountShow />
      </CountContext.Provider>
      <Component2 />
    </div>
  );
}

export default App;
