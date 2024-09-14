import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="h-screen flex  relative">
      <NavBar />
      <Dashboard />
    </div>
  );
};

export default App;
