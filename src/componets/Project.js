import SanityBlockContent from "@sanity/block-content-to-react";
import React, { useState, useEffect } from "react";
import sanityClient from "../Client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
  title,
  date,
  place,
  description,
  projectType,
  link,
  tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className='bg-green-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-4xl flex justify-center cursive mb-2'>
          My Project
        </h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-10 font-mono	'>
          Welcome to my projects page ✌
        </h2>
        <section className='grid grid-cols-2 gap-8'>
          {projectData &&
            projectData.map((project, index) => (
              <article className='relative rounded-lg shadow-xl bg-white p-16'>
                <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
                  <a
                    href={project.link}
                    alt={project.title}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {project.title}
                  </a>
                </h3>
                <div className='text-gray-500 text-xs space-x-4'>
                  <span>
                    <strong className='font-bold'>Tags</strong>:
                    {` ${project.tags}`}
                  </span>
                  <br /> <br />
                  <SanityBlockContent
                    blocks={project.description}
                    projectId='8m4jdtk5'
                    dataset='production'
                  />
                  <br />
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-red-500 font-bold hover:underline hover:text-red-400'
                  >
                    View The Project{" "}
                    <span role='img' aria-label='right pointer'>
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
