import PropTypes from "prop-types";
import { format as formatDate, formatDuration } from "date-fns";
import get from "lodash.get";

let EducationItem = function ({ details }) {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <img
          alt=""
          loading="lazy"
          width="32"
          height="32"
          decoding="async"
          data-nimg="1"
          className="h-7 w-7"
          style={{ color: "transparent" }}
          src={details.imageUrl.url}
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">University</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {details.specialization}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {<a href={details.universityLink}>{details.universityName}</a>}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
          <time dateTime={details.startDate}>
            {formatDate(
              new Date(get(details, "startDate", new Date())),
              "MMM yyyy"
            )}
          </time>{" "}
          <span aria-hidden="true">—</span>
          <time dateTime={details.endDate}>
            {formatDate(
              new Date(get(details, "endDate", new Date())),
              "MMM yyyy"
            )}
          </time>
        </dd>
      </dl>
    </li>
  );
};
EducationItem.propTypes = {
  details: PropTypes.shape({
    universityName: PropTypes.string,
    universityLink: PropTypes.string,
    isCurrent: PropTypes.bool,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    specialization: PropTypes.string,
    educationSlug: PropTypes.string,
    detailType: PropTypes.oneOf(["EDU", "WORK"]),
    imageUrl: PropTypes.shape({ url: PropTypes.string })
  })
};

export default EducationItem;
