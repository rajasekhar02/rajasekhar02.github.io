import React from 'react';
import { useParams } from 'react-router-dom';
const listOfJobs = [''];
export default function Experience() {
  const { string_slug } = useParams();
  return (
    <section className="experience mt-3">
      <p className="heading fw-bold fs-4 border-bottom">Experience</p>
      <div className="list-group">
        <a
          href="/about-me/software-dev-in-eruvaka"
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Eruvaka Technologies Private Limited</h5>
            <small>Jan-2019 to Jan-2022</small>
          </div>
          <p className="mb-1">Software Engineer</p>
          <small className="text-muted">
            element-ui, Highcharts, Google Maps Api, date-fns,
            momentjs,excel.js, fuse.js, webpack, and vue.js ecosystem(vuex, vue
            router, vuei18n, virtual scroller, vue-grid-layout).
          </small>
        </a>
        <div
          className={`collapse ${
            string_slug === 'software-dev-in-eruvaka' && 'show'
          }  collapse-sftwr-dev-ervk`}
        >
          <div className="card card-body">
            <p>
              I joined the company as an Associate engineer. In the initial days
              I started working on version 1 of Pondlogs which is a tool used
              for configuring IOT devices manufactured by our company. I have to
              use jquery, php and Mysql for maintaining the application along
              with two other persons.
            </p>
            <p>
              Later I was assigned to learn the vue.js framework which is used
              as frontend for version 2 of Pondlogs application. I am the only
              person in the frontend for the newer version which helped me in
              developing the ability to work independently upto one year. After
              that team size increased to 3 persons. As I was re-writing each
              part of the old version I learned element-ui, Highcharts (library
              for data visualization), Google Maps Api, date-fns,
              momentjs,excel.js, fuse.js(elastic search at frontend),
              webpack(bundling), and vue.js ecosystem(vuex, vue router, vuei18n,
              virtual scroller, vue-grid-layout).
            </p>
            <p>
              I have implemented features as follows access control management
              over entire application, image viewer similar to google photos
              using virtual scroller, vue-grid-layout, fuzzy search over the
              data in the tables, extending the functionality of components in
              the element-ui framework to our business needs, developed a small
              tool for web scraping using puppeteer, form builder component used
              in admin scope of the pondlogs version, Admin Application which is
              used internally in out company for device, customer management,
              Conditionally toggling the features based on the user access
              permissions, possession of devices types, Changing the fields
              according to the user configured preferences.
            </p>
            <p>
              I have learned and implemented virtual row rendering, lazy
              loading, using web workers for heavy data computation which
              improves the performance of the web application. I learned to
              implement complex tasks by dividing them into small manageable
              tasks.
            </p>
          </div>
        </div>
        <a
          href="/about-me/ast-in-tcs"
          className="list-group-item list-group-item-action"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Tata Consultancy Services</h5>
            <small className="text-muted">Jul-2017 to Dec-2018</small>
          </div>
          <p className="mb-1">Assistant System Engineer</p>
          <small className="text-muted">
            C#, VBScript,Itextsharp, Java, UFT(Unified Functionality Testing)
          </small>
        </a>
        <div
          className={`collapse ${
            string_slug === 'ast-in-tcs' && 'show'
          }  collapse-ast-in-tcs`}
        >
          <div className="card card-body">
            I joined this company in July 2017. During the Initial 3 months I
            was in the ILP phase where I improved my programming skills in Java
            and developed a Banking management application using the Java
            Servlet Page and deployed using Tomcat server. Later I was assigned
            to the Citi Bank project. In that I was assigned to small team to
            start working on automating the BPA tasks using HP UFT, C# and
            VBScript. Here I worked on extracting the data from PDF files using
            Itextsharp, regular expressions and segregated the pdf based on the
            keywords found in the pdf files. I also need to extract values from
            the pdf Files and place them in the excel. I also implemented
            styling, and formatting the excel files using VBScript and UFT. The
            data extracted from the pdf files will be verified with other web
            and desktop applications related to citibank which will be a tedious
            task to do manually. During my free time I did Machine learning in
            Coursera offered by Andrew Ng which is one that helped me to place
            in my latter company.
          </div>
        </div>
      </div>
    </section>
  );
}
