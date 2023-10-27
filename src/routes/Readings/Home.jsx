import ArticleList from "src/components/ArticleList";
export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            My Weekly Learning Nuggets
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {` Welcome to my weekly learning review! Here's a look at what I've
            been reading and watching lately, and what I've learned. I'm always
            on the lookout for new and interesting things to learn, so I'm
            excited to share this week's picks with you. I hope you find
            something that interests you, too!`}
          </p>
        </header>
        <div className="mt-16 sm:mt-20">
          <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
            <ArticleList />
          </div>
        </div>
      </div>
    </>
  );
}
