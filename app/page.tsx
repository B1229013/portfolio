"use client"

import { useState } from "react"
import "./portfolio.css"

export default function Portfolio() {
  const [currentView, setCurrentView] = useState<"main" | "taskflow" | "ai-recommend" | "expense-tracker">("main")

  const showProject = (projectId: "taskflow" | "ai-recommend" | "expense-tracker") => {
    setCurrentView(projectId)
    window.scrollTo(0, 0)
  }

  const showMainPage = () => {
    setCurrentView("main")
    window.scrollTo(0, 0)
  }

  return (
    <div className="container">
      {/* Main Portfolio Page */}
      {currentView === "main" && (
        <div id="main-page" className="main-content">
          <header>
            <h1>Alex Chen</h1>
            <p className="subtitle">Computer Science Student | Third Year | Aspiring Software Engineer</p>
            <div className="contact-links">
              <a href="mailto:katechen8686@gmail.com">📧 Email</a>
              <a href="https://github.com/B1229013" target="_blank" rel="noreferrer">
                💻 GitHub
              </a>
              <a href="https://www.linkedin.com/in/kathleen-chen-452467392/" target="_blank" rel="noreferrer">
                💼 LinkedIn
              </a>
              <a href="resume.pdf" target="_blank" rel="noreferrer">
                📄 Resume
              </a>
            </div>
          </header>

          <section id="about">
            <h2>About Me</h2>
            <div className="about-content">
              <p>
                Hello! I'm a passionate third-year Computer Science student with a strong foundation in software
                development and a keen interest in full-stack development, artificial intelligence, and cloud
                technologies. I thrive on solving complex problems and building innovative solutions that make a
                real-world impact.
              </p>
              <br />
              <p>
                Currently seeking summer 2025 internship opportunities where I can contribute my technical skills, learn
                from experienced professionals, and grow as a software engineer. I'm particularly interested in roles
                involving web development, machine learning, or backend systems.
              </p>
            </div>
          </section>

          <section id="skills">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Languages</h3>
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>C++</li>
                  <li>SQL</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Frameworks</h3>
                <ul>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Django</li>
                  <li>Flask</li>
                  <li>Spring Boot</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools & Technologies</h3>
                <ul>
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>REST APIs</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Concepts</h3>
                <ul>
                  <li>Data Structures</li>
                  <li>Algorithms</li>
                  <li>OOP</li>
                  <li>Machine Learning</li>
                  <li>Agile/Scrum</li>
                  <li>CI/CD</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="projects">
            <h2>Projects</h2>

            <div className="project-card" onClick={() => showProject("taskflow")}>
              <h3>TaskFlow</h3>
              <p>
                Built a full-stack web application that enables teams to manage projects, assign tasks, and track
                progress in real-time.
              </p>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Socket.io</span>
              </div>
              <span className="view-details">View Details →</span>
            </div>

            <div className="project-card" onClick={() => showProject("ai-recommend")}>
              <h3>AI-RecommendEngine</h3>
              <p>
                Created a machine learning model that recommends movies based on user preferences and viewing history
                with 85% accuracy.
              </p>
              <div className="tech-tags">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Scikit-learn</span>
                <span className="tech-tag">Pandas</span>
                <span className="tech-tag">Flask</span>
              </div>
              <span className="view-details">View Details →</span>
            </div>

            <div className="project-card" onClick={() => showProject("expense-tracker")}>
              <h3>CloudExpenseTracker</h3>
              <p>
                Designed and deployed a serverless expense tracking application with automatic receipt scanning using
                OCR technology.
              </p>
              <div className="tech-tags">
                <span className="tech-tag">AWS Lambda</span>
                <span className="tech-tag">DynamoDB</span>
                <span className="tech-tag">S3</span>
                <span className="tech-tag">React</span>
              </div>
              <span className="view-details">View Details →</span>
            </div>
          </section>

          <section id="experience">
            <h2>Experience</h2>

            <div className="experience-item">
              <h3>SoftwareDevIntern</h3>
              <p className="experience-date">Tech Innovations Inc. | June 2024 - August 2024</p>
              <ul>
                <li>
                  Developed and maintained RESTful APIs using Node.js and Express for the company&apos;s main e-commerce
                  platform serving 50,000+ daily users
                </li>
                <li>
                  Collaborated with a cross-functional team of 8 developers, 2 designers, and 1 product manager using
                  Agile methodology with 2-week sprints
                </li>
                <li>
                  Improved application performance by 35% through code optimization, database query improvements, and
                  implementation of Redis caching layer
                </li>
                <li>
                  Participated in daily code reviews, contributed to technical documentation, and mentored 2 junior
                  interns
                </li>
                <li>Implemented automated testing suite using Jest, increasing code coverage from 45% to 78%</li>
                <li>Fixed 25+ production bugs and deployed features to AWS using CI/CD pipeline</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>TeachingAssistant</h3>
              <p className="experience-date">University Name | September 2024 - Present</p>
              <ul>
                <li>
                  Conduct weekly lab sessions for 35 students, explaining complex topics including trees, graphs,
                  dynamic programming, and sorting algorithms
                </li>
                <li>
                  Grade assignments and exams for 150+ students, providing detailed feedback to help improve their
                  problem-solving and coding skills
                </li>
                <li>
                  Hold 5 office hours per week to assist students with coursework, debugging, and understanding
                  algorithm complexity
                </li>
                <li>Created supplementary learning materials including practice problems and video tutorials</li>
                <li>Achieved 4.8/5.0 student satisfaction rating based on end-of-semester surveys</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>VicePresident_CSClub</h3>
              <p className="experience-date">University Name | January 2024 - Present</p>
              <ul>
                <li>
                  Organize and lead weekly coding workshops covering topics like web development, machine learning, and
                  competitive programming for 120+ active members
                </li>
                <li>
                  Coordinate and manage 3 major hackathons per year with total participation of 300+ students and
                  $15,000 in prizes
                </li>
                <li>
                  Establish partnerships with 5 tech companies for guest speaker sessions, networking events, and
                  recruitment opportunities
                </li>
                <li>
                  Mentor 15+ first and second-year students through our peer mentorship program, providing guidance on
                  coursework, projects, and career planning
                </li>
                <li>Manage club budget of $8,000 and coordinate with 6 other executive board members</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>FreelanceWebDev</h3>
              <p className="experience-date">Self-Employed | March 2023 - May 2024</p>
              <ul>
                <li>
                  Built custom websites for 8 small business clients using React, WordPress, and modern web technologies
                </li>
                <li>
                  Designed responsive, SEO-optimized websites that improved client&apos;s online presence and customer
                  engagement by average of 40%
                </li>
                <li>Managed full project lifecycle from requirements gathering to deployment and maintenance</li>
                <li>Provided training to clients on content management and website updates</li>
                <li>Maintained 100% client satisfaction rate with all projects delivered on time and within budget</li>
              </ul>
            </div>
          </section>

          <section id="education">
            <h2>Education</h2>
            <div className="experience-item">
              <h3>BSc_ComputerScience</h3>
              <p className="experience-date">University Name | Expected Graduation: May 2026</p>
              <ul>
                <li>
                  <strong>GPA:</strong> 3.8/4.0
                </li>
                <li>
                  <strong>Relevant Coursework:</strong> Data Structures, Algorithms, Database Systems, Software
                  Engineering, Machine Learning, Computer Networks, Operating Systems, Web Development, Artificial
                  Intelligence
                </li>
                <li>
                  <strong>Awards:</strong> Dean&apos;s List (Fall 2023, Spring 2024), Hackathon Winner (University Code
                  Fest 2024), Outstanding CS Student Award
                </li>
              </ul>
            </div>
          </section>

          <footer>
            <p>Let&apos;s build something amazing together! Feel free to reach out.</p>
            <p style={{ marginTop: "10px" }}>© 2025 Alex Chen. All rights reserved.</p>
          </footer>
        </div>
      )}

      {/* TaskFlow Detail */}
      {currentView === "taskflow" && (
        <div id="taskflow-detail" className="project-detail-page active">
          <span className="back-button" onClick={showMainPage}>
            Back to Portfolio
          </span>

          <div className="project-header">
            <h1>TaskFlow</h1>
            <p className="project-subtitle">
              A real-time collaborative project management application built with modern web technologies
            </p>
            <div className="tech-tags" style={{ marginTop: "20px" }}>
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Socket.io</span>
              <span className="tech-tag">Redux</span>
              <span className="tech-tag">Material-UI</span>
              <span className="tech-tag">AWS EC2</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Project Overview</h3>
            <p>
              TaskFlow is a comprehensive project management solution designed to help teams collaborate effectively in
              real-time. The application provides a seamless experience for managing projects, tracking tasks, and
              maintaining team communication all in one place. Built with scalability and performance in mind, TaskFlow
              can handle multiple concurrent users while maintaining instant synchronization across all clients.
            </p>
            <p>
              The project was developed over a 3-month period as part of my software engineering coursework, where I
              served as the lead developer in a team of 4 students. The application has been deployed on AWS and is
              currently being used by 3 student organizations at my university.
            </p>
          </div>

          <div className="detail-section">
            <h3>Key Metrics</h3>
            <div className="metrics-grid">
              <div className="metric-card">
                <span className="metric-number">1000+</span>
                <span className="metric-label">Concurrent Users Supported</span>
              </div>
              <div className="metric-card">
                <span className="metric-number">150ms</span>
                <span className="metric-label">Average Response Time</span>
              </div>
              <div className="metric-card">
                <span className="metric-number">99.9%</span>
                <span className="metric-label">Uptime</span>
              </div>
              <div className="metric-card">
                <span className="metric-number">50+</span>
                <span className="metric-label">Active Projects</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3>Features & Functionality</h3>

            <h4>Real-Time Collaboration</h4>
            <p>
              The core feature of TaskFlow is its real-time synchronization. Using Socket.io, any changes made by one
              user are instantly reflected for all team members viewing the same project. This includes task updates,
              status changes, comments, and file uploads.
            </p>
            <ul>
              <li>Instant updates across all connected clients using WebSocket technology</li>
              <li>Presence indicators showing which team members are currently online</li>
              <li>Live cursor tracking for collaborative editing</li>
              <li>Conflict resolution for simultaneous edits</li>
            </ul>

            <h4>Kanban Board Interface</h4>
            <p>
              The main interface features a drag-and-drop Kanban board that makes task management intuitive and visual.
              Tasks can be easily moved between columns representing different stages of completion.
            </p>
            <ul>
              <li>Customizable board columns (To Do, In Progress, Review, Done, etc.)</li>
              <li>Smooth drag-and-drop animations using React DnD</li>
              <li>Task filtering and searching capabilities</li>
              <li>Color-coded priority levels and tags</li>
              <li>Quick task creation with keyboard shortcuts</li>
            </ul>

            <h4>User Management & Authentication</h4>
            <ul>
              <li>Secure JWT-based authentication system</li>
              <li>Role-based access control (Admin, Manager, Member)</li>
              <li>User profile management with avatars</li>
              <li>Team invitation system via email</li>
              <li>Password reset functionality</li>
            </ul>

            <h4>File Attachments & Cloud Storage</h4>
            <ul>
              <li>Direct file uploads to AWS S3 buckets</li>
              <li>Support for multiple file types (documents, images, videos)</li>
              <li>File preview functionality</li>
              <li>Version control for uploaded files</li>
              <li>Automatic thumbnail generation for images</li>
            </ul>

            <h4>Team Communication</h4>
            <ul>
              <li>Integrated chat system for each project</li>
              <li>Comment threads on individual tasks</li>
              <li>@mentions to notify specific team members</li>
              <li>Rich text editor for formatted messages</li>
              <li>Message history and search</li>
            </ul>

            <h4>Notifications & Reminders</h4>
            <ul>
              <li>In-app notifications for task assignments and updates</li>
              <li>Email notifications for important events</li>
              <li>Deadline reminders sent 24 hours before due dates</li>
              <li>Customizable notification preferences</li>
              <li>Push notifications for mobile browsers</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Technical Challenges & Solutions</h3>
            <h4>Real-time Synchronization</h4>
            <p>
              One of the biggest challenges was ensuring that all connected clients stayed synchronized when multiple
              users were editing the same project simultaneously. I implemented Socket.io with custom event handlers and
              conflict resolution algorithms to handle concurrent updates gracefully.
            </p>

            <h4>Scalability</h4>
            <p>
              To ensure the application could handle growth, I designed the backend with horizontal scaling in mind. The
              MongoDB database uses sharding for data distribution, and the Node.js servers can be load-balanced across
              multiple instances.
            </p>

            <h4>State Management</h4>
            <p>
              Managing application state across multiple components was complex. I used Redux with normalized state
              structure and implemented optimistic UI updates to provide instant feedback while waiting for server
              confirmation.
            </p>
          </div>

          <div className="detail-section">
            <h3>Learning Outcomes</h3>
            <ul>
              <li>Gained deep understanding of WebSocket protocol and real-time communication patterns</li>
              <li>Learned to design and implement RESTful APIs following industry best practices</li>
              <li>Developed skills in database schema design and optimization for NoSQL databases</li>
              <li>Improved team collaboration and project management abilities</li>
              <li>Gained practical experience with cloud deployment and DevOps practices</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Future Enhancements</h3>
            <ul>
              <li>Implement mobile applications for iOS and Android using React Native</li>
              <li>Add video conferencing integration for team meetings</li>
              <li>Introduce AI-powered task suggestions and time estimation</li>
              <li>Develop advanced analytics and reporting dashboards</li>
              <li>Add integration with popular tools like Slack, GitHub, and Jira</li>
            </ul>
          </div>

          <footer>
            <p>© 2025 Alex Chen | Built with dedication and lots of coffee ☕</p>
          </footer>
        </div>
      )}

      {/* AI-Recommend Detail */}
      {currentView === "ai-recommend" && (
        <div id="ai-recommend-detail" className="project-detail-page active">
          <span className="back-button" onClick={showMainPage}>
            Back to Portfolio
          </span>

          <div className="project-header">
            <h1>AI-RecommendEngine</h1>
            <p className="project-subtitle">Machine learning-powered movie recommendation system with 85% accuracy</p>
            <div className="tech-tags" style={{ marginTop: "20px" }}>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Scikit-learn</span>
              <span className="tech-tag">Pandas</span>
              <span className="tech-tag">NumPy</span>
              <span className="tech-tag">Flask</span>
              <span className="tech-tag">PostgreSQL</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Project Overview</h3>
            <p>
              AI-RecommendEngine is an intelligent movie recommendation system that uses collaborative filtering and
              content-based algorithms to suggest personalized movie recommendations. The system analyzes user viewing
              history, ratings, and preferences to generate accurate predictions about which movies users are likely to
              enjoy.
            </p>
            <p>
              This project was developed as part of my Machine Learning course and demonstrates practical application of
              ML algorithms in a real-world scenario. The system has been trained on a dataset of over 100,000 movie
              ratings and continues to improve as more user data is collected.
            </p>
          </div>

          <div className="detail-section">
            <h3>Key Features</h3>
            <h4>Hybrid Recommendation Approach</h4>
            <ul>
              <li>Collaborative filtering based on user similarity</li>
              <li>Content-based filtering using movie metadata (genre, director, actors)</li>
              <li>Hybrid model combining both approaches for optimal results</li>
            </ul>

            <h4>Advanced ML Techniques</h4>
            <ul>
              <li>Matrix factorization using Singular Value Decomposition (SVD)</li>
              <li>K-Nearest Neighbors for finding similar users and movies</li>
              <li>Neural collaborative filtering for deep learning-based recommendations</li>
              <li>Cold start problem handling for new users and movies</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Technical Implementation</h3>
            <p>
              The recommendation engine is built using Python&apos;s scientific computing stack. I used Pandas for data
              manipulation and preprocessing, implementing custom feature engineering pipelines to extract meaningful
              signals from raw data. The ML models were built using Scikit-learn and TensorFlow, with extensive
              hyperparameter tuning to achieve optimal performance.
            </p>
            <p>
              The backend API is powered by Flask, providing RESTful endpoints for retrieving recommendations,
              submitting ratings, and managing user preferences. Data is stored in PostgreSQL with optimized indexing
              for fast query performance.
            </p>
          </div>

          <div className="detail-section">
            <h3>Results & Performance</h3>
            <div className="metrics-grid">
              <div className="metric-card">
                <span className="metric-number">85%</span>
                <span className="metric-label">Prediction Accuracy</span>
              </div>
              <div className="metric-card">
                <span className="metric-number">0.78</span>
                <span className="metric-label">RMSE Score</span>
              </div>
              <div className="metric-card">
                <span className="metric-number">200ms</span>
                <span className="metric-label">Avg Response Time</span>
              </div>
              <div className="metric-card">
                <span className="metric-number">100K+</span>
                <span className="metric-label">Training Samples</span>
              </div>
            </div>
          </div>

          <footer>
            <p>© 2025 Alex Chen | Built with dedication and lots of coffee ☕</p>
          </footer>
        </div>
      )}

      {/* Expense Tracker Detail */}
      {currentView === "expense-tracker" && (
        <div id="expense-tracker-detail" className="project-detail-page active">
          <span className="back-button" onClick={showMainPage}>
            Back to Portfolio
          </span>

          <div className="project-header">
            <h1>CloudExpenseTracker</h1>
            <p className="project-subtitle">
              Serverless expense tracking application with automated OCR receipt scanning
            </p>
            <div className="tech-tags" style={{ marginTop: "20px" }}>
              <span className="tech-tag">AWS Lambda</span>
              <span className="tech-tag">DynamoDB</span>
              <span className="tech-tag">S3</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">API Gateway</span>
              <span className="tech-tag">Rekognition</span>
              <span className="tech-tag">Cognito</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Project Overview</h3>
            <p>
              CloudExpenseTracker is a modern, serverless expense management application that leverages AWS cloud
              services to provide a scalable, cost-effective solution for personal and small business expense tracking.
              The application features automated receipt scanning using OCR technology, eliminating manual data entry
              and reducing errors.
            </p>
            <p>
              Built entirely on AWS serverless architecture, the application automatically scales to handle varying
              loads while minimizing operational costs. Users can snap photos of receipts, and the system automatically
              extracts key information like merchant name, date, amount, and category.
            </p>
          </div>

          <div className="detail-section">
            <h3>Architecture & Technologies</h3>
            <h4>Frontend</h4>
            <ul>
              <li>React-based single-page application with responsive design</li>
              <li>Material-UI components for consistent user interface</li>
              <li>Progressive Web App (PWA) capabilities for mobile experience</li>
              <li>Real-time updates using WebSocket connections</li>
            </ul>

            <h4>Backend Services</h4>
            <ul>
              <li>AWS Lambda functions for serverless compute</li>
              <li>API Gateway for RESTful API management</li>
              <li>DynamoDB for scalable NoSQL data storage</li>
              <li>S3 for receipt image storage with lifecycle policies</li>
              <li>Rekognition for OCR and text extraction from receipts</li>
              <li>Cognito for user authentication and authorization</li>
              <li>CloudWatch for monitoring and logging</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Key Features</h3>
            <ul>
              <li>Automated receipt scanning with 92% accuracy using AWS Rekognition</li>
              <li>Smart categorization of expenses using machine learning</li>
              <li>Monthly budget tracking and alerts</li>
              <li>Interactive charts and spending analytics</li>
              <li>Export functionality to CSV and PDF formats</li>
              <li>Multi-currency support with automatic conversion</li>
              <li>Secure user authentication with MFA support</li>
              <li>Offline mode with automatic sync when online</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Technical Achievements</h3>
            <p>
              This project demonstrated my ability to design and implement cloud-native applications using serverless
              architecture. I learned to optimize Lambda functions for cold start performance, implement efficient
              DynamoDB data models with proper indexing strategies, and manage AWS resources using Infrastructure as
              Code (CloudFormation).
            </p>
            <p>
              The OCR implementation required extensive testing and tuning to handle various receipt formats, lighting
              conditions, and image quality. I implemented preprocessing steps to enhance image quality before OCR
              processing, significantly improving accuracy rates.
            </p>
          </div>

          <div className="detail-section">
            <h3>Cost Optimization</h3>
            <ul>
              <li>Average monthly cost: $5 for 1000 active users</li>
              <li>Pay-per-use pricing model eliminates fixed server costs</li>
              <li>S3 lifecycle policies automatically archive old receipts to Glacier</li>
              <li>DynamoDB on-demand pricing for unpredictable traffic patterns</li>
              <li>CloudFront CDN for efficient static asset delivery</li>
            </ul>
          </div>

          <footer>
            <p>© 2025 Alex Chen | Built with dedication and lots of coffee ☕</p>
          </footer>
        </div>
      )}
    </div>
  )
}
