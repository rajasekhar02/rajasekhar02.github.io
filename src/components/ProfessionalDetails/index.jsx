import { useEffect, useState } from "react";
import {
  getEducationDetails,
  getExperienceDetails
} from "../../routes/AboutMe/services";
import EducationItem from "./EducationItem";
import WorkItem from "./WorkItem";
import DownloadResumeButton from "./DownloadResumeButton";

export default function ProfessionalDetails() {
  const [allDetails, setAllDetails] = useState([]);
  useEffect(() => {
    (async function () {
      const educationPromise = getEducationDetails();
      const experiencePromise = getExperienceDetails();
      Promise.all([educationPromise, experiencePromise]).then(data => {
        setAllDetails(() =>
          data.flat(1).sort((a, b) => new Date(b.endDate) - new Date(a.endDate))
        );
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
        {allDetails.map((item, index) => {
          switch (item.detailType) {
            case "EDU":
              return (
                <EducationItem
                  details={item}
                  key={`professional-details-${index}`}
                ></EducationItem>
              );
            case "WORK":
              return (
                <WorkItem
                  key={`professional-details-${index}`}
                  details={item}
                ></WorkItem>
              );
          }
        })}
      </ol>
      <DownloadResumeButton></DownloadResumeButton>
    </div>
  );
}
