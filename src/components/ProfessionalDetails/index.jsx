import { useEffect, useState } from "react";
import {
  getEducationDetails,
  getExperienceDetails
} from "../../routes/AboutMe/services";
import PropTypes from "prop-types";
let EducationItem = function ({ details }) {
  return (
    <li className="flex gap-4">
      {
        // [...educationDetails,...experienceDetails].sort((a,b)=> )
      }
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
          src={details.imageURL}
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Eruvaka Technologies Private Ltd
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          Software Developer
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label="2019 until Present"
        >
          <time dateTime="2019">2019</time> <span aria-hidden="true">—</span>{" "}
          <time dateTime="2022">2022</time>
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
    educationSlug: PropTypes.object,
    detailType: PropTypes.oneOf(["EDU", "WORK"]),
    imageURL: PropTypes.string
  })
};

let WorkItem = function () {
  return (
    <li className="flex gap-4">
      {
        // [...educationDetails,...experienceDetails].sort((a,b)=> )
      }
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
          src="data:image/jpeg;base64,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"
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Eruvaka Technologies Private Ltd
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          Software Developer
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label="2019 until Present"
        >
          <time dateTime="2019">2019</time> <span aria-hidden="true">—</span>{" "}
          <time dateTime="2022">2022</time>
        </dd>
      </dl>
    </li>
  );
};
const DownloadResumeButton = function () {
  return (
    <a
      className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
      href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/12jheehLMiG0Q9Bp0SZ4AZ2ThEcqFmWjN-yJs7Mj7NY8/export?format=pdf"
    >
      Download CV
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
      >
        <path
          d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </a>
  );
};

// const initialState = {
//   loading: true,
//   error: "",
//   data: []
// };
// const detailsReducer = function (state, action) {
//   switch (action.type) {
//     case "FETCH_SUCCESS":
//       return {
//         loading: false,
//         data: action.payload,
//         error: ""
//       };
//     case "FETCH_ERROR":
//       return {
//         loading: false,
//         data: [],
//         error: "Unable to Fetch data"
//       };
//     default:
//       return state;
//   }
// };

export default function ProfessionalDetails() {
  const [allDetails, setAllDetails] = useState([]);
  useEffect(() => {
    (async function () {
      const educationPromise = getEducationDetails();
      const experiencePromise = getExperienceDetails();
      Promise.all([educationPromise, experiencePromise]).then(data => {
        setAllDetails(() => data.flat(1).sort((a, b) => b.endDate - a.endDate));
      });
    })();
  }, []);

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          ></path>
          <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          ></path>
        </svg>
        <span className="ml-3">Education and Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {allDetails.map(item => {
          switch (item.detailType) {
            case "EDU":
              return <EducationItem details={item}></EducationItem>;
          }
        })}
      </ol>
      <DownloadResumeButton></DownloadResumeButton>
    </div>
  );
}
