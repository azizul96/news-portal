
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import MainLayout from './dashboard/layout/MainLayout'
import AdminIndex from './dashboard/pages/AdminIndex'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<MainLayout></MainLayout>}>
          <Route path='' element={<Navigate to='/dashboard/admin'></Navigate>}>
            <Route path='admin' element= {<AdminIndex></AdminIndex>}>
              
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
