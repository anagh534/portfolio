export default function ServiceComponent({image, description, title, alt="", icon="", category=""}) {
    return (
        <div className="col-lg-4 col-md-6">
            <article className="modern-service-card">
                <div className="service-card-header-modern">
                    <div className="service-image-wrapper">
                        <img className="service-image-modern" src={image} alt={alt} />
                        <div className="service-overlay-modern">
                            <div className="service-icon-modern">{icon}</div>
                        </div>
                    </div>
                    <div className="service-category-badge">{category}</div>
                </div>
                <div className="service-card-body">
                    <h3 className="service-title-modern">{title}</h3>
                    <div className="service-divider-line"></div>
                    <p className="service-description-modern">
                        {description}
                    </p>
                    <div className="service-card-footer">
                        <a href="/contact" className="service-cta-button">
                            <i className="fas fa-paper-plane me-2"></i>
                            Get Quote
                            <i className="fas fa-arrow-right ms-2"></i>
                        </a>
                    </div>
                </div>
            </article>
        </div>
    )
}