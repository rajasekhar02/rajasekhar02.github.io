import React from 'react';

export default function ProjectGrids() {
  const projectsAndDescription = [];
  return (
    <div className="card" style={{ width: '18rem' }}>
      {/* <img src="..." className="card-img-top" alt="..."> */}
      <div className="card-body">
        <h5 className="card-title">Splitwise Dashboard</h5>
        <p className="card-text">Dashboard on Splitwise Expenses</p>
      </div>
    </div>
  );
}
