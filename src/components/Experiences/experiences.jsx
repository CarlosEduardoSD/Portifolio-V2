import styles from "./experiences.module.css";

export default function Experiencies() {
  return (
    <section id='experiences' className={styles.experiences}>
      <div
        className="container"
        style={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <div className="row" style={{ marginBottom: "30px" }}>
          <div className="col-md-12">
            <h1 className={styles.title_section}>Experiência</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div>
              <nav className={styles.experiences_nav}>
                <ul className={styles.experiences_nav_list}>
                  <li>Dev Full-Stack</li>
                  <li>Dev Front-End</li>
                  <li>Mentoria</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-md-9">
            <div className={styles.experiences_content}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2 className={styles.title}>Estágio de Desenvolvedor Full-Stack na eSims</h2>
                <p className={styles.date}>Nov 2023 - Atual</p>
              </div>
              <h3 className={styles.sub_title} style={{fontSize: "16px", fontWeight: "500"}}>Dev Full-Stack</h3>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent id egestas dui. Nullam finibus aliquam enim quis
                faucibus. Aenean ac commodo dolor, nec bibendum velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
