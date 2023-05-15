const Header = ({ username, toggleSidebar, handleLogout }) => {
  const isLoggedIn = !!username;
  return (
    <>
      {isLoggedIn && (
        <div className="App-header">
          <button onClick={toggleSidebar} className="sidebar-btn">
            Sidebar
          </button>
          <h1>{username}'s Chat App</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {!isLoggedIn && (
        <div className="App-header">
          <div></div>
          <h1>Chat App</h1>
          <div></div>
        </div>
      )}
    </>
  );
};
export default Header;
