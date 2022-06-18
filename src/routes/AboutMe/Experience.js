import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getExperienceDetails } from "./services";
import get from "lodash.get";
import { format as formatDate } from "date-fns";
// import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const richTextToReactOptions = {
  renderNode: {
    "ordered-list": (node, children) => {
      return <ol className="list-group list-group-numbered">{children}</ol>;
    },
    "list-item": (node, children) => {
      // console.log(node.content[0].content[0].value);
      return <li className="list-group-item d-flex">{children}</li>;
    }
  }
};

export default function Experience() {
  const { string_slug } = useParams();
  const [experienceDetails, setExperienceDetials] = React.useState([]);
  useEffect(() => {
    (async function () {
      const response = await getExperienceDetails();
      setExperienceDetials(response);
    })();
  }, []);
  return (
    <section className="experience mt-3">
      <p className="heading fw-bold fs-4 border-bottom">Experience</p>
      {experienceDetails.map((eachExperience) => {
        const getExpKeyValue = (key, defaultValue = undefined) =>
          get(eachExperience, key, defaultValue);
        return (
          <div className="list-group" key={getExpKeyValue("experienceSlug")}>
            <a
              href={`/about-me/${getExpKeyValue("experienceSlug")}`}
              role="button"
              data-toggle="collapse-mst-study"
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{getExpKeyValue("companyName")}</h5>
                <small>
                  {`${
                    getExpKeyValue("isCurrent", false) ? "Current" : ""
                  } ${formatDate(
                    new Date(getExpKeyValue("startDate", new Date())),
                    "yyyy"
                  )}
                    -
                    ${formatDate(
                      new Date(getExpKeyValue("endDate", new Date())),
                      "yyyy"
                    )}
                  `}
                </small>
              </div>
              <p className="mb-1">{getExpKeyValue("role")}</p>
              <small className="text-muted">
                {getExpKeyValue("technologiesUsed")}
              </small>
            </a>
            <div
              className={`collapse ${
                string_slug === getExpKeyValue("experienceSlug") && "show"
              }`}
            >
              <div className="card card-body">
                {documentToReactComponents(
                  getExpKeyValue("jobDescription.json"),
                  richTextToReactOptions
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
