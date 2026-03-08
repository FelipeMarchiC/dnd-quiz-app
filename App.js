import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { useState } from 'react';
import { Alert } from 'react-native';

import { iniciarBanco, carregarPerguntas } from './database/db';
import HomeScreen   from './components/HomeScreen';
import QuizScreen   from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';

const TOTAL_PERGUNTAS = 10;
const DELAY_PROXIMA   = 1200;

function QuizController() {
  const db = useSQLiteContext();
  const [tela, setTela] = useState('home');
  const [perguntas, setPerguntas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  async function iniciarJogo() {
    const qs = await carregarPerguntas(db, TOTAL_PERGUNTAS);
    setPerguntas(qs);
    setIndice(0);
    setAcertos(0);
    setErros(0);
    setRespostaSelecionada(null);
    setTela('quiz');
  }

  function onResponder(escolha) {
    if (respostaSelecionada) return;

    const atual   = perguntas[indice];
    const acertou = escolha === atual.resposta_certa;

    setRespostaSelecionada(escolha);
    if (acertou) setAcertos(a => a + 1);
    else         setErros(e => e + 1);

    setTimeout(() => {
      setRespostaSelecionada(null);
      const proximoIndice = indice + 1;

      if (proximoIndice >= perguntas.length) {
        setTela('result');
      } else {
        setIndice(proximoIndice);
      }
    }, DELAY_PROXIMA);
  }

  if (tela === 'home')   return <HomeScreen onIniciar={iniciarJogo} />;
  if (tela === 'result') return <ResultScreen acertos={acertos} erros={erros} total={perguntas.length} onJogarNovamente={iniciarJogo} />;

  return (
    <QuizScreen
      pergunta={perguntas[indice]}
      indice={indice}
      total={perguntas.length}
      acertos={acertos}
      erros={erros}
      respostaSelecionada={respostaSelecionada}
      onResponder={onResponder}
    />
  );
}

export default function App() {
  return (
    <SQLiteProvider databaseName="quiz.db" onInit={iniciarBanco}>
      <QuizController />
    </SQLiteProvider>
  );
}
