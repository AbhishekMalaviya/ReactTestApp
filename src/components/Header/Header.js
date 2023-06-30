import NavBar from "./NavBar";

function Header(props) {
  return (
    <header className="App-header1">      
      <NavBar/>    
      <h3>{props.title}</h3>  
    </header>
  );
}

export default Header;
