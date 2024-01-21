
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import MainLayout from './dashboard/layout/MainLayout'
import AdminIndex from './dashboard/pages/AdminIndex'
import Login from './dashboard/pages/Login'
import ProtectDashboard from './middleware/ProtectDashboard'
import ProtectRole from './middleware/ProtectRole'
import Unable from './dashboard/pages/Unable'
import AddWriter from './dashboard/pages/AddWriter'
import Writers from './dashboard/pages/Writers'
import News from './dashboard/pages/News'
import Profile from './dashboard/pages/Profile'
import WriterIndex from './dashboard/pages/WriterIndex'
import CreateNews from './dashboard/pages/CreateNews'

function App() {
  const userInfo = {
    role: "writer"
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login></Login>}/>

          <Route path='/dashboard' element={<ProtectDashboard></ProtectDashboard>}>
            <Route path='' element={<MainLayout></MainLayout>}>
              <Route path='' element={userInfo.role === 'admin'? <Navigate to='/dashboard/admin'></Navigate> : <Navigate to='/dashboard/writer'></Navigate>}/>
              <Route path='unable-access' element={<Unable/>}/>
              <Route path='news' element= {<News/>}/>  
              <Route path='profile' element= {<Profile/>}/> 

              <Route path='' element= {<ProtectRole role="admin"></ProtectRole>}>
                <Route path='admin' element= {<AdminIndex/>}/> 
                <Route path='add-writer' element= {<AddWriter/>}/> 
                <Route path='writers' element= {<Writers/>}/>  
              </Route>

              <Route path='' element= {<ProtectRole role="writer"></ProtectRole>}>
                <Route path='writer' element= {<WriterIndex/>}/> 
                <Route path='create-news' element= {<CreateNews/>}/>
              </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
