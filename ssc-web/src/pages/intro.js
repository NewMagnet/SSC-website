import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './intro.module.css';

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15,18 9,12 15,6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9,18 15,12 9,6"></polyline>
  </svg>
);

const User = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const ExternalLink = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15,3 21,3 21,9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const Menu = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

function IntroPage() {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [displayMember, setDisplayMember] = useState(0);

  useEffect(() => {
    fetch('/api/members')
      .then(res => res.json())
      .then(data => {
        setMembers(data);
      })
      .catch(err => {
        console.error('获取成员数据失败:', err);
      });
  }, []);

  const handleMemberSelect = (index) => {
    if (index === selectedMember || isFlipping) return;
    
    setSelectedMember(index);
    setIsFlipping(true);

    setTimeout(() => setShowContent(false), 150);
    setTimeout(() => setDisplayMember(index), 300);
    setTimeout(() => setShowContent(true), 450);
    setTimeout(() => setIsFlipping(false), 600);
  };

  if (members.length === 0) {
    return (
      <Layout>
        <div className={styles.container}>
          <div style={{textAlign: 'center', padding: '50px'}}>
            加载中...
          </div>
        </div>
      </Layout>
    );
  }

  const currentMember = members[displayMember];

  return (
    <Layout>
      <div className={styles.container}>
        <div className={`${styles.sidebar} ${!sidebarOpen ? styles.sidebarClosed : ''}`}>
          <div className={styles.mobileHeader}>
            <div className={styles.mobileTitle}>
              <Menu size={18} />
              <span>成员列表</span>
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={styles.mobileToggle}
            >
              {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
            </button>
          </div>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={styles.sidebarToggle}
          >
            {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>

          <div className={`${styles.sidebarContent} ${!sidebarOpen ? styles.sidebarContentHidden : styles.sidebarContentVisible}`}>
            <div className={styles.sidebarHeader}>
              <h2>成员列表</h2>
            </div>

            <div className={styles.memberList}>
              {members.map((member, index) => (
                <button
                  key={member.id}
                  onClick={() => handleMemberSelect(index)}
                  disabled={isFlipping}
                  className={`${styles.memberButton} ${
                    selectedMember === index ? styles.memberButtonActive : ''
                  } ${isFlipping ? styles.memberButtonDisabled : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.avatar}>
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className={styles.avatarImage}
                    />
                  </div>
                  
                  <div className={styles.memberInfo}>
                    <div className={styles.memberName}>
                      {member.name}
                    </div>
                    <div className={styles.memberRole}>
                      {member.role}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.mainContent} ${!sidebarOpen ? styles.mainContentExpanded : ''}`}>
          <div className={styles.header}>
            <h1>成员介绍！</h1>
            <p>看看服务器里都有谁吧</p>
          </div>

          <div className={styles.cardContainer}>
            <div className={`${styles.memberCard} ${isFlipping ? styles.flipping : ''}`}>
              <div className={styles.cardHeader}>
                <div className={`${styles.cardContent} ${!showContent ? styles.contentHidden : ''}`}>
                  <h2 className={styles.cardTitle}>
                    {currentMember.name}
                  </h2>
                  <p className={styles.cardRole}>
                    {currentMember.role}
                  </p>
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={`${styles.cardContent} ${!showContent ? styles.contentHidden : ''}`}>
                  <div className={styles.cardImage}>
                    <img 
                      src={currentMember.cardImage}
                      alt={currentMember.name}
                      className={styles.cardImagePhoto}
                    />
                  </div>

                  <p 
                    className={styles.cardDescription}
                    dangerouslySetInnerHTML={{__html: currentMember.description}}
                  />

                  <div className={styles.skillsContainer}>
                    <h4>Tags：</h4>
                    <div className={styles.skills}>
                      {currentMember.skills.map((skill, index) => (
                        <span key={`${currentMember.id}-${skill}-${index}`} className={styles.skillTag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to={currentMember.docPath}
                    className={styles.detailButton}
                  >
                    <span>详细信息</span>
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IntroPage;