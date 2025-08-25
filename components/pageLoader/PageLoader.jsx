import './PageLoader.css';

export default function PageLoader({ isLoading = true, loadingText = "Loading..." }) {
    if (!isLoading) return null;

    return (
        <div className="page-loader-overlay">
            <div className="page-loader-container">
                {/* Main Loading Animation */}
                <div className="loader-animation">
                    <div className="loader-ring"></div>
                    <div className="loader-ring"></div>
                    <div className="loader-ring"></div>
                    <div className="loader-center">
                        <div className="loader-pulse"></div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="loader-text">
                    <span className="loading-message">{loadingText}</span>
                    <div className="loading-dots">
                        <span className="dot dot-1"></span>
                        <span className="dot dot-2"></span>
                        <span className="dot dot-3"></span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="loader-progress">
                    <div className="progress-bar">
                        <div className="progress-fill"></div>
                    </div>
                </div>

                {/* Brand Logo/Text */}
                <div className="loader-brand">
                    <span className="brand-text">ANAGH K R</span>
                    <span className="brand-subtitle">Full Stack Developer</span>
                </div>
            </div>

            {/* Background Animation */}
            <div className="loader-background">
                <div className="bg-particle particle-1"></div>
                <div className="bg-particle particle-2"></div>
                <div className="bg-particle particle-3"></div>
                <div className="bg-particle particle-4"></div>
                <div className="bg-particle particle-5"></div>
            </div>
        </div>
    );
}
