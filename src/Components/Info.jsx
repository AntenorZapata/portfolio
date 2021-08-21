import file from '../imgs/resume.pdf';
import React from 'react';
// import image from '../imgs/nokspb.jpeg';

function Info() {
  return (
    <div className='image-section'>
      <div className='img'>
        {/* <img src={image} alt='' /> */}
      </div>
      <div className='about-info'>
        <h4>
          Me chamo<span> Antenor Zapata</span>
        </h4>

        <div className='about-details'>
          <div className='story-datails'>
            <p className='description'>
              Sempre apaixonado por tecnologia, descobri que é com
              Desenvolvimento de Software que consigo unir o "quem eu sou" ao "o
              que eu gosto": <span> dar vazão à minha curiosidade</span>;{' '}
              <span>
                detectar problemas, encontrar soluções e aprender com elas
              </span>
              ;<span> ser colaborativo no ambiente de trabalho</span>;
              <span> construir coisas que afetam pessoas</span>.
              Atualmente, curso o segundo semestre de <span> Ciência da Computação</span> e estudo Desenvolvimento Web Full Stack na <span>Trybe</span> , escola com metodologia ativa, focada na elaboração de projetos e trabalho em equipe.
              <br/>
               Experiência com:
              • JavaScript (React/Redux, Node.js)
              • Banco de dados (MySQL, MongoDB)
              • Controle de Versão (Git, Github)
              • Metodologias Ágeis (Scrum, Kanban)
              • Testes (TDD)
              • Outras tecnologias: Python, Java, HTML 5, CSS e SASS.
            </p>
          </div>
        </div>
        <div className='btn'>
          <button>
            <a className='resume' target='_blank' rel='noreferrer' href={file}>
              DOWNLOAD CV
            </a>
          </button>
        </div>
      </div>
      <div className='line'></div>
    </div>
  );
}

export default Info;
