import { useState } from 'react';

import '../styles/tasklist.scss';

import { FiTrash, FiCheckSquare } from 'react-icons/fi';

interface Line {
  id: number;
  name: string;
  integrated: string;
  actived: string;
  curriculum: string;
  waiting: string;
  accepted: string;
  extracurriculars: string;
  vacant: string;
  workability: string;
  candidacy: string;
}

export function TaskList() {
  const [lines, setLines] = useState<Line[]>([]);
  const [institutName, setInstitutName] = useState('');
  const [institutJson, setInstitutJson] = useState('');
  const [workabilityInput, setWorkabilityInput] = useState('0');
  const [institutSeed, setInstitutSeed] = useState('0');

  function handleCreateNew() {
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
    const data = JSON.parse(institutJson);

    const newLine = {
      id: lines.length + 1,
      name: institutName,
      integrated: data.result.total_students,
      actived: data.result.total_students_answered_professional_status,
      curriculum: data.result.total_students_curriculum,
      waiting:
        data.result.total_companies_invites.received.waiting +
        data.result.total_companies_invites.sent.waiting,
      accepted:
        data.result.total_companies_invites.received.accepted +
        data.result.total_companies_invites.sent.accepted,
      extracurriculars: data.result.total_attractions.total,
      vacant: data.result.total_job_offers.total.total,
      workability: workabilityInput,
      candidacy: institutSeed,
    };

    // setTasks((oldState) => [...oldState, newTask]);
    // setNewTaskTitle('');
  }

  function handleRemoveTask(id: number) {
    // Remova uma task da listagem pelo ID
    const currentArr = lines.filter((line) => line.id !== id);
    setLines(currentArr);
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
            onChange={(e) => setWorkabilityInput(e.target.value)}
            value={workabilityInput}
          />
          <input
            style={{ width: '100px' }}
            type="text"
            placeholder="Candidaturas"
            onChange={(e) => setInstitutSeed(e.target.value)}
            value={institutSeed}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNew}>
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
