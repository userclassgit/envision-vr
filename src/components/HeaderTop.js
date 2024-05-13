import logoImg from '../media/logo.png';
import { useRef, useEffect } from 'react';

const HeaderTop = () => {
  const navBarRef = useRef(null);
  const highlightRef = useRef(null);
  const homeLinkRef = useRef(null);
  const navBarPaddingLeft = 20;

  const handleClick = (event) => {
    event.preventDefault();
    // The size and position of the clicked <a> element
    const linkRect = event.target.getBoundingClientRect();
    // The size and position of the navigation bar.
    const navRect = navBarRef.current.getBoundingClientRect();

    // Set the purple highlight's width and height here
    highlightRef.current.style.width = `${linkRect.width + 5}px`;
    highlightRef.current.style.height = `${linkRect.height + 5}px`;
    // Set the purple highlight's horizontal position here.
    highlightRef.current.style.transform = `translateX(${linkRect.left 
    - navRect.left - navBarPaddingLeft + (linkRect.width / 2) - 
    (highlightRef.current.offsetWidth / 2)}px)`;
  };

  // useEffect is for when the page first loads. this positions the purple
  // highlight behind the home nav btn.
  useEffect(() => {
    const linkRect = homeLinkRef.current.getBoundingClientRect();
    const navRect = navBarRef.current.getBoundingClientRect();

    highlightRef.current.style.width = `${linkRect.width + 5}px`;
    highlightRef.current.style.height = `${linkRect.height + 5}px`;
    highlightRef.current.style.transform = `translateX(${linkRect.left - 
    navRect.left - navBarPaddingLeft + (linkRect.width / 2) - 
    (highlightRef.current.offsetWidth / 2)}px)`;
  }, []);

  return (
    <div className="header-top">
      <img className="logo" src={logoImg} alt="Logo" />
      <nav className="nav-bar" ref={navBarRef}>
        <span className="highlight" ref={highlightRef} />
        <a href="/" onClick={handleClick} ref={homeLinkRef}>Home</a>
        <a href="/" onClick={handleClick}>About</a>
        <a href="/" onClick={handleClick}>Contact</a>
        <a href="/" onClick={handleClick}>Blog</a>
      </nav>
      <button className="sign-in-btn">Sign In</button>
    </div>
  );
};

export default HeaderTop;