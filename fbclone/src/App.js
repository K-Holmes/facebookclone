import Album from './Components/Album'
import './App.css';
import Sidebar from './Components/Sidebar'
import Activitybar from './Components/Activitybar';
import MainFeed from './Components/MainFeed';


function App() {
  return (
    <div className='newapp'>
      <Album />
      <Sidebar />
      <MainFeed/>
      <Activitybar />
    </div>
  );
}

export default App;
