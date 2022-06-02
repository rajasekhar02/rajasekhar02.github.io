import React from 'react';
import { useParams } from 'react-router-dom';
export default function Education() {
  return (
    <section className="education mt-3">
      <p className="heading fw-bold fs-4 border-bottom">Education</p>
      <div class="list-group">
        <a
          href="/about-me/study-in-mst"
          data-toggle="collapse-mst-study"
          class="list-group-item list-group-item-action active"
          aria-current="true"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Missouri University of Science and Technology</h5>
            <small>2022-2024</small>
          </div>
          <p class="mb-1">Masters in Computer and Information Sciences</p>
          {/* <small>And some small print.</small> */}
        </a>
        <div class="collapse-mst-study" id="collapseExample">
          <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">V R Sidhartha Engineering College</h5>
            <small class="text-muted">2013-2017</small>
          </div>
          <p class="mb-1">Bachelors in Computer Science and Engineering</p>
          {/* <small class="text-muted">And some muted small print.</small> */}
        </a>
      </div>
    </section>
  );
}
