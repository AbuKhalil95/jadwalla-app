import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyWall from './components/Wall/my-wall';
import { Provider } from 'react-redux';
import store from './store/';
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Provider store={store}>
        <MyWall />
      </Provider>
    </>
  );
}

export default App;
