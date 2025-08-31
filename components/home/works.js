"use client";
import { useState, useEffect } from 'react';
import projects from "./loadImage";
import LazyImage from "./LazyImage";
import './works.css';

export default function Works() {
    const [activeProject, setActiveProject] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlay) return;
        
        const interval = setInterval(() => {
            setActiveProject((prev) => (prev + 1) % projects.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const nextProject = () => {
        setActiveProject((prev) => (prev + 1) % projects.length);
        setIsAutoPlay(false);
    };

    const prevProject = () => {
        setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
        setIsAutoPlay(false);
    };

    const goToProject = (index) => {
        setActiveProject(index);
        setIsAutoPlay(false);
    };

    return (
        <section className="modern-works-section" id="works">
            <div className="works-background-overlay"></div>
            
            <div className="container">
                {/* Section Header */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <div className="section-header-works">
                            <div className="works-badge">
                                <i className="fas fa-briefcase me-2"></i>
                                Featured Projects
                            </div>
                            <h2 className="works-title">
                                My Recent Works
                            </h2>
                            <p className="works-subtitle">
                                Discover some of the amazing projects I've crafted with passion, creativity, and cutting-edge technology. 
                                Each project represents a unique solution tailored to client needs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Project Showcase */}
                <div className="row g-4 align-items-center">
                    {/* Project Image */}
                    <div className="col-lg-7">
                        <div className="project-showcase">
                            <div className="project-image-container">
                                <LazyImage
                                    src={projects[activeProject].img}
                                    alt={projects[activeProject].title}
                                    className="project-main-image"
                                />
                                <div className="project-overlay">
                                    <div className="project-actions">
                                        <a 
                                            href={projects[activeProject].url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="btn-view-project"
                                        >
                                            <i className="fas fa-external-link-alt me-2"></i>
                                            View Live
                                        </a>
                                        <button className="btn-project-info">
                                            <i className="fas fa-info-circle"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Navigation Controls */}
                            <div className="project-navigation">
                                <button 
                                    className="nav-btn nav-prev" 
                                    onClick={prevProject}
                                    aria-label="Previous project"
                                >
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <button 
                                    className="nav-btn nav-next" 
                                    onClick={nextProject}
                                    aria-label="Next project"
                                >
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="col-lg-5">
                        <div className="project-details">
                            <div className="project-meta">
                                <span className="project-category">
                                    {projects[activeProject].category}
                                </span>
                                <span className="project-year">
                                    {projects[activeProject].year}
                                </span>
                            </div>
                            
                            <h3 className="project-title">
                                {projects[activeProject].title}
                            </h3>
                            
                            <p className="project-description">
                                {projects[activeProject].description}
                            </p>
                            
                            <div className="project-technologies">
                                <h4 className="tech-title">Technologies Used</h4>
                                <div className="tech-stack">
                                    {projects[activeProject].technologies.map((tech, index) => (
                                        <span key={index} className="tech-badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="project-cta">
                                <a 
                                    href={projects[activeProject].url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn-primary-works"
                                >
                                    <i className="fas fa-rocket me-2"></i>
                                    Launch Project
                                    <i className="fas fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Thumbnails */}
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="project-thumbnails">
                            <div className="thumbnails-header">
                                <h4>All Projects</h4>
                                <div className="auto-play-toggle">
                                    <label className="toggle-switch">
                                        <input 
                                            type="checkbox" 
                                            checked={isAutoPlay}
                                            onChange={(e) => setIsAutoPlay(e.target.checked)}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                    <span>Auto Play</span>
                                </div>
                            </div>
                            
                            <div className="thumbnails-grid">
                                {projects.map((project, index) => (
                                    <div 
                                        key={project.id}
                                        className={`thumbnail-item ${index === activeProject ? 'active' : ''}`}
                                        onClick={() => goToProject(index)}
                                    >
                                        <LazyImage
                                            src={project.img}
                                            alt={project.title}
                                            className="thumbnail-image"
                                        />
                                        <div className="thumbnail-overlay">
                                            <h5 className="thumbnail-title">{project.title}</h5>
                                            <span className="thumbnail-category">{project.category}</span>
                                        </div>
                                        {index === activeProject && (
                                            <div className="active-indicator">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <div className="progress-indicators">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    className={`progress-dot ${index === activeProject ? 'active' : ''}`}
                                    onClick={() => goToProject(index)}
                                    aria-label={`Go to project ${index + 1}`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-8 text-center">
                        <div className="works-cta">
                            <h3>Have a Project in Mind?</h3>
                            <p>Let's collaborate and bring your ideas to life with innovative solutions and modern technology.</p>
                            <div className="cta-buttons">
                                <a href="/contact" className="btn-cta-primary">
                                    <i className="fas fa-paper-plane me-2"></i>
                                    Start a Project
                                </a>
                                <a href="/services" className="btn-cta-secondary">
                                    <i className="fas fa-cogs me-2"></i>
                                    View Services
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}