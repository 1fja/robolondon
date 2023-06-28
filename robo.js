const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});


client.on('message', message => {
	if(message.body.toLocaleLowerCase() === 'boa noite') {
		client.sendMessage(message.from, '*Olá 👋 ! Sou o 🤖assistente virtual do Colégio🤖 e Curso LONDON. Caso queira saber sobre algo abaixo, digite os numeros apresentados:*  1️⃣ - 📚 *MATRÍCULAS* \n \n  2️⃣ - 📑 *INFORMAÇÃO GERAL* \n \n  0️⃣- 👨‍💻 *ATENDIMENTO* ');
	}
    
    if(message.body.toLocaleLowerCase() === 'bom dia') {
		client.sendMessage(message.from, '*Olá 👋 ! Sou o 🤖assistente virtual🤖 do Colégio e Curso LONDON. Caso queira saber sobre algo abaixo, digite os numeros apresentados:* \n \n  1️⃣ - 📚 *MATRÍCULAS* \n \n  2️⃣ - 📑 *INFORMAÇÃO GERAL* \n \n  0️⃣- 👨‍💻 *ATENDIMENTO*  ');
	}
    
    if(message.body.toLocaleLowerCase() === 'boa tarde') {
		client.sendMessage(message.from, '*Olá 👋 ! Sou o 🤖assistente virtual🤖 do Colégio e Curso LONDON. Caso queira saber sobre algo abaixo, digite os numeros apresentados:* \n 1️⃣ - 📚 *MATRÍCULAS* \n \n  2️⃣ - 📑 *INFORMAÇÃO GERAL* \n \n  0️⃣- 👨‍💻 *ATENDIMENTO* ');
	}

    if(message.body.toLocaleLowerCase() === '1') {
		client.sendMessage(message.from, ' ✅ *Matrículas:* \n \n  💰 *Ensino Fundamental II (6° ao 9°): R$ 398,00 mensal 💰* \n \n   *💰 Ensino Médio: R$ 529,00 mensal 💰* \n \n *(Preços podem ser negociados na hora da inscrição.)* ');
	}
    if(message.body.toLocaleLowerCase() === '2') {
		client.sendMessage(message.from, ' *📍 Localização: Estrada do Galeão, 1192 - Jardim Carioca, Rio de Janeiro - RJ, 21931-001 📍* \n \n \n *🎓Ensino Fundamental, Médio, EJA, Vestibular, Pré-técnico e Militar.🎓* \n \n \n *🛡️ O Colégio London é uma instituição renomada com uma rica história de 50 anos de excelência acadêmica e conquistas significativas. Ao longo das últimas cinco décadas, o Colégio London tem sido um símbolo de educação de qualidade e compromisso com o sucesso dos seus alunos.*\n \n *Fundado em 1973, o Colégio London tem se destacado como um centro de ensino que proporciona uma educação abrangente e de alto padrão para estudantes de todas as idades.* \n \n *Desde o seu início, o colégio tem mantido um compromisso inabalável com a excelência acadêmica, buscando oferecer um ambiente de aprendizado estimulante e enriquecedor.* \n \n *Durante os últimos 50 anos, o Colégio London tem sido palco de inúmeras vitórias e conquistas. Seja nos campos esportivos, competições acadêmicas, atividades culturais ou projetos sociais, os estudantes do Colégio London têm demonstrado talento, dedicação e determinação em alcançar o sucesso. Essas vitórias não são apenas um reflexo do compromisso do colégio com a educação de qualidade, mas também do espírito de trabalho em equipe, liderança e valores éticos cultivados entre seus alunos.* \n \n *Através de uma abordagem educacional abrangente, o Colégio London tem se empenhado em preparar seus alunos para os desafios do mundo contemporâneo, desenvolvendo suas habilidades acadêmicas, intelectuais e socioemocionais. Os professores altamente qualificados e dedicados do colégio estão comprometidos em fornecer um ensino de excelência, apoiando cada aluno em sua jornada educacional e incentivando o pensamento crítico, a criatividade e a autodisciplina.* \n \n *Com uma infraestrutura moderna e recursos tecnológicos avançados, o Colégio London oferece um ambiente propício para a aprendizagem, estimulando a participação ativa dos alunos em aulas interativas, bibliotecas e espaços para atividades esportivas e artísticas.* \n \n *Ao longo de suas cinco décadas de existência, o Colégio London construiu uma sólida reputação como um dos principais colégios da região, preparando gerações de estudantes para alcançar o sucesso acadêmico, profissional e pessoal. 🛡️* \n \n \n  *🔓 Aberto de Segunda a Sexta, a partir das 07h até as 21h 🔒* \n \n \n  *🧑‍💻 Desenvolvido por: Gabriel Salles*');
	}
    if(message.body.toLocaleLowerCase() === '0') {
		client.sendMessage(message.from, '*🔄 Ok! Um atendente está sendo redirecionado. Isso pode levar alguns instantes...🔄*');
	}
    if(message.body.toLocaleLowerCase() === 'valeu') {
		client.sendMessage(message.from, '*De nada 😉! Foi um prazer em ter ajudado.*');
	}
    if(message.body.toLocaleLowerCase() === 'obrigado') {
		client.sendMessage(message.from, '*De nada 😉! Foi um prazer em ter ajudado.*');
	}
    if(message.body.toLocaleLowerCase() === 'obrigada') {
		client.sendMessage(message.from, '*De nada 😉! Foi um prazer em ter ajudado.*');
	}
});
client.initialize();
