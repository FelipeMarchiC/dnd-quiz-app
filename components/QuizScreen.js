import { View, Text, TouchableOpacity, StyleSheet, Animated, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useRef } from 'react';
import { cores } from '../constants/theme';

const LETRAS = ['a', 'b', 'c', 'd'];

export default function QuizScreen({ pergunta, indice, total, acertos, erros, respostaSelecionada, onResponder }) {
  const progressoAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressoAnim, {
      toValue: (indice + 1) / total,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [indice]);

  const larguraBarra = progressoAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  function corFundo(letra) {
    if (!respostaSelecionada) return cores.neutro;
    if (letra.toUpperCase() === pergunta.resposta_certa) return cores.acerto;
    if (letra.toUpperCase() === respostaSelecionada) return cores.erro;
    return cores.neutro;
  }

  function corBorda(letra) {
    if (!respostaSelecionada) return cores.borda;
    if (letra.toUpperCase() === pergunta.resposta_certa) return cores.acerto;
    if (letra.toUpperCase() === respostaSelecionada) return cores.erro;
    return cores.borda;
  }

  if (!pergunta) return null;

  return (
    <SafeAreaView style={estilos.tela}>
      <View style={estilos.header}>
        <Text style={estilos.contador}>Pergunta {indice + 1} de {total}</Text>
        <View style={estilos.placar}>
          <Text style={[estilos.placarItem, { color: cores.acerto }]}>✅ {acertos}</Text>
          <Text style={[estilos.placarItem, { color: cores.erro }]}>  ❌ {erros}</Text>
        </View>
      </View>

      <View style={estilos.centro}>
        
        <View style={estilos.progressoBg}>
          <Animated.View style={[estilos.progressoFill, { width: larguraBarra }]} />
        </View>

        <View style={estilos.card}>
          <Text style={estilos.perguntaTexto}>{pergunta.pergunta}</Text>
        </View>

        <View style={estilos.opcoes}>
          {LETRAS.map((letra) => (
            <TouchableOpacity
              key={letra}
              style={[estilos.opcaoBotao, { backgroundColor: corFundo(letra), borderColor: corBorda(letra) }]}
              onPress={() => !respostaSelecionada && onResponder(letra.toUpperCase())}
              activeOpacity={respostaSelecionada ? 1 : 0.7}
            >
              <View style={estilos.letraBox}>
                <Text style={estilos.letraTexto}>{letra.toUpperCase()}</Text>
              </View>
              <Text style={estilos.opcaoTexto}>{pergunta[`opcao_${letra}`]}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  contador: {
    color: cores.textoSecundario,
    fontSize: 15,
  },
  placar: {
    flexDirection: 'row',
  },
  placarItem: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  centro: {
    flex: 1,
    justifyContent: 'center',
    gap: 14,
  },

  progressoBg: {
    height: 6,
    backgroundColor: cores.neutro,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressoFill: {
    height: '100%',
    backgroundColor: cores.destaque,
    borderRadius: 3,
  },

  card: {
    backgroundColor: cores.card,
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: cores.borda,
    minHeight: 100,
    justifyContent: 'center',
  },
  perguntaTexto: {
    color: cores.texto,
    fontSize: 19,
    fontWeight: '600',
    lineHeight: 28,
    textAlign: 'center',
  },
  opcoes: {
    gap: 10,
  },
  opcaoBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    padding: 12,
  },
  letraBox: {
    width: 30,
    height: 30,
    borderRadius: 6,
    backgroundColor: cores.borda,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  letraTexto: {
    color: cores.texto,
    fontWeight: 'bold',
    fontSize: 14,
  },
  opcaoTexto: {
    color: cores.texto,
    fontSize: 15,
    flex: 1,
  },
});
