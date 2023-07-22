
import './App.css'
import Sidebar from './sidebar'
import Navbar from './navbar'
import Widgets from './widgets'
import { Illustrations } from './illustration'
import { ColorsList } from './ColorBar'


function App() {
 return (
 <div className='app'>
      <div className='title'>
        <Sidebar />
      </div>
    <div className='home'>
      <Navbar />
      <div className='dashboardtitle'> Dashboard
      </div>
      <div className='widgets'>
        <Widgets />
      </div>
      <div className='illustrationsapp'>
        <Illustrations />
      </div>
    <div className='projects'>
        <ColorsList />
      </div>
   </div>
 </div>
  )
}

export default App


