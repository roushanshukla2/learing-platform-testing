// src/components/TutorialView.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BookOpen, CheckCircle, ArrowLeft } from 'lucide-react';
import { getTutorialMap } from '../utils/tutorialLoader';

const TutorialView = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState(new Set());

  // Load tutorials dynamically
  const tutorialMap = getTutorialMap();
  const data = tutorialMap[subject];

  // Mark section as completed when user moves to next section
  const markSectionComplete = (sectionIndex) => {
    setCompletedSections(prev => new Set([...prev, sectionIndex]));
  };

  // Navigate to next section
  const goToNextSection = () => {
    if (currentSection < data.topics.length - 1) {
      markSectionComplete(currentSection);
      setCurrentSection(currentSection + 1);
    }
  };

  // Navigate to previous section
  const goToPrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  // Navigate to specific section
  const goToSection = (index) => {
    setCurrentSection(index);
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tutorial Not Found</h2>
          <p className="text-gray-600 mb-4">
            The tutorial for "{subject}" doesn't exist yet.
          </p>
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">Available tutorials:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {Object.keys(tutorialMap).map((key) => (
                <span
                  key={key}
                  onClick={() => navigate(`/tutorial/${key}`)}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm cursor-pointer hover:bg-blue-200 transition-colors"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const totalSections = data.topics.length;
  const completionPercentage = Math.round((completedSections.size / totalSections) * 100);
  const currentTopic = data.topics[currentSection];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>

      {/* Mobile Header - Simplified without hamburger */}
      <div className="lg:hidden bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="flex items-center justify-between p-3 sm:p-4">
          <button
            onClick={() => navigate('/')}
            className="p-2 hover:bg-gray-100 rounded-lg flex-shrink-0"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <div className="text-center flex-1 min-w-0 px-2">
            <h1 className="font-semibold text-gray-900 truncate text-sm sm:text-base">{currentTopic.heading}</h1>
            <p className="text-xs text-gray-500">{currentSection + 1} of {totalSections}</p>
          </div>
          <div className="w-10 h-10 flex-shrink-0"></div> {/* Spacer for balance */}
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar - Always visible on desktop, hidden on mobile */}
        <div
          className="hidden lg:flex lg:flex-col bg-white shadow-lg sticky top-0"
          style={{ height: '100vh', width: '20vw', minWidth: 240, maxWidth: 400 }}
        >
          {/* Sidebar Header */}
          <div
            className="p-4 sm:p-6 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white flex-shrink-0"
            style={{ height: '35vh', minHeight: 120 }}
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-white/80 hover:text-white mb-4 text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Tutorials
            </button>
            <h1 className="text-lg sm:text-xl font-bold mb-2 break-words">{data.title}</h1>
            <p className="text-blue-100 text-xs sm:text-sm mb-4 break-words">{data.description}</p>
            
            {/* Progress */}
            <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
              <span>Section {currentSection + 1} of {totalSections}</span>
              <span>{completionPercentage}% Complete</span>
            </div>
            <div className="w-full bg-blue-500 rounded-full h-2">
              <div
                className="bg-white rounded-full h-2 transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>

          {/* Table of Contents */}
          <div
            className="p-3 sm:p-4"
            style={{
              height: '80vh',
              overflowY: 'auto',
              flex: '1 1 0%',
            }}
          >
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center text-sm sm:text-base">
              <BookOpen className="h-4 w-4 mr-2" />
              Table of Contents
            </h3>
            <nav className="space-y-2">
              {data.topics.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => goToSection(index)}
                  className={`
                    w-full text-left p-2 sm:p-3 rounded-lg transition-all duration-200 group
                    ${currentSection === index 
                      ? 'bg-blue-50 border-l-4 border-blue-600 text-blue-900' 
                      : 'hover:bg-gray-50 text-gray-700'
                    }
                  `}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-xs sm:text-sm break-words">{topic.heading}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {topic.subheadings.length} sections
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                      {completedSections.has(index) && (
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                      )}
                      {currentSection === index && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                      <span className="text-xs bg-gray-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 w-full max-w-none px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 mx-auto">
            {/* Desktop Header */}
            <div className="hidden lg:block mb-6 lg:mb-8">
              <button
                onClick={() => navigate('/')}
                className="flex items-center text-gray-600 hover:text-gray-900 mb-4 lg:mb-6 text-sm"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Tutorials
              </button>
              
              <div className="mb-4 lg:mb-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-4">
                  <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 break-words">{data.title}</h1>
                  <div className="text-left lg:text-right flex-shrink-0">
                    <div className="text-sm text-gray-600">Section</div>
                    <div className="text-lg font-semibold text-blue-600">
                      {currentSection + 1} of {totalSections}
                    </div>
                  </div>
                </div>
                <p className="text-lg lg:text-xl text-gray-600 break-words">{data.description}</p>
              </div>
            </div>

            {/* Current Section Content */}
            <div className="bg-white rounded-lg lg:rounded-xl shadow-sm border p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8">
              <div className="mb-4 lg:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-start mb-4 gap-3">
                  <span className="bg-blue-600 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full flex-shrink-0 self-start">
                    {currentSection + 1}
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 break-words min-w-0">{currentTopic.heading}</h2>
                </div>
              </div>

              <div className="space-y-6 lg:space-y-8">
                {currentTopic.subheadings.map((sub, subIndex) => (
                  <div key={subIndex} className="sub-topic">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 lg:mb-4 pb-2 border-b border-gray-100 break-words">
                      {sub.title}
                    </h3>
                    <div className="overflow-x-auto">
                      <div 
                        className="prose prose-sm sm:prose-base lg:prose-lg max-w-none 
                          prose-headings:text-gray-900 prose-headings:break-words
                          prose-p:text-gray-700 prose-p:break-words
                          prose-a:text-blue-600 prose-a:break-all
                          prose-code:bg-gray-100 prose-code:px-1 sm:prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-xs sm:prose-code:text-sm prose-code:break-all
                          prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:text-xs sm:prose-pre:text-sm prose-pre:overflow-x-auto
                          prose-ul:break-words prose-ol:break-words prose-li:break-words
                          prose-table:text-xs sm:prose-table:text-sm prose-table:w-full prose-table:min-w-full
                          prose-th:break-words prose-th:p-2 prose-th:text-left prose-th:font-semibold prose-th:bg-gray-50 prose-th:border prose-th:border-gray-300
                          prose-td:break-words prose-td:p-2 prose-td:border prose-td:border-gray-300 prose-td:align-top prose-td:min-w-0
                          [&_table]:w-full [&_table]:border-collapse [&_table]:border [&_table]:border-gray-300 [&_table]:rounded-lg [&_table]:shadow-sm [&_table]:bg-white
                          [&_thead_tr]:bg-gray-50
                          [&_tbody_tr:nth-child(even)]:bg-gray-50
                          [&_tbody_tr:nth-child(odd)]:bg-white"
                        dangerouslySetInnerHTML={{ __html: sub.content }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 lg:mb-8">
              <div className="w-full sm:w-auto">
                {currentSection > 0 ? (
                  <button
                    onClick={goToPrevSection}
                    className="w-full sm:w-auto flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </button>
                ) : (
                  <div className="hidden sm:block"></div>
                )}
              </div>

              <div className="text-center flex-shrink-0 order-first sm:order-none">
                <div className="text-sm text-gray-500 mb-2">
                  {completedSections.has(currentSection) && (
                    <div className="flex items-center justify-center text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Completed
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full sm:w-auto">
                {currentSection < totalSections - 1 ? (
                  <button
                    onClick={goToNextSection}
                    className="w-full sm:w-auto flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </button>
                ) : (
                  <div className="text-center w-full">
                    {completedSections.has(currentSection) ? (
                      <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center justify-center flex-wrap">
                          <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-2" />
                          <span className="font-semibold text-green-900 text-sm sm:text-base">Tutorial Complete! 🎉</span>
                        </div>
                      </div>
                    ) : completionPercentage >=75 ? (
                      <button
                        onClick={() => markSectionComplete(currentSection)}
                        className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
                      >
                        Mark as Complete
                      </button>
                    ) : (
                      <div className="p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-lg">
                        <div className="text-center">
                          <span className="text-gray-600 text-xs sm:text-sm block mb-1 break-words">Complete at least 80% to mark as finished</span>
                          <span className="text-gray-500 text-xs">Currently: {completionPercentage}%</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Section Progress Indicator */}
            <div className="pt-4 sm:pt-6 border-t">
              <div className="flex items-center justify-center space-x-1 sm:space-x-2 flex-wrap gap-y-2">
                {data.topics.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSection(index)}
                    className={`
                      w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 flex-shrink-0
                      ${index === currentSection 
                        ? 'bg-blue-600 scale-125' 
                        : completedSections.has(index)
                        ? 'bg-green-500'
                        : 'bg-gray-300 hover:bg-gray-400'
                      }
                    `}
                    title={`Section ${index + 1}: ${data.topics[index].heading}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialView;