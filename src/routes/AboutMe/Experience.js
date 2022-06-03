import React from 'react';
export default function Experience() {
  return (
    <section className="experience mt-3">
      <p className="heading fw-bold fs-4 border-bottom">Experience</p>
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Eruvaka Technologies Private Limited</h5>
            <small>Jan-2019 to Jan-2022</small>
          </div>
          <p className="mb-1">Software Engineer</p>
          {/* <small>And some small print.</small> */}
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Tata Consultancy Services</h5>
            <small className="text-muted">Jul-2017 to Dec-2018</small>
          </div>
          <p className="mb-1">Assistant System Engineer</p>
          {/* <small className="text-muted">And some muted small print.</small> */}
        </a>
      </div>
    </section>
  );
}
