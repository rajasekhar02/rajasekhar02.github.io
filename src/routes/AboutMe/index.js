import React from 'react';
import SideBar from './SideBar';
import './index.css';
export default function AboutMe() {
  return (
    <section className="resume d-flex flex-wrap">
      <SideBar />
      <main className="content p-3 flex-grow-1">
        <section className="summary">
          <div className="heading fw-bold fs-4 border-bottom">Summary</div>
        </section>
      </main>
    </section>
  );
}
