import "./App.css";
import Performance from "./components/Containers/Performance/Performance";
import Properties from "./components/Containers/Properties/Properties";
import Users from "./components/Containers/Users/Users";
import WorkFlows from "./components/Containers/WorkFlows/WorkFlows";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="containers">
        <WorkFlows />
        <Performance />
        <div className="subContainers">
          <div className="div">
            <Properties />
          </div>
          <Users />
        </div>
      </div>
    </div>
  )
}

export default App
