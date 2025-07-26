// src/components/TutorialHome.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Database, Globe, Layers } from 'lucide-react';
import { getTutorialMap } from '../utils/tutorialLoader';

// Icon mapping for different tutorial types
const getIconForTutorial = (tutorialKey) => {
  const iconMap = {
    sql: <Database className="h-8 w-8" />,
    html: <Globe className="h-8 w-8" />,
    css: <Layers className="h-8 w-8" />,
    javascript: <Code className="h-8 w-8" />,
    python: <Code className="h-8 w-8" />,
    react: <Code className="h-8 w-8" />,
    nodejs: <Code className="h-8 w-8" />,
  };
  
  return iconMap[tutorialKey] || <BookOpen className="h-8 w-8" />;
};

// Color scheme for different tutorials
const getColorForTutorial = (tutorialKey) => {
  const colorMap = {
    sql: 'from-blue-500 to-blue-600',
    html: 'from-orange-500 to-orange-600',
    css: 'from-purple-500 to-purple-600',
    javascript: 'from-yellow-500 to-yellow-600',
    python: 'from-green-500 to-green-600',
    react: 'from-cyan-500 to-cyan-600',
    nodejs: 'from-emerald-500 to-emerald-600',
  };
  
  return colorMap[tutorialKey] || 'from-gray-500 to-gray-600';
};

const TutorialHome = () => {
  // Load tutorials dynamically
  const tutorials = getTutorialMap();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        

        {/* Tutorial Grid */}
        {Object.keys(tutorials).length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(tutorials).map(([key, tutorial]) => (
              <Link
                key={key}
                to={`/tutorial/${key}`}
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${getColorForTutorial(key)} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getIconForTutorial(key)}
                        <h3 className="text-xl font-bold">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </h3>
                      </div>
                      <div className="opacity-75">
                        <BookOpen className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {tutorial.title}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {tutorial.description}
                    </p>
                    
                    {/* Tutorial Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <Layers className="h-4 w-4 mr-1" />
                        {tutorial.topics?.length || 0} sections
                      </span>
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                        Beginner Friendly
                      </span>
                    </div>

                    {/* Call to Action */}
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                        Start Learning →
                      </span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Tutorials Found</h3>
            <p className="text-gray-600">
              Add tutorial files to the <code className="bg-gray-100 px-2 py-1 rounded">src/data/</code> directory to see them here.
            </p>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default TutorialHome;
