import file from '../imgs/resume.pdf';
import React from 'react';
import image from '../imgs/nokspb.jpeg';

function Info() {
  return (
    <div className='image-section'>
      <div className='img'>
        <img src={image} alt='' />
      </div>
      <div className='about-info'>
        <h4>
          Me chamo<span> Antenor Zapata</span>
        </h4>

        <div className='about-details'>
          <div className='story-datails'>
            <p className='description'>
              Com uma trajetória na música e no jornalismo, tenho experiência em
              comunicação empresarial, produção de texto e vídeo e atendimento
              ao cliente. Sempre apaixonado por tecnologia, resolvi, após anos
              atuando em outras áreas, apostar no sonho antigo de me tornar
              programador. Já num primeiro contato percebi que é com
              Desenvolvimento de Software que consigo unir o "quem eu sou" ao "o
              que eu gosto": <span> dar vazão à minha curiosidade</span>;{' '}
              <span>
                detectar problemas, encontrar soluções e aprender com elas
              </span>
              ;<span> ser colaborativo no ambiente de trabalho</span>;
              <span> construir coisas que afetam pessoas</span>. Nesta página
              você poderá encontrar projetos, pessoais e profissionaiDownload
              Pdfs, que venho realizando ao longo dessa jornada. Stay tuned! : ]
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
