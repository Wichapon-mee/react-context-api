import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

function AppHeader() {
  const userData = useContext(UserContext);  // 👈 ดึงข้อมูลจาก Context

  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {userData.username}</h2>   {/* 👈 แทน (x) */}
    </div>
  );
}

export default AppHeader;