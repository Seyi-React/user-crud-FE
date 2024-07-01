import React from 'react';
import { BrowserRouter , Route, Routes,} from 'react-router-dom';
import UserList from './component/UserList';
import RegisterUser from "./component/RegisterUser"
import EditUser from  "./component/EditUser"


function App() {
  return (

      <div>
        <h1>User Management</h1>
        <BrowserRouter>
        <Routes>
          <Route path="/" Component={RegisterUser} />
          <Route path="/users" Component={UserList} />
          <Route path="/edit/:id" Component={EditUser} />
        </Routes> 
    </BrowserRouter>
      </div>
  );
}

export default App;
