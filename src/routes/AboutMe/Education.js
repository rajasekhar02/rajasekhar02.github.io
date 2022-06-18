import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEducationDetails } from "./services";
import get from "lodash.get";
import { format as formatDate } from "date-fns";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Education() {
  const { string_slug } = useParams();
  const [educationDetails, setEducationDetials] = React.useState([]);
  useEffect(() => {
    (async function () {
      const response = await getEducationDetails();
      setEducationDetials(response);
    })();
  }, []);
  return (
    <section className="education mt-3">
      <p className="heading fw-bold fs-4 border-bottom">Education</p>
      {educationDetails.map((eachEducationDetail) => {
        const getEduKeyValue = (key, defaultValue = undefined) =>
          get(eachEducationDetail, key, defaultValue);
        return (
          <div className="list-group" key={getEduKeyValue("educationSlug")}>
            <a
              href={`/about-me/${get(eachEducationDetail, "educationSlug")}`}
              role="button"
              data-toggle="collapse-mst-study"
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">
                  {get(eachEducationDetail, "universityName")}
                </h5>
                <small
                  className={`${
                    get(eachEducationDetail, "isCurrent", false) &&
                    "fw-bolder fs-6"
                  }`}
                >
                  {`${formatDate(
                    new Date(get(eachEducationDetail, "startDate", new Date())),
                    "MMM yyyy"
                  )}
                    -
                    ${formatDate(
                      new Date(get(eachEducationDetail, "endDate", new Date())),
                      "MMM yyyy"
                    )}
                  `}
                </small>
              </div>
              <p className="mb-1">
                {get(eachEducationDetail, "specialization")}
              </p>
            </a>
            <div
              className={`collapse ${
                string_slug === get(eachEducationDetail, "educationSlug") &&
                "show"
              }`}
            >
              <div className="card card-body">
                {get(
                  eachEducationDetail,
                  "coursesEnrolledCollection.items",
                  []
                ).map((eachCourse) => {
                  return (
                    <details key={eachCourse.title}>
                      <summary>{eachCourse.title}</summary>
                      {documentToReactComponents(
                        get(eachCourse, "courseDescription.json")
                      )}
                    </details>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
