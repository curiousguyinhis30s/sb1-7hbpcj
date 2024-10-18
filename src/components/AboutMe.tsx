import React from 'react';
import { UserCircle, GraduationCap, Heart, Globe } from 'lucide-react';
import Education from './Education';
import PersonalTraits from './PersonalTraits';
import InterestsAndPassions from './InterestsAndPassions';
import Languages from './Languages';

const AboutMe: React.FC = () => {
  return (
    <div className="space-y-6 subtle-background">
      <h1 className="section-header mb-8">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-3">
          <div className="card p-6 rounded-xl shadow-lg transition-all duration-300 bg-black/30 backdrop-blur-md card-hover-effect">
            <h2 className="text-2xl font-semibold mb-3 flex items-center">
              <span className="icon-background mr-2">
                <UserCircle className="w-6 h-6 text-accent" />
              </span>
              My Journey
            </h2>
            <p className="text-text-secondary">
              Born and raised in India, I embarked on a journey of personal and professional growth that led me to Malaysia in 2016. Driven by a desire for better opportunities and a passion for technology, I've consistently pushed myself to learn and adapt. My disciplined approach and unwavering consistency have been key to navigating the challenges of a new environment and excelling in my career. This journey has not only shaped my professional skills but also instilled in me a deep appreciation for diverse perspectives and a relentless pursuit of excellence.
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <Education />
        </div>
        <div className="md:row-span-2">
          <InterestsAndPassions />
        </div>
        <div className="md:col-span-2">
          <PersonalTraits />
        </div>
        <div className="md:col-span-2">
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;