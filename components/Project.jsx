import React from 'react';

const Project = ({ data }) => {
  return (
    <>
      <div className="pt-24 ">
        <h2 className="text-[calc(1.8vh+1.8vw+1vmin)] text-center pb-28">
          My <span>Project</span>
        </h2>
        {data?.projects?.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
