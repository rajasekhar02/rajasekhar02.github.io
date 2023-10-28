import { useEffect, useState } from "react";
import { getLast10DaysReadings } from "src/services/runkit";
import ArticleListItem from "./ArticleListItem";

export default function ArticleList() {
  const [readArticles, setReadArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async function () {
      const readArticlesList = await getLast10DaysReadings();
      console.log(readArticlesList);
      setReadArticles(() => readArticlesList);
      setLoading(false);
    })();
  }, []);
  return (
    <div className="flex max-w-3xl flex-col space-y-16">
      {loading ? (
        <div className="px-3 py-1 text-sm font-medium leading-none text-center text-zinc-800 rounded-full animate-pulse dark:text-zinc-100">
          Loading...
        </div>
      ) : readArticles.length == 0 ? (
        <div className="px-3 py-1 text-sm font-medium leading-none text-center text-zinc-800 rounded-full dark:text-zinc-100">
          No Activity
        </div>
      ) : (
        readArticles.map((eachArticle, index) => (
          <ArticleListItem
            key={`reading-article-${index}`}
            title={eachArticle.blog_title}
            created_date={eachArticle.created_time}
            url={eachArticle.blog_url}
          />
        ))
      )}
    </div>
  );
}
