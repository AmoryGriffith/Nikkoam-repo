import * as Screen from './screens';
import './App.css';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div>
      <Screen.Header />
      <Screen.About />
      {/*  <Screen.Carousel />
      <Screen.Footer /> */}
    </div>
  );
}

export default App;
