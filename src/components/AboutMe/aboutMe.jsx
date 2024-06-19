import styles from './aboutMe.module.css'

import gitHubIcon from '../../assets/Icons/github.svg';
import linkedinIcon from '../../assets/Icons/linkedin.svg';
import instagramIcon from '../../assets/Icons/instagram.svg';
import youtubeIcon from '../../assets/Icons/youtube.svg';
import teste from '../../public/testeD.png'

export default function AboutMe() {
  return (
    <>
      <section id='about_me' className={styles.about_me}>
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row">
            <div
              className="col-md-12"
              style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "100px 0" }}
            >
              <div className={styles.about_me_text}>
                <h2 className={styles.title_section} style={{marginBottom: "40px"}}>Sobre mim</h2>
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
              <div className={styles.buttons_about}>
                <button className={styles.curriculum_btn}>
                 <a href={teste} download='testeDownload'>Baixar Currículo</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}