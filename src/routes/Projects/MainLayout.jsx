import ProjectGridItem from "../../components/ProjectGrid/ProjectGridItem";

export default function MainLayout(){
    const dummyProjects = [{
      name:"CPP-Practice",
      github_link: "https://github.com/rajasekhar02/CPP-Practice",
      description: "C++ Code I written",
      image_url: undefined
    }]
    return ( <div className="mx-auto max-w-2xl lg:max-w-5xl">
    <header className="max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Things I’ve made trying to put my dent in the universe.
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        I’ve worked on tons of little projects over the years but
        these are the ones that I’m most proud of. Many of them are
        open-source, so if you see something that piques your
        interest, check out the code and contribute if you have ideas
        for how it can be improved.
      </p>
    </header>
    <div className="mt-16 sm:mt-20">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
       <ProjectGridItem details={dummyProjects[0]}> </ProjectGridItem>
      </ul>
    </div>
  </div>)
}