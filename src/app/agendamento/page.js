'use client'
import React, { useState } from 'react';
import styles from './agenda.module.css';

function Agendamento() {
  const [paciente, setPaciente] = useState('');
  const [medico, setMedico] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [tipo, setTipo] = useState('');
  const [mensagem, setMensagem] = useState('');

  const pacientes = ['Paciente 1', 'Paciente 2', 'Paciente 3', 'Paciente 4'];
  const medicos = ['Médico 1', 'Médico 2', 'Médico 3'];
  const tipos = ['Consulta', 'Exame', 'Retorno'];
  const horas = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  const handleSubmit = (event) => {
    event.preventDefault();

   
    if (!paciente || !medico || !data || !hora || !tipo) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }

    
    console.log({ paciente, medico, data, hora, tipo });
    setMensagem('Agendamento realizado com sucesso!');

    
    setPaciente('');
    setMedico('');
    setData('');
    setHora('');
    setTipo('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Agendar Consulta</h2>
      {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Paciente:</label>
          <select className={styles.select} value={paciente} onChange={(e) => setPaciente(e.target.value)}>
            <option value="">Selecione um paciente</option>
            {pacientes.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Médico:</label>
          <select className={styles.select} value={medico} onChange={(e) => setMedico(e.target.value)}>
            <option value="">Selecione um médico</option>
            {medicos.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Data:</label>
          <input className={styles.input} type="date" value={data} onChange={(e) => setData(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Hora:</label>
          <select className={styles.select} value={hora} onChange={(e) => setHora(e.target.value)}>
            <option value="">Selecione uma hora</option>
            {horas.map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Tipo:</label>
          <select className={styles.select} value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="">Selecione o tipo</option>
            {tipos.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <button className={styles.button} type="submit">Agendar Consulta</button>
      </form>
    </div>
  );
}

export default Agendamento;