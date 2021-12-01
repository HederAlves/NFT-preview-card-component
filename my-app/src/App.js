import React, { useState } from 'react';

export default function App() {
  const [novaTarefa, setNovaTarefa] = React.useState('');
  const [tarefas, setTarefas] = React.useState(['Tarefa 1', 'Tarefa 2']);

  function changeNovaTarefa(evento) {
    setNovaTarefa(evento.target.value);
  }

  function submitNovaTarefa(evento) {
    evento.preventDefault();
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa('');
  }

  function removeTarefa(indice) {
    const novoVetor = [...tarefas];
    novoVetor.splice(indice, 1);
    setTarefas(novoVetor);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Lista de Tarefas</h1>
        </div>
      </div>
      <form onSubmit={submitNovaTarefa}>
        <div className="row">
          <div className="col-auto">
            <label htmlfor="novaTarefa" className="col-form-label">Nova Tarefa</label>
        </div>
        <div className="col">
          <input type="text" name="novaTarefa" id="novaTarefa" className="form-control" value={novaTarefa} onChange={changeNovaTarefa} />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">Criar Tarefa</button>
        </div>
      </div>
      </form>
      <ul className="list-group mt-5">
        {tarefas.map(mostrarItemLista)}
      </ul>
    </div>
  );
  }

  function mostrarItemLista(nomeTarefa, indice, removeTarefa) {
    return (
      <li className="List-group-item" key={indice}>
        <div className="row">
          <div className="col">
              {nomeTarefa}
          </div>
          <div className="col-auto">
             <button type="button" className="btn-close" onClick={function() { removeTarefa(indice); }}></button>
          </div>
        </div>
      </li>
    )
  }