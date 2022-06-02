import React from 'react';
export default function Experience() {
  return (
    <section className="experience mt-3">
      <p className="heading fw-bold fs-4 border-bottom">Experience</p>
      <div class="list-group">
        <a
          href="#"
          class="list-group-item list-group-item-action"
          aria-current="true"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Eruvaka Technologies Private Limited</h5>
            <small>Jan-2019 to Jan-2022</small>
          </div>
          <p class="mb-1">Software Engineer</p>
          {/* <small>And some small print.</small> */}
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Tata Consultancy Services</h5>
            <small class="text-muted">Jul-2017 to Dec-2018</small>
          </div>
          <p class="mb-1">Assistant System Engineer</p>
          {/* <small class="text-muted">And some muted small print.</small> */}
        </a>
      </div>
    </section>
  );
}
