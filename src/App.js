import './App.css';
import UploadModal from './components/UploadModal/UploadModal';
const logo = "https://skyhoptechnologies.com/images/logo-50px.png";

function App() {

  return (
    <div className="skyhop-app">
      <div className='skyhop-content'>
        <div className='skyhop-logo'>
          <img src={logo} alt="logo" />
        </div>
        
        <UploadModal />
      </div>
    </div>
  );
}

export default App;
