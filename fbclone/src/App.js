import Album from './Components/Album'
import './App.css';
import Sidebar from './Components/Sidebar'
import Activitybar from './Components/Activitybar';

function App() {
  return (
    <div className='newapp'>
      <Album />
      <Sidebar />
      <Activitybar />
    </div>
  );
}

export default App;
