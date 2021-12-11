import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomList from "../pages/room-list/RoomList";
import Scheduled from "../pages/scheduled/Scheduled";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AdminPanel from "../pages/admin/admin-panel/AdminPanel";
import NewRoom from "../pages/admin/new-room/NewRoom";
import EditRoom from "../pages/admin/edit-room/EditRoom";
import EditUsers from "../pages/admin/edit-users/EditUsers";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/room-list" element={<RoomList />} />
        <Route path="/scheduled" element={<Scheduled />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/new-room" element={<NewRoom />} />
        <Route path="/edit-room" element={<EditRoom />} />
        <Route path="/edit-users" element={<EditUsers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;