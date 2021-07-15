import wallet from '../imgs/wallet.png';
import recipes from '../imgs/recipes.png';

const projetos = [
  {
    id: 0,
    name: 'Wallet',
    img: wallet,
    desc:'O app Wallet é uma carteira de controle de gastos com conversor de moedas. Nele é possível adicionar, remover, arquivar e editar um gasto; visualizar os dados da despesa e visualizar o total de gastos – cálculo feito com base no câmbio atual das moedas escolhidas – awesomeAPI de Cotações. O layout tem como foco dispositivos móveis.',
    techs: 'React / Redux / Sass',
    linkGit: 'https://github.com/AntenorZapata/WalletApp',
    linkPage: 'https://reverent-jackson-784b2e.netlify.app/',
  },
  {
    id: 2,
    name: 'Recipes',
    img: recipes,
    desc:
      'O Recipes é um aplicativo para consulta de receitas de comidas e bebidas. Nele é possível: buscar, filtrar, favoritar e acompanhar o processo de preparação de alimentos e drinks. Utilizei React com foco em Hooks, Context API e componentização. Usei, também, Bootstrap para o estilo de alguns itens. A base de dados são duas API’s distintas, uma para comidas e outra para bebidas. O layout tem como foco dispositivos móveis.',
    techs: `HTML / Sass / JavaScript`,
    linkGit: 'https://github.com/AntenorZapata/recipes',
    linkPage: 'https://github.com/AntenorZapata/recipes',
  },
];

export default projetos;
