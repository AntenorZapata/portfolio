import wallet from '../imgs/wallet.png';
import recipes from '../imgs/recipes.png';

const projetos = [
  {
    id: 1,
    name: 'Wallet',
    img: wallet,
    desc:'O app Wallet é uma carteira de controle de gastos com conversor de moedas. Nele é possível adicionar, remover, arquivar e editar um gasto; visualizar os dados da despesa e visualizar o total de gastos – cálculo feito com base no câmbio atual das moedas escolhidas – awesomeAPI de Cotações. Utilizei React, Redux e Sass para o estilo. O layout tem como foco dispositivos móveis.',
    techs: 'React / Redux / Sass',
    linkGit: 'https://github.com/AntenorZapata/WalletApp',
    linkPage: 'https://reverent-jackson-784b2e.netlify.app/',
  },
  {
    id: 2,
    name: 'Recipes',
    img: recipes,
    desc:
      'Esse projeto foi desenvolvido em grupo. Nele é possível buscar, filtrar, favoritar e acompanhar receitas de comidas e drinks. Utilizamos React (Hooks, Context API, componentização) e Bootstrap para o estilo de alguns itens. Os dados foram fornecidos pelas API’s TheMealDBAPI e The CockTailsDBAPI. O layout tem como foco dispositivos móveis.',
    techs: `React / Hooks / Context / CSS`,
    linkGit: 'https://github.com/AntenorZapata/recipes',
    linkPage: 'https://agitated-bell-17c42f.netlify.app/',
  },
];

export default projetos;
