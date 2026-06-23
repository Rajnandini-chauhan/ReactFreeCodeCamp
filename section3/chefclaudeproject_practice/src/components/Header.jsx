import icon from "../assets/chef-claude-icon.png";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header-icon"
        src={icon}
        alt="Chef Claude logo"
      />

      <h1 className="header-title">Chef Claude</h1>
    </header>
  );
}