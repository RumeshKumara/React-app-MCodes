
function App() {
  const a = 10;

  return (
    <>
      <div className="cont">
        <h1>React rocks</h1>
        <p>{10*10}% for JSX</p>
        <p>This is a variable: {a}</p>
        <p>{ a>50 ? "Greater" : "Lesser"}</p>
      </div>
    </>
  )
}

export default App
