export function Header() {
  return (
    <header className="header">
      <img
        src="\src\images\Group (1).png"
        alt="React-logo"
        className="nav-logo"
      />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-items">Pricing</li>
          <li className="nav-list-items">About</li>
          <li className="nav-list-items">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
