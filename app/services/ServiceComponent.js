export default function ServiceComponent({image, description, title, alt="", icon="", category=""}) {
    return (
        <article className="service-card">
            <div className="service-card-header">
                <div className="service-image-container">
                    <img className="service-image" src={image} alt={alt} />
                    <div className="service-overlay">
                        <span className="service-icon">{icon}</span>
                    </div>
                </div>
                <div className="service-category">{category}</div>
            </div>
            <div className="service-content">
                <h3 className="service-title">{title}</h3>
                <div className="service-divider"></div>
                <p className="service-description">
                    {description}
                </p>
                <div className="service-footer">
                    <a href="/contact" className="service-button">
                        Get Quote
                        <span className="button-arrow">→</span>
                    </a>
                </div>
            </div>
        </article>
    )
}