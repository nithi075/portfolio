import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from "../../data/projectData"; // Import the data

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = projectData[id]; // Fetching data based on URL ID

  if (!project) return <h2>Project not found!</h2>;

  return (
    <div className="detail-page section-padding">
      <Link to="/" className="back-btn">← BACK TO HOME</Link>
      <h1 className="huge-text">{project.title}</h1>
      
      <p className="project-desc">{project.description}</p>

      <div className="packages-grid">
        {project.packages.map((pkg, i) => (
          <div key={i} className="package-card">
            <h3>{pkg.name}</h3>
            <p className="price">{pkg.price}</p>
          </div>
        ))}
      </div>

      <div className="results-section">
        <h3>WHY CHOOSE ME?</h3>
        <ul>{project.results.map((r, i) => <li key={i}>{r}</li>)}</ul>
      </div>
    </div>
  );
};

export default PortfolioDetail;