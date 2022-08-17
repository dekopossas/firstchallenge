import { useState } from 'react';

import '../styles/tasklist.scss';

import { FiTrash, FiCheckSquare } from 'react-icons/fi';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [institutName, setInstitutName] = useState('');
  const [institutJson, setInstitutJson] = useState('');
  const [trabalhabilit, setTrabalhabilit] = useState('');
  const [institutSeed, setInstitutSeed] = useState('');

  function handleCreateNewTask() {
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
    const newTask = {
      id: Math.random(),
      // title: newTaskTitle,
      isComplete: false,
    };

    // setTasks((oldState) => [...oldState, newTask]);
    // setNewTaskTitle('');
  }

  function handleToggleTaskCompletion(id: number) {
    // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
    const tasksEdited = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task,
    );

    setTasks(tasksEdited);
  }

  function handleRemoveTask(id: number) {
    // Remova uma task da listagem pelo ID
    const currentArr = tasks.filter((task) => task.id !== id);
    setTasks(currentArr);
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input
            style={{ width: '100px' }}
            type="text"
            placeholder="Instituição"
            onChange={(e) => setInstitutName(e.target.value)}
            value={institutName}
          />
          <input
            type="text"
            placeholder="Json da Instituição"
            onChange={(e) => setInstitutJson(e.target.value)}
            value={institutJson}
          />
            <input
              style={{ width: '120px' }}
              type="text"
              placeholder="Trabalhabilidade"
              onChange={(e) => setTrabalhabilit(e.target.value)}
              value={trabalhabilit}
            />
          <input
            style={{ width: '100px' }}
            type="text"
            placeholder="Candidaturas"
            onChange={(e) => setInstitutSeed(e.target.value)}
            value={institutSeed}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>

      <main>
        <table>
          <tr>
            <th>Instituição</th>
            <th>Integrados</th>
            <th>Ativos</th>
            <th>Curriculos</th>
            <th>Aguardando</th>
            <th>Aceitos</th>
            <th>Extracurriculares</th>
            <th>Vagas</th>
            <th>Trabalhabilidade</th>
            <th>Candidaturas</th>
            <th>Actions</th>
          </tr>
          {/* {instituteTable.map((institute) => {})} */}
          <tr>
            <td>UVA</td>
            <td>12345125</td>
            <td>123</td>
            <td>432</td>
            <td>151</td>
            <td>6123</td>
            <td>43</td>
            <td>12</td>
            <td>4321</td>
            <td>43</td>
            <td>
              <button> \/ </button>
              <button> X </button>
              <button> /\ </button>
            </td>
          </tr>
          <tr>
            <td>UVA</td>
            <td>12345125</td>
            <td>123</td>
            <td>432</td>
            <td>151</td>
            <td>6123</td>
            <td>43</td>
            <td>12</td>
            <td>4321</td>
            <td>43</td>
            <td>
              <button> \/ </button>
              <button> X </button>
              <button> /\ </button>
            </td>
          </tr>
        </table>
      </main>
    </section>
  );
}
