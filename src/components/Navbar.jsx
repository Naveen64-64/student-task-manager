function Navbar({name , role}) {
  return (
    <nav>
      <h2>{name}'s Task Manager</h2>
      <p>Role: {role}</p>
    </nav>
  );
}

export default Navbar;