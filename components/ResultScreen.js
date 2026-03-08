import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { cores } from '../constants/theme';

export default function ResultScreen({ acertos, erros, total, onJogarNovamente }) {
  const percentual = Math.round((acertos / total) * 100);

  function avaliacao() {
    if (percentual === 100) return { emoji: '🏆', texto: 'Lendário!',         cor: '#f1c40f' };
    if (percentual >= 70)  return { emoji: '⚔️',  texto: 'Aventureiro Nato!', cor: cores.acerto };
    if (percentual >= 40)  return { emoji: '🛡️',  texto: 'Aprendiz Promissor',cor: '#c87941' };
    return                        { emoji: '💀',  texto: 'O mal venceu!', cor: cores.erro };
  }

  const { emoji, texto, cor } = avaliacao();

  return (
    <View style={estilos.tela}>
      <Text style={estilos.emoji}>{emoji}</Text>
      <Text style={[estilos.avaliacao, { color: cor }]}>{texto}</Text>

      <View style={estilos.pergaminhoCard}>
        <Text style={estilos.percentual}>{percentual}%</Text>
        <Text style={estilos.pergaminhoTexto}>de domínio arcano</Text>
      </View>

      <View style={estilos.stats}>
        <View style={[estilos.statCard, { borderColor: cores.acerto }]}>
          <Text style={[estilos.statNum, { color: cores.acerto }]}>{acertos}</Text>
          <Text style={estilos.statLabel}>Acertos</Text>
        </View>
        <View style={[estilos.statCard, { borderColor: cores.erro }]}>
          <Text style={[estilos.statNum, { color: cores.erro }]}>{erros}</Text>
          <Text style={estilos.statLabel}>Erros</Text>
        </View>
        <View style={[estilos.statCard, { borderColor: cores.borda }]}>
          <Text style={[estilos.statNum, { color: cores.texto }]}>{total}</Text>
          <Text style={estilos.statLabel}>Total</Text>
        </View>
      </View>

      <TouchableOpacity style={estilos.botao} onPress={onJogarNovamente}>
        <Text style={estilos.botaoTexto}>🎲  Nova Sessão</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  emoji: {
    fontSize: 72,
    marginBottom: 12,
  },
  avaliacao: {
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 28,
  },
  pergaminhoCard: {
    backgroundColor: cores.card,
    borderWidth: 1,
    borderColor: cores.destaque,
    borderRadius: 4,
    paddingVertical: 20,
    paddingHorizontal: 48,
    alignItems: 'center',
    marginBottom: 36,
  },
  percentual: {
    fontSize: 60,
    fontWeight: 'bold',
    color: cores.destaque,
  },
  pergaminhoTexto: {
    fontSize: 14,
    color: cores.textoSecundario,
    fontStyle: 'italic',
    marginTop: 4,
  },
  stats: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 48,
  },
  statCard: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: cores.card,
  },
  statNum: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  statLabel: {
    color: cores.textoSecundario,
    fontSize: 13,
    marginTop: 4,
  },
  botao: {
    backgroundColor: cores.destaque,
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#e8c86a',
  },
  botaoTexto: {
    color: '#1a0e00',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
