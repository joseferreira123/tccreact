import styles from "./Container.module.css"
import MyImage from "../img/logo.png"
import ImageDecoration from "../img/logoDoeApm.png"
import LogoTopDecoration from "../img/LogoTopDecoration.png"
import RegisterForm from "../componentes/RegisterForm"




const Login = () => {
  return (
    <>
        <div className={styles.containerGlobal}>
        <div className={styles.container}>
            <div className={styles.topDecoration}>
                <img src={LogoTopDecoration} alt="" />
            </div>
                
            
              <div className={styles.borderImage}>
                  <img src={MyImage} alt="logo" /> 
              </div>
              <div>
                  <img src={ImageDecoration} alt="decoration" />
              </div>
              
          </div>

          <RegisterForm/>
          
              
        </div>
  
    </>
  )
}

export default Login
        