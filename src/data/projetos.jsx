import todo from '../imgs/todos.png';
import port from '../imgs/port.png';

const projetos = [
  {
    id: 0,
    name: 'Portfólio',
    img: port,
    desc:
      'Este site em que você está foi o meu primeiro projeto em React. Nele puder lidar com conceitos essenciais da tecnologia, como State, Props, Hooks, Router, dentre outros. Usei, também, Sass para o estilo, React Icons para os links e o serviço EmailJS para o formulário. React é uma ferramenta incrivel com a qual desejo trabalhar no futuro. :) ',
    techs: 'React / Sass / EmailJS',
    linkGit: 'https://github.com/AntenorZapata',
    linkPage: '',
  },
  {
    id: 1,
    name: 'Todo-List',
    img: todo,
    desc:
      'Talvez o projeto mais comum na área de desenvolvimento, ainda assim, uma ótima introdução à linguagem (JavaScript). Neste, em especial, implementei diferentes funções: adicionar e apagar uma tarefa; salvar a lista no local storage; marcar tarefas já realizadas; movimentar os itens e apagar a lista. Sobre o estilo, optei por um visual mais clean (minimalista), uma estética que busco sempre em meus projetos.',
    techs: `HTML / Sass / JavaScript`,
    linkGit: 'https://github.com/AntenorZapata/minimaList',
    linkPage: 'https://silly-wozniak-80a536.netlify.app',
  },
];

export default projetos;
