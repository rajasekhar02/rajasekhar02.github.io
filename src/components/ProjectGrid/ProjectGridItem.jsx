import PropTypes from "prop-types";

export default function ProjectGridItem({ details }) {
  return (
    <li className="col-span-1 rounded-lg bg-white/100  shadow divide-y divide-gray-200 dark:bg-slate-800 dark:divide-gray-600">
      <div className="flex w-full items-center justify-between p-6 space-x-6">
        <div className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
          <div className="flex items-center">
            <h2 className="overflow-hidden whitespace-nowrap text-ellipsis font-medium text-gray-900 dark:text-slate-200">
              {"name"}
            </h2>
            {/* <span className="ly up yz ads ajh arb aro awc awe axz bbt bbx bcs">
              Admin
            </span> */}
          </div>
          <p className="mt-1 overflow-hidden whitespace-nowrap text-ellipsis text-sm text-gray-500 dark:text-slate-400">
            {
              "descripdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddasdfasdfasdfdddddddddddddddddddddddddddddddddtion"
            }
          </p>
          <p className="mt-1 overflow-hidden whitespace-nowrap text-ellipsis text-sm text-gray-500 dark:text-slate-400">
            {
              "notable technolasdfasdfasdfasdfasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddogies"
            }
          </p>
        </div>
        {/* <img
          className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
          alt=""
        /> */}
      </div>
      <div>
        <div className="flex -mt-px divide-x divide-gray-200 dark:divide-gray-600 ">
          <div className="flex w-0 flex-1 ">
            <a
              href="mailto:janecooper@example.com"
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent pt-4 pb-4 text-sm font-medium text-gray-900 dark:text-slate-200"
            >
              Github
            </a>
          </div>
          <div className="flex -ml-px w-0 flex-1">
            <a
              href="tel:+1-202-555-0170"
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent pt-4 pb-4 text-sm font-medium text-gray-900 dark:text-slate-200"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

ProjectGridItem.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github_link: PropTypes.string,
    image_url: PropTypes.string,
    live_demo_link: PropTypes.string
  })
};
