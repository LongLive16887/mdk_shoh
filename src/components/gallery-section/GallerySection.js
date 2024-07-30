import React, { useState, useEffect } from 'react';
import './gallerySection.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const videoData = [
    { id: 'CJ6yXd5QZvg', category: 'fashion', description: 'Rick Astley - Never Gonna Give You Up (Official Music Video)' },
    { id: 'XbGSGLwDNIk', category: 'event', description: 'Epic Rap Battles of History: Steve Jobs vs Bill Gates' },
    { id: 'imRLJPyudJk', category: 'model', description: 'Behind the Scenes of a Fashion Photoshoot' },
    { id: 'ZbZSe6N_BXs', category: 'other', description: 'Travel Vlog: Exploring the Wonders of the World' },
    { id: 'ALwJJAYStBw', category: 'fashion', description: 'The Best Summer Fashion Trends 2024' },
    { id: 'YHd-PtOtrcw', category: 'event', description: 'Annual Music Festival Highlights' },
    { id: 'g6v3UCymCiM', category: 'model', description: 'Modeling Tips and Tricks from Experts' },
    { id: 'ydmgkbYgb20', category: 'other', description: 'DIY Home Improvement Projects' },
    { id: 'Vxft-IRBF1o', category: 'fashion', description: 'Fashion Week Best Looks Compilation' },
    { id: 'mMybyxKqhdg', category: 'event', description: 'Recap of Major Sports Events of the Year' },
    { id: 'Xl08OlVMpI0', category: 'model', description: 'Top Catwalk Moments from Fashion Shows' },
    { id: 'xVDRYlsHIV8', category: 'other', description: 'Cooking Recipe: How to Make Delicious Pasta' },
];


const GallerySection = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        AOS.init();
      }, [])

    useEffect(() => {
        const handleClick = (event) => {
            const target = event.currentTarget;
            document.querySelectorAll('.gallery-controls li').forEach((li) => {
                li.classList.remove('active');
            });
            target.classList.add('active');
            setActiveFilter(target.getAttribute('data-filter'));
        };

        document.querySelectorAll('.gallery-controls li').forEach((li) => {
            li.addEventListener('click', handleClick);
        });

        return () => {
            document.querySelectorAll('.gallery-controls li').forEach((li) => {
                li.removeEventListener('click', handleClick);
            });
        };
    }, []);

    return (
        <section className="gallery-section spad">
            <div className="gallery-controls">
                <ul>
                    <li className={activeFilter === 'all' ? 'active' : ''} data-filter="all">All gallery</li>
                    <li className={activeFilter === 'fashion' ? 'active' : ''} data-filter="fashion">Fashion</li>
                    <li className={activeFilter === 'model' ? 'active' : ''} data-filter="model">Model</li>
                    <li className={activeFilter === 'event' ? 'active' : ''} data-filter="event">Event</li>
                    <li className={activeFilter === 'other' ? 'active' : ''} data-filter="other">Other</li>
                </ul>
            </div>
            <div className="gallery-filter">
                {videoData.filter(video => activeFilter === 'all' || video.category === activeFilter).map((video) => (
                    <div key={video.id} className={`gs-item mix ${video.category}`} data-aos="flip-left">
                        <iframe
                            width="100%"
                            height="auto"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GallerySection;
