import Typewriter from "typewriter-effect";
import React from "react";
import Section from './components/Section'; 
import ProjectCard from './components/ProjectCard'; 
import information from "./content/info";
import SkillCard from "./components/SkillCard";
import LanguageCard from "./components/Language";
import './App.css';

function App() {
  return (
    <div className="page">
      {/* --- Intro Section --- */}
      <section className="intro">
        <h1 className="header">Hello, my name is <span className="highlight">Faishal Kemal</span></h1>
        <div className="role-typewriter">
          <p className="smaller">I'm</p>
          <div className="typewriter-wrapper">
            <Typewriter
              options={{
                strings: ["a Data Analyst", "a Data Scientist", "a Data Engineer", "an AI/ML Developer", "a Desktop Application Developer"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
        </div>
        <p className="intro-summary">
          {information.userData.desc}
        </p>
      </section>

      {/* --- Projects Section --- */}
      <Section title="Projects">
        <ProjectCard
          title="AegisLens"
          year="2025"
          description="A group project creating real-time object detection and OCR for vehicle dashcams, detecting vehicles and license plates. Key achievement includes an F1 Score of ±0.80."
          link="https://github.com/vikesaki/AegisLens"
          theme = {["Object Detection", "OCR", "Desktop App Dev"]}
        />
        <ProjectCard
          title="Airline Customer Satisfaction"
          year="2025"
          description="A Machine Learning project to predict passenger satisfaction. Built an end-to-end pipeline and achieved an F1-Score of 0.94."
          link="https://airlinecustomersatisfactionproject.streamlit.app/"
          theme = {["Prediction Model", "Streamlit", "Data Analysis"]}
        />
        <ProjectCard
            title="Graphical utility for MAXIMA"
            year="2024"
            description="Developed a graphical utility in Python for the MAXIMA Computer Algebra System, commissioned by the Russian Academy of Sciences (ДВО РАН). Improved user workflow by ~50%."
            link="https://github.com/vikesaki/MaximaAdditionalGraphicalUtility"
            theme = {["Data Visualization", "Desktop App Dev", "MAXIMA"]}
        />
        <ProjectCard
            title="PHP to Python Translator"
            year="2024"
            description="A group project to create a language translator from PHP to Python using C#. I led the development of the parser, translator logic, and code optimization."
            link="https://github.com/vikesaki/PHP_to_Python_Translator"
            theme = {["Translator", "Parser", "C#"]}
        />
        <ProjectCard
          title="Suicide Analysis Dashboard"
          year="2025"
          description="A Data Analyst project exploring global suicide trends. Performed statistical analysis and deployed an interactive dashboard on Tableau Public."
          link="https://public.tableau.com/views/DashboardSuicideAnalysis/SuicideDataAnalysis"
          theme = {["Data Visualization", "Data Analysis"]}
        />
      </Section>

      {/* --- Tech Stack & Skills Section --- */}
      <Section title="Tech Stack & Skills">
      <div className="skills-grid">
        <SkillCard 
          title="Programming Languages" 
          skills={["Python", "SQL", "NoSQL", "C#", "C/C++", "Java", "JavaScript", "TypeScript", "React"]} 
        />
        <SkillCard 
          title="AI/ML Development" 
          skills={["Classification", "Regression", "Computer Vision", "Object Detection", "NLP", "VLM"]} 
        />
        <SkillCard 
          title="AI/ML Tools" 
          skills={["Scikit-Learn", "TensorFlow", "PyTorch", "EasyOCR", "YOLO"]} 
        />
        <SkillCard 
          title="Statistical Analysis" 
          skills={["Hypothesis Testing", "ANOVA", "T-test Analysis", "A/B Testing"]} 
        />
        <SkillCard 
          title="Data Visualization" 
          skills={["Tableau", "PowerBI", "Pandas", "Seaborn", "Matplotlib", "Plotly", "Kibana"]} 
        />
        <SkillCard 
          title="Other Tools" 
          skills={["Streamlit", "Docker", "Postman", "Qt", "Hugging Face"]} 
        />
      </div>
    </Section>
      
      {/* --- Languages Section --- */}
      <Section title="Languages">
      <div className="languages-container">
        <LanguageCard 
          language="Bahasa Indonesia" 
          level="Native"
          percentage={100}
        />
        <LanguageCard 
          language="English" 
          level="Good Proficiency"
          percentage={85}
        />
        <LanguageCard 
          language="Russian" 
          level="Modest Proficiency"
          percentage={60}
        />
      </div>
    </Section>

      {/* --- Footer --- */}
      <footer>
        <p>
          <a href="mailto:faishalkemal68@gmail.com">faishalkemal68@gmail.com</a> | 
          <a href="https://github.com/vikesaki" target="_blank" rel="noreferrer">GitHub</a> | 
          <a href="https://linkedin.com/in/faishal-kemal" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}

export default App;