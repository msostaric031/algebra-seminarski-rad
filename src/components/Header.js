const Header = (props) => {
  const isLoggedIn = !!props.username;
  return (
    <>
      {isLoggedIn && (
        <div className="App-header">
          <button onClick={props.toggleSidebar} className="sidebar-btn">
            Sidebar
          </button>
          <h1>{props.username}'s Chat App</h1>
          <button onClick={props.handleLogout}>LogOut</button>
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
