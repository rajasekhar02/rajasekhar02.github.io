import PropTypes from "prop-types";

export default function ProjectGridItem({ details }) {
  return (
    <li className="col-span-1 rounded-lg bg-white shadow divide-y divide-gray-200 dark:bg-zinc-800 dark:divide-zinc-700">
      <div className="flex w-full h-52 justify-between p-6 space-x-6">
        <div className="flex flex-col max-w-full text-sm leading-6 sm:text-base sm:leading-7">
          <div className="flex items-center max-w-sm">
            <h2 className="overflow-hidden whitespace-nowrap text-ellipsis text-xl font-medium text-zinc-900 dark:text-zinc-200">
              {details.name}
            </h2>
            {/* <span className="ly up yz ads ajh arb aro awc awe axz bbt bbx bcs">
              Admin
            </span> */}
          </div>
          <p className="line-clamp-3 mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            <strong>Description</strong> <br />
            {details.description}
          </p>
          <p className="mt-1 overflow-hidden whitespace-nowrap text-ellipsis text-sm text-zinc-500 dark:text-zinc-400">
            <strong>Technologies</strong>
            <br />
            <div className="mt-1">
              {details.technologies.map((item, index) => {
                return (
                  <span
                    key={`technologies-used-${index}`}
                    className="bg-zinc-100 text-zinc-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-zinc-700 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </p>
        </div>
        {/* <img
          className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
          alt=""
        /> */}
      </div>
      <div>
        <div className="flex -mt-px divide-x divide-gray-200 dark:divide-slate-700 ">
          <div className="flex w-0 flex-1 ">
            <a
              href={details.githubUrl}
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent pt-4 pb-4 text-sm font-medium text-gray-900 dark:text-slate-200"
            >
              Github
            </a>
          </div>
          {details.liveDemoLink && (
            <div className="flex -ml-px w-0 flex-1">
              <a
                href="tel:+1-202-555-0170"
                className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent pt-4 pb-4 text-sm font-medium text-gray-900 dark:text-slate-200"
              >
                Live Demo
              </a>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

ProjectGridItem.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.array.isRequired,
    githubUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    liveDemoLink: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string
  })
};
