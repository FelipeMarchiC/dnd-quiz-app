export async function iniciarBanco(db) {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS perguntas (
      id             INTEGER PRIMARY KEY AUTOINCREMENT,
      pergunta       TEXT,
      opcao_a        TEXT,
      opcao_b        TEXT,
      opcao_c        TEXT,
      opcao_d        TEXT,
      resposta_certa TEXT
    );
  `);

  const { total } = await db.getFirstAsync('SELECT COUNT(*) as total FROM perguntas');
  if (total > 0) return;

  await db.execAsync(`
    INSERT INTO perguntas VALUES (null,'Quantos lados tem o dado "d20"?','10','12','20','100','C');
    INSERT INTO perguntas VALUES (null,'Qual classe usa um Livro de Feitiços (Spellbook)?','Feiticeiro','Mago','Druida','Bardo','B');
    INSERT INTO perguntas VALUES (null,'Qual raça élfica tem o subtipo "Drow"?','Anão','Halfling','Humano','Elfo','D');
    INSERT INTO perguntas VALUES (null,'Qual é o Hit Die (dado de vida) do Bárbaro?','d6','d8','d10','d12','D');
    INSERT INTO perguntas VALUES (null,'Qual atributo governa os feitiços do Clérigo?','Inteligência','Carisma','Sabedoria','Força','C');
    INSERT INTO perguntas VALUES (null,'Qual classe possui a habilidade "Sneak Attack"?','Guerreiro','Ranger','Ladino','Monge','C');
    INSERT INTO perguntas VALUES (null,'Qual é o nível máximo de personagem em D&D 5e?','10','15','20','25','C');
    INSERT INTO perguntas VALUES (null,'Dragões vermelhos causam qual tipo de dano?','Gelo','Fogo','Ácido','Raio','B');
    INSERT INTO perguntas VALUES (null,'Quantos atributos principais existem em D&D 5e?','4','5','6','8','C');
    INSERT INTO perguntas VALUES (null,'Qual classe pode se transformar em animais com "Wild Shape"?','Paladino','Ranger','Druida','Xamã','C');
    INSERT INTO perguntas VALUES (null,'O que significa "AC" em D&D?','Attack Count','Action Cost','Armor Class','Arcane Charge','C');
    INSERT INTO perguntas VALUES (null,'Qual dado determina o dano de uma espada longa usada com uma mão?','d6','d10','d8','d12','C');
    INSERT INTO perguntas VALUES (null,'Qual tirada determina a ordem de combate?','Percepção','Iniciativa','Destreza','Atletismo','B');
    INSERT INTO perguntas VALUES (null,'Qual escola de magia lida com ilusões?','Abjuração','Evocação','Necromancia','Ilusão','D');
    INSERT INTO perguntas VALUES (null,'O que é um "Natural 20"?','Falha automática','Dano máximo','Acerto crítico','Bônus de +5','C');
    INSERT INTO perguntas VALUES (null,'Qual atributo é base para o teste de Furtividade (Stealth)?','Força','Destreza','Sabedoria','Constituição','B');
    INSERT INTO perguntas VALUES (null,'Qual classe usa "Ki points" como recurso de classe?','Druida','Ladino','Bardo','Monge','D');
    INSERT INTO perguntas VALUES (null,'Qual raça pequena é conhecida pela habilidade "Lucky" (Sorte)?','Gnomo','Anão','Halfling','Tiefling','C');
    INSERT INTO perguntas VALUES (null,'Qual feitiço de 3º nível cria uma esfera de fogo explosiva?','Míssil Mágico','Relâmpago','Mão Ardente','Bola de Fogo','D');
    INSERT INTO perguntas VALUES (null,'Qual é a escola de magia do feitiço "Invisibilidade"?','Transmutação','Abjuração','Ilusão','Encantamento','C');
    INSERT INTO perguntas VALUES (null,'Qual classe tem a habilidade "Divine Smite"?','Clérigo','Guerreiro','Paladino','Ranger','C');
    INSERT INTO perguntas VALUES (null,'Qual raça tem naturalmente +2 em Destreza em D&D 5e?','Anão','Elfo','Halfling','Tiefling','B');
    INSERT INTO perguntas VALUES (null,'O que é "Vantagem" (Advantage) em D&D 5e?','Bônus fixo de +2','Rolar 2d20 e usar o maior','Somar dois d20','Ignorar resistências','B');
    INSERT INTO perguntas VALUES (null,'O que é um "Beholder"?','Dragão sem asas','Aberração de múltiplos olhos','Demônio das chamas','Golem de pedra','B');
    INSERT INTO perguntas VALUES (null,'O que é um "Natural 1" em D&D?','Acerto crítico','Dano dobrado','Falha crítica','Ataque ignorado','C');
    INSERT INTO perguntas VALUES (null,'Qual classe usa "Bardic Inspiration" como habilidade central?','Druida','Bardo','Clérigo','Feiticeiro','B');
    INSERT INTO perguntas VALUES (null,'Qual é o dado de dano de um punhal (Dagger)?','d6','d8','d4','d10','C');
    INSERT INTO perguntas VALUES (null,'O que é "Multiclassing"?','Ter dois personagens simultâneos','Ter níveis em mais de uma classe','Mudar de raça','Usar dois dados','B');
    INSERT INTO perguntas VALUES (null,'Qual feitiço lendário de 9º nível realiza qualquer desejo?','Milagre','Transcendência','Ressurreição','Wish','D');
    INSERT INTO perguntas VALUES (null,'Qual escola de magia é especializada em invocar e criar criaturas?','Evocação','Necromancia','Transmutação','Conjuração','D');
    INSERT INTO perguntas VALUES (null,'Qual famoso Drow é um Ranger icônico do Forgotten Realms?','Elminster','Drizzt Do''Urden','Gandalf','Raistlin','B');
    INSERT INTO perguntas VALUES (null,'Qual criatura mitológica petrifica vítimas com o olhar em D&D?','Harpia','Medusa','Quimera','Grifo','B');
    INSERT INTO perguntas VALUES (null,'Qual é o alinhamento de um patrulheiro honrado e bondoso?','Neutro','Caótico e Bom','Leal e Bom','Leal e Neutro','C');
    INSERT INTO perguntas VALUES (null,'Qual livro oficial lista todos os monstros de D&D 5e?','Dungeon Master Guide','Xanathar Guide','Monster Manual','Volo Guide','C');
    INSERT INTO perguntas VALUES (null,'Qual dado é chamado de "percentual" em D&D?','d20','d12','d10','d100','D');
    INSERT INTO perguntas VALUES (null,'Qual classe conjura magia através do Carisma inato, sem estudar?','Mago','Clérigo','Feiticeiro','Druida','C');
    INSERT INTO perguntas VALUES (null,'Qual habilidade do Meio-Orc o impede de cair a 0 PVs uma vez por dia?','Fúria','Resistência Implacável','Pele Grossa','Ameaçador','B');
    INSERT INTO perguntas VALUES (null,'Como funciona o dano crítico em D&D 5e?','Dano máximo fixo','Triplo do dado base','Rola os dados de dano duas vezes','Bônus fixo de +10','C');
    INSERT INTO perguntas VALUES (null,'Qual atributo rege os feitiços do Mago?','Sabedoria','Carisma','Constituição','Inteligência','D');
    INSERT INTO perguntas VALUES (null,'Qual é o Hit Die (dado de vida) do Guerreiro?','d6','d8','d10','d12','C');
    INSERT INTO perguntas VALUES (null,'Qual raça tem visão no escuro e resistência a venenos nativamente?','Halfling','Tiefling','Elfo','Anão','D');
    INSERT INTO perguntas VALUES (null,'Quantos ataques um Guerreiro de nível 5 realiza por rodada?','1','2','3','4','B');
    INSERT INTO perguntas VALUES (null,'Qual escola de magia é especializada em transformar matéria e energia?','Abjuração','Transmutação','Conjuração','Divinação','B');
    INSERT INTO perguntas VALUES (null,'Qual é o feitiço de cura de 1º nível mais básico do Clérigo?','Luz','Curar Ferimentos','Bênção','Flamejante Sagrado','B');
    INSERT INTO perguntas VALUES (null,'O que é um "Short Rest" em D&D 5e?','Dormir 8 horas','Pausa de 1 hora para usar Dados de Vida','Teleportar para área segura','Meditação de transe élfico','B');
    INSERT INTO perguntas VALUES (null,'Qual criatura é vulnerável à prata e se transforma na lua cheia?','Vampiro','Lich','Lobisomem','Zumbi','C');
    INSERT INTO perguntas VALUES (null,'O que é um "Lich" em D&D?','Um dragão ancião corrompido','Um conjurador morto-vivo de imenso poder','Um semideus guerreiro','Um golem mágico','B');
    INSERT INTO perguntas VALUES (null,'Qual classe possui a habilidade "Rage" (Fúria)?','Guerreiro','Patrulheiro','Paladino','Bárbaro','D');
    INSERT INTO perguntas VALUES (null,'Qual tipo de dano os dragões negros causam?','Fogo','Gelo','Ácido','Veneno','C');
    INSERT INTO perguntas VALUES (null,'Qual atributo define o valor de Percepção Passiva de um personagem?','Inteligência','Carisma','Sabedoria','Destreza','C');
  `);
}

export async function carregarPerguntas(db, quantidade = 10) {
  const todas = await db.getAllAsync('SELECT * FROM perguntas');
  return embaralhar(todas).slice(0, quantidade);
}

function embaralhar(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
