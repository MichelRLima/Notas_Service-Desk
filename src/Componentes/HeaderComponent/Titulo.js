import styles from './titulo.module.css'
import { BsPencil, BsJournals } from 'react-icons/bs'

function Titulo() {


    return (
        <>
            <div className={styles.containerHeader}>
                <div className={styles.containerTitulo}>
                    <BsPencil className={styles.pen}></BsPencil>
                    <h2 className={styles.titulo}>Notas Service Desk</h2>
                    <BsJournals className={styles.journal}></BsJournals>
                </div>
                <div className={styles.containerBy}>
                    <span>By <a target='_blanck' href='https://michelrocha-dev.netlify.app'>Michel Rocha</a></span>
                </div>
            </div>

        </>
    )


}

export default Titulo