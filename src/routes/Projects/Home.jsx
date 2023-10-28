import { useEffect, useState } from "react";
import ProjectGridItem from "../../components/ProjectGrid/ProjectGridItem";
import { getPersonalProjects } from "../../services/contentful";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async function () {
      const response = await getPersonalProjects();
      setProjects(() => response || []);
      setLoading(() => false);
    })();
  }, []);
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {loading ? (
            <div className="px-3 py-1 text-sm font-medium leading-none text-center text-zinc-800 rounded-full animate-pulse dark:text-zinc-100">
              Loading...
            </div>
          ) : projects.length == 0 ? (
            <div className="px-3 py-1 text-sm font-medium leading-none text-center text-zinc-800 rounded-full dark:text-zinc-100">
              No Activity
            </div>
          ) : (
            projects.map((project, index) => {
              return (
                <ProjectGridItem
                  key={`project_item_${index}`}
                  details={project}
                ></ProjectGridItem>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}
