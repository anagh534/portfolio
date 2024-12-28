'use client'
import { useEffect } from 'react';

const ResumeComponent = () => {
    useEffect(() => {
        // Automatically trigger the download when the user visits the page
        const link = document.createElement('a');
        link.href = '/ANAGH-K-R-MERN-STACK-DEVELOPER.pdf';  // Path to your resume file in the public folder
        link.download = 'ANAGH-K-R-MERN-STACK-DEVELOPER.pdf';  // Name of the file when downloaded
        link.click();

        // Optionally, redirect the user after the download starts
        // router.push('/');  // Redirects to home after download
    }, []);
    return (
        <div>
            <div className="container text-center">
                <h1>Downloading your resume...</h1>
                <p>If your resume doesn't download automatically, click the link below:</p>
                <a href="/ANAGH-K-R-MERN-STACK-DEVELOPER.pdf" download="ANAGH-K-R-MERN-STACK-DEVELOPER.pdf">
                    Download my CV
                </a>
                <div className="row">
                    <img src="/resume.jpg" alt="ANAGH K R RESUME" />
                </div>
            </div>
        </div>
    );
};

export default ResumeComponent;