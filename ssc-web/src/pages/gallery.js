import Layout from '@theme/Layout';
import { useState, useEffect } from 'react';
import styles from './gallery.module.css';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [transitionPhase, setTransitionPhase] = useState('visible');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(new Set());

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => {
        setImages(data);
      })
      .catch(err => {
        console.error('获取画廊数据失败:', err);
      });
  }, []);

  useEffect(() => {
    images.forEach((image, index) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded(prev => new Set([...prev, index]));
      };
      img.src = image.src;
    });
  }, [images]);

  const changeImage = (newIndex) => {
    if (newIndex === currentImage || transitionPhase !== 'visible') return;
    setTransitionPhase('fadeOut');
    setTimeout(() => {
      setCurrentImage(newIndex);
      setTransitionPhase('fadeIn');
      setTimeout(() => {
        setTransitionPhase('visible');
      }, 50);
    }, 300);
  };

  if (images.length === 0) {
    return (
      <Layout title="风光一览">
        <div className={styles.galleryContainer}>
          <div style={{textAlign: 'center', padding: '50px', color: 'white'}}>
            加载中...
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="风光一览">
      <div className={styles.galleryContainer}>
        <div 
          className={`${styles.backgroundImage} ${
            transitionPhase === 'fadeOut' ? styles.fadeOut : 
            transitionPhase === 'fadeIn' ? styles.fadeIn : 
            styles.visible
          }`}
          style={{ backgroundImage: `url(${images[currentImage].src})` }}
        />

        <button 
          className={styles.toggleButton}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>

        <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
          <div className={styles.sidebarContent}>
            <h3>选择景观</h3>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.imageItem} ${index === currentImage ? styles.active : ''}`}
                onClick={() => {
                  changeImage(index);
                  setSidebarOpen(false);
                }}
              >
                <img src={image.src} alt={image.title} />
                <span>{image.title}</span>
                {!imagesLoaded.has(index) && (
                  <div className={styles.loadingIndicator}>⟳</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.textBox} ${transitionPhase !== 'visible' ? styles.textFadeOut : styles.textFadeIn}`}>
          <h2>{images[currentImage].title}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{images[currentImage].description}</p>
        </div>

        <div className={styles.navigation}>
          <button 
            onClick={() => changeImage(currentImage > 0 ? currentImage - 1 : images.length - 1)}
            className={styles.navButton}
            disabled={transitionPhase !== 'visible'}
          >
            ‹
          </button>
          <span className={styles.imageCounter}>
            {currentImage + 1} / {images.length}
          </span>
          <button 
            onClick={() => changeImage(currentImage < images.length - 1 ? currentImage + 1 : 0)}
            className={styles.navButton}
            disabled={transitionPhase !== 'visible'}
          >
            ›
          </button>
        </div>
      </div>
    </Layout>
  );
}