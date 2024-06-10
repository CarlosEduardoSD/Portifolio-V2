import styles from "./home.module.css";

import Perfil from "../../assets/images/Perfil.jpg";

import Header from "../../components/Header/header";
import AboutMe from "../../components/AboutMe/aboutMe";
import Experiencies from "../../components/Experiences/experiences";
import Footer from "../../components/Footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <section id={styles.home}>
        <div className="container">
          <div className="row">
            <div className="col-md-6"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <h2 className={styles.title}>Olá, eu sou</h2>
                <h1 className={styles.title_name}>Carlos Eduardo</h1>
                <h3 className={styles.title_description}>
                  Desenvolvedor Web Full-Stack.
                </h3>
                <div className={styles.buttons}>
                  <button className={styles.home_button_github}>
                    <a href="https://github.com/CarlosEduardoSD">GitHub</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={{ display: "flex", justifyContent: "center" }}>
              <div className={styles.home_img}>
                <img className="img-fluid" src={Perfil} alt="theme" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutMe />
      <Experiencies />
      <Footer />
    </>
  );
}
