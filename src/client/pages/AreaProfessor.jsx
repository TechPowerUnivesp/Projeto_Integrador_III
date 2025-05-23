import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import './Formulario.css'
import { createApiUrl } from '../config/api.js';

function AreaProfessor() {
  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const response = await axios.get(createApiUrl('alunos'))
        setAlunos(response.data)
      } catch (error) {
        console.error('Erro ao buscar alunos:', error)
      }
    }

    fetchAlunos()
  }, [])

  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          {' '}
          <img
            src="/assets/img/geoteca.jpg"
            alt="Logo da Geoteca"
            width="100px"
            className="img-logo rounded"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-lg-row-reverse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Início <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- Jumbotron --> */}
      <div className="jumbotron jumbotron-fluid text-center bg-light">
        <div className="container">
          <h1 className="display-4">Área do Professor</h1>
          <p className="lead">
            Aqui você pode verificar as respostas dos alunos.
          </p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <ol>
              {alunos.map((aluno) => (
                <li key={aluno.id}>
                  <div className="btn btn-primary d-flex justify-content-around align-items-center mb-3">
                    <span>Turma: {aluno.numero_turma}</span>
                    <span>Número da chamada: {aluno.numero_chamada}</span>
                    <a
                      href={`/DetalhesAluno?numero_turma=${aluno.numero_turma}&numero_chamada=${aluno.numero_chamada}`}
                      className="btn btn-success ml-3"
                    >
                      <i className="fa fa-file-text-o"></i>
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/estatisticas" className="btn btn-info">
          📊 Ver Estatísticas da Turma
        </Link>
      </div>
      <br></br>
    </>
  )
}

export default AreaProfessor
