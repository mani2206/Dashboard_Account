import ExpenseTracker from "./components/ExpenseTracker ";
import "./App.css";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <>
      <DataProvider>
        <ExpenseTracker />
      </DataProvider>
    </>
  );
}

export default App;
