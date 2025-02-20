'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";


export default function Consultas() {
    let [nomeMedico,setNomeMedico] = useState(undefined)
    let [nomePaciente,setNomePaciente] = useState(undefined)
    let [medicos,setMedicos] = useState([
      ])
    const getMedicos = async (nomeMedico,nomePaciente) =>{


        if (typeof nomeMedico == 'undefined' && typeof nomePaciente == 'undefined') {
            let response = await fetch('https://api-clinica-2a.onrender.com/consultas');
            let data = await response.json();
            setMedicos(data);

        }else if(typeof nomeMedico == 'undefined'){
            let response = await fetch('https://api-clinica-2a.onrender.com/consultas');
            let data = await response.json();
            data = data.filter(item => item.paciente.toLowerCase().includes(nomePaciente.toLowerCase()));
            setMedicos(data);


        }else {
            let response = await fetch('https://api-clinica-2a.onrender.com/consultas');
            let data = await response.json();
            data = data.filter(item => item.medico.toLowerCase().includes(nomeMedico.toLowerCase()));
            setMedicos(data);



        }





    }

    function functionNomePaciente(event) {
        setNomeMedico(undefined)
        setNomePaciente(event.target.value)

    }
    function functionNomeMedico(event) {
        setNomePaciente(undefined)
        setNomeMedico(event.target.value)

    }


    useEffect(()=>{
        getMedicos(nomeMedico,nomePaciente);
    },[nomeMedico,nomePaciente]);
    return (
      <>
        <div className={styles.conteiner}>
            <h1 className={styles.titulo}>Lista de Consultas</h1>
            <input onChange={(e) => functionNomePaciente(e)} ></input><input onChange={(e) => functionNomeMedico(e)} ></input>
            <input placeholder="Paciente" onChange={(e) => functionNomePaciente(e)} ></input><input placeholder="Medico" onChange={(e) => functionNomeMedico(e)} ></input>
            <table className={styles.tabela}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Especialidade</th>
                        <th>Medico</th>
                        <th>Paciente</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody >
                {medicos.map((medico)=>(
                    <tr key={medico.id}>
                        <td>{medico.id}</td>
                        <td>{medico.especialidade}</td>
                        <td>{medico.medico}</td>
                        <td>{medico.paciente}</td>
                        <td>{medico.tipo}</td>
                    </tr>

                ))}
                </tbody>
            </table>
        </div>

      </>
    )};