import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css'
import './vendors/fontawesome/css/all.css'

import Border from './components/Border'
import Info from './components/Info';

function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Border />
        <Info />
        <Border />
      </div>
    </div>

  );
}

export default App;
