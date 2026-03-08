import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { cores } from '../constants/theme';

export default function HomeScreen({ onIniciar }) {
  return (
    <View style={estilos.tela}>
      <View style={estilos.iconeBorda}>
        <Image
          source={require('../assets/dnd-icon.png')}
          style={estilos.icone}
          resizeMode="contain"
        />
      </View>

      <Text style={estilos.titulo}>⚔️ D&D Quiz</Text>
      <Text style={estilos.subtitulo}>Prove seu conhecimento em RPG de Mesa</Text>

      <View style={estilos.separador} />

      <Text style={estilos.detalhe}>🎲 10 perguntas por sessão</Text>
      <Text style={estilos.detalhe}>📜 50 perguntas no grimório</Text>

      <TouchableOpacity style={estilos.botao} onPress={onIniciar}>
        <Text style={estilos.botaoTexto}>▶  Entrar na Masmorra</Text>
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
  iconeBorda: {
    borderWidth: 2,
    borderColor: cores.destaque,
    borderRadius: 80,
    padding: 10,
    marginBottom: 24,
    backgroundColor: cores.card,
    shadowColor: cores.destaque,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 10,
  },
  icone: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  titulo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: cores.destaque,
    letterSpacing: 2,
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 15,
    color: cores.textoSecundario,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 32,
  },
  separador: {
    width: '60%',
    height: 1,
    backgroundColor: cores.borda,
    marginBottom: 24,
  },
  detalhe: {
    fontSize: 15,
    color: cores.texto,
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  botao: {
    marginTop: 36,
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
