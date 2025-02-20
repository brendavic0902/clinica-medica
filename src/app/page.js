import styles from "./home.module.css"
import Image from "next/image";


export default function Home() {
    return(
        <div>
            <h1 className={styles.titulo}>CLÍNICA ESSÊNCIA SAÚDE</h1>
            <p className={styles.parag}>Na essência saúde, sua saúde é nossa prioridade. Oferecemos um atendimento humanizado e especializado, com profissionais qualificados prontos para cuidar de você e de sua família.
             Descubra uma ampla gama de serviços médicos, desde consultas de rotina até especialidades avançadas. Estamos aqui para atender todas as suas necessidades de saúde com excelência.</p>
            <Image className={styles.img} src='/images/clinica.jpg' alt=" image" width={450} height={200} />
            <button className={styles.botaoVerde}>Agende sua consulta</button>
            <button className={styles.botaoVerde}>Documentação da API</button>
            
        </div>
    )
}


