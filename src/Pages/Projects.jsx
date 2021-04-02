import Title from '../Components/Title';
import projetos from '../data/projetos';
import Btn from '../Components/Btn';
import SingleProject from '../Components/SingleProject';
import React, { useState } from 'react';

function Projects() {
  const [data, setData] = useState(projetos);
  const [show, setShow] = useState(false);
  const all = 'voltar';

  const handleFilter = (value) => {
    if (value === 'voltar') {
      setShow(false);
      return setData(projetos);
    }
    setData(
      projetos.filter((i) => {
        setShow(true);
        return i.name === value;
      })
    );
  };

  return (
    <div className="projects-page">
      <div className="title-project">
      <Title text={'Projetos'} shadow={'Projetos'} />
      </div>

      <div className="projects">
        <div className="labels">
          <Btn modal={show} labels={all} handleFilter={handleFilter} />
        </div>
        <div className="single-project">
          {data.map((item) => {
            return (
              <SingleProject
                handleFilter={handleFilter}
                modal={show}
                projects={item}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
