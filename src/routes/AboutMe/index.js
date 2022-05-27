import React from 'react';
import SideBar from './SideBar';
import './index.css';
export default function AboutMe() {
  return (
    <section className="resume d-flex">
      <SideBar />
      <main className="content"></main>
    </section>
  );
}
