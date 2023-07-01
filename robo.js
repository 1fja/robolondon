const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    const lowercaseBody = message.body.toLowerCase();

    if (lowercaseBody === 'boa noite' || lowercaseBody === 'bom dia' || lowercaseBody === 'boa tarde') {
        client.sendMessage(message.from, `*Olá 👋 ! Sou o 🤖assistente virtual🤖 do Complexo de educação LONDON. Caso queira saber sobre algo abaixo, digite os números apresentados:* \n \n 1️⃣ - 📚 *MATRÍCULAS* \n \n 2️⃣ - 📑 *INFORMAÇÕES GERAIS* \n \n 0️⃣ - 👨‍💻 *ATENDIMENTO* `);
    } else if (lowercaseBody !== '1' && lowercaseBody !== '2' && lowercaseBody !== '0' && lowercaseBody !== '5') {
        client.sendMessage(message.from, `*Olá 👋 ! Sou o 🤖assistente virtual🤖 do Complexo de educação LONDON. Caso queira saber sobre algo abaixo, digite os números apresentados:* \n \n 1️⃣ - 📚 *MATRÍCULAS* \n \n 2️⃣ - 📑 *INFORMAÇÕES GERAIS* \n \n 0️⃣ - 👨‍💻 *ATENDIMENTO* `);
    }

    if (lowercaseBody === '1') {
        client.sendMessage(message.from, '✅ *Matrículas:* \n \n 💰 *Ensino Fundamental II (6° ao 9°): R$ 398,00 mensal 💰* \n \n *💰 Ensino Médio: R$ 529,00 mensal 💰* \n \n *(Preços podem ser negociados na hora da inscrição.)*');
    }
    if (lowercaseBody === '2') {
        client.sendMessage(message.from, `*📍 Localização: Estrada do Galeão, 1192 - Jardim Carioca, Rio de Janeiro - RJ, 21931-001 📍* \n \n \n *🎓Ensino Fundamental, Médio, EJA, Vestibular, Pré-técnico e Militar.🎓* \n \n \n *🛡️ O Colégio London é uma instituição renomada com uma rica história de 50 anos de excelência acadêmica e conquistas significativas. Ao longo das últimas cinco décadas, o Colégio London tem sido um símbolo de educação de qualidade e compromisso com o sucesso dos seus alunos.*\n \n *Fundado em 1973, o Colégio London tem se destacado como um centro de ensino que proporciona uma educação abrangente e de alto padrão para estudantes de todas as idades.* \n \n *Desde o seu início, o colégio tem mantido um compromisso inabalável com a excelência acadêmica, além de oferecer uma ampla gama de oportunidades para o desenvolvimento pessoal e profissional dos seus alunos.*`);
    }
    if (lowercaseBody === '0') {
        client.sendMessage(message.from, '*📞 Entre em contato com nossa equipe de atendimento para obter mais informações: 📞* \n \n *☎️ Telefone: (21) 1234-5678* \n \n *📧 E-mail: atendimento@colegiolondon.com.br* \n \n *Caso queria falar com um atendente agora digite 5*');
    }
	if (lowercaseBody === '5') {
        client.sendMessage(message.from, '*🔄 Ok! Um atendente está sendo redirecionado. Isso pode levar alguns instantes...🔄*');
    }

});

client.initialize();
