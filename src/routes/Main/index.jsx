import ArticleList from "../../components/ArticleList";
import SocialMediaBar from "../../components/SocialMediaBar";
import ProfessionalDetails from "src/components/ProfessionalDetails";
import { useAboutMe } from "src/routes/AboutMe/AboutMeContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import get from "lodash.get";
import { BLOCKS } from "@contentful/rich-text-types";
import PropTypes from "prop-types";

const ContentFulNodeText = ({ children }) => (
  <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 pb-2 first-of-type:pt-2">
    {children}
  </p>
);

ContentFulNodeText.propTypes = {
  children: PropTypes.element
};

export default function Main() {
  const aboutMeContext = useAboutMe();

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <ContentFulNodeText>{children}</ContentFulNodeText>
      )
    }
  };
  return (
    <main className="flex-auto">
      <div className="sm:px-8 mt-9">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20  justify-items-center items-center lg:max-w-none lg:grid-cols-2">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Software developer, Frontend
                  </h1>
                  {documentToReactComponents(
                    get(aboutMeContext.userDetails, "professionalSummary.json"),
                    options
                  )}
                  <SocialMediaBar></SocialMediaBar>
                </div>

                <div className="p-7 relative aspect-[9/10] w-72 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-80 sm:rounded-2xl -rotate-2">
                  <blockquote className="text-xl italic font-semibold text-zinc-800 dark:text-zinc-100">
                    <svg
                      className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 14"
                    >
                      <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                    <p className="p-3 text-2xl lg:text-3xl">
                      {get(aboutMeContext.userDetails, "quotes.text", "")
                        .split("||")
                        .map(quotePart => {
                          return (
                            <>
                              {" "}
                              {quotePart}
                              <br />
                            </>
                          );
                        })}
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:px-8 mt-24 md:mt-28">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <ArticleList />
                </div>
                <div className="space-y-10 order-1 lg:pl-16 xl:pl-24">
                  <ProfessionalDetails></ProfessionalDetails>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
