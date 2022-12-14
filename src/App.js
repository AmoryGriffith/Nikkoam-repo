import * as Screen from './screens';
import './App.css';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div>
      <Screen.Header />
      <Screen.About />
      <Screen.Funds />
      <Screen.Footer />
    </div>
  );
}

export default App;
