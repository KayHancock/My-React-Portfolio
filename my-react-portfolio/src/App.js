import "./App.css";

function App() {
  return (
    <div className="App container d-flex align-items-center text-center">
      <header className="App-header card">
        <div class="card-body">
          <h1>Kayla Hancock</h1>
          <h3>@KC3KGQ</h3>
          <a
            href="https://github.com/KayHancock"
            className="mb-3 mt-3 pb-3 pt-3 ms-3 ps-3 link-light text-white"
          >
            Here's a link to my github.
          </a>
          <br></br>
          <a
            href="https://www.linkedin.com/in/kc3kgq/"
            className="mb-3 mt-3 pb-3 pt-3 ms-3 ps-3 link-light"
          >
            Here's a link to my LinkedIn.
          </a>
          <br></br>
          <br></br>
          <img
            src={require("./image.jpg")}
            alt="graphics design is my passion"
            className="mb-3 mt-3 pb-3 pt-3"
          ></img>
        </div>
      </header>
    </div>
  );
}

export default App;
