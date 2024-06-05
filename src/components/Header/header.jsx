import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <header className="container">
        <div className="row">
          <div className={styles.header}>
            <div className="col-md-6">
              <h1 className={styles.header_title}>Portifólio</h1>
            </div>
            <div className="col-md-6">
              <div className={styles.header_menu}>
                <ul className={styles.header_menu_list}>
                  <li>Home</li>
                  <li>Sobre Mim</li>
                  <li>Experiência</li>
                  <li>Projetos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "1px" , backgroundColor: "#151515" }}></div>
      </header>
    </>
  );
}
