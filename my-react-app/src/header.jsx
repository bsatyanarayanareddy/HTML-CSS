export function Header() {
  return (
    <header className="header">
      <h1>
        <ul style={{listStyleType:"none" , display:"flex", padding:0}}>
            <li className="listitem">Home</li>
            <li className="listitem">About</li>
            <li className="listitem">Contact</li>
            <li className="listitem">Blog</li>
            <li className="listitem">Login</li>
        </ul>

      </h1>
    </header>
  );
}