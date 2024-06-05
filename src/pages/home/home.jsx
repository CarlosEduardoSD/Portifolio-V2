import styles from "./home.module.css";

// import imgTheme from "../../assets/images/Img-theme.png";
import Perfil from "../../assets/images/Perfil.jpg";
import gitHubIcon from '../../assets/Icons/github.svg';
import linkedinIcon from '../../assets/Icons/linkedin.svg';
import instagramIcon from '../../assets/Icons/instagram.svg';
import youtubeIcon from '../../assets/Icons/youtube.svg';

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

import Header from "../../components/Header/header";

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
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <h2 className={styles.title}>OLÁ, EU SOU</h2>
                <h1 className={styles.title_name}>CARLOS EDUARDO</h1>
                <h3 className={styles.title_description}>
                  DESENVOLVEDOR WEB FULL-STACK.
                </h3>
                <div className={styles.buttons}>
                  <button className={styles.home_button_linkedin}>
                    <FiLinkedin style={{ color: "white", fontSize: "24px" }} />
                    <a href="https://github.com/CarlosEduardoSD">LinkedIn</a>
                  </button>
                  <button className={styles.home_button_github}>
                    <FiGithub style={{ color: "white", fontSize: "24px" }} />
                    <a href="https://github.com/CarlosEduardoSD">GitHub</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.home_img}>
                <img className="img-fluid" src={Perfil} alt="theme" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.about_me}>
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row">
            <div
              className="col-md-12"
              style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}
            >
              <div className={styles.about_me_text}>
                <h2 className={styles.title} style={{marginBottom: "40px"}}>SOBRE MIM</h2>
                <p style={{ fontSize: "20px", fontWeight: "500" }}>
                  São Paulo, Brasil
                </p>
                <p className={styles.description} style={{ width: "80%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent id egestas dui. Nullam finibus aliquam enim quis
                  faucibus. Aenean ac commodo dolor, nec bibendum velit.
                </p>
              </div>
              <div className={styles.about_me_social_links}>
                <a href="https://github.com/CarlosEduardoSD">
                  <img src={gitHubIcon} alt="GitHub" />
                </a>
                <a href="https://github.com/CarlosEduardoSD">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href="https://github.com/CarlosEduardoSD">
                  <img src={instagramIcon} alt="Instagram" />
                </a>  
                <a href="https://github.com/CarlosEduardoSD">
                  <img src={youtubeIcon} alt="Instagram" />
                </a>  
              </div>
              <div className={styles.buttons}>
                <button>
                  Currículo
                </button>
                <button>
                  E-mail
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
