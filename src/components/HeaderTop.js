import logoImg from '../media/logo.png';

const HeaderTop = () => {
  const preventRefresh = (event) => event.preventDefault();

  return (
    <div className="header-top">
      <img className="logo" src={logoImg} alt="Logo" />
      <nav className="nav-bar">
        <a href="/" onClick={preventRefresh}>Home</a>
        <a href="/" onClick={preventRefresh}>About</a>
        <a href="/" onClick={preventRefresh}>Contact</a>
        <a href="/" onClick={preventRefresh}>Blog</a>
      </nav>
      <button className="sign-in-btn">Sign In</button>
    </div>
  );
};

export default HeaderTop;