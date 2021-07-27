import "./App.css";
import NavBar from "./components/navbar/NavBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
