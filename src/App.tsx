import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Input />
    </div>
  );
}

export default App;
