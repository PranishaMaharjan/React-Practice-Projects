import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={`${styles.navigation} container`}>
        <div className="logo">
          <img src="/logo/logo.png" />
        </div>

        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
