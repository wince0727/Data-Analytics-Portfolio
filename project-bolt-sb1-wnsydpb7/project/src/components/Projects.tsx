import { FolderOpen, BarChart3, TrendingUp, PieChart } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Supermarket Sales EDA',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    icon: BarChart3,
    color: 'from-blue-500 to-cyan-500',
    highlights: [
      'Analyzed 10,000+ sales records to identify customer trends and sales patterns',
      'Created visualizations to analyze top-selling products and peak sales periods',
      'Identified high-revenue categories and low-performing regions',
    ],
    metrics: [
      { label: 'Records Analyzed', value: '10,000+' },
      { label: 'Visualizations', value: '15+' },
      { label: 'Insights Generated', value: '8' },
    ],
  },
  {
    id: 2,
    title: 'Sales Performance Dashboard',
    tools: ['Power BI', 'Power Query', 'DAX'],
    icon: PieChart,
    color: 'from-teal-500 to-green-500',
    highlights: [
      'Built an interactive dashboard to track sales, profit, and category-wise performance',
      'Used Power Query for data cleaning and transformation',
      'Created DAX measures for Total Sales, Profit %, and Monthly Growth',
      'Enabled dynamic filtering using slicers for business insights',
    ],
    metrics: [
      { label: 'DAX Measures', value: '12+' },
      { label: 'Interactive Visuals', value: '10' },
      { label: 'Data Sources', value: '3' },
    ],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <FolderOpen className="text-blue-600 mr-3" size={32} />
          <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`flex-1 p-6 rounded-xl transition-all transform hover:scale-105 ${
                    activeProject === index
                      ? 'bg-gradient-to-br ' + project.color + ' text-white shadow-2xl'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={32} className="mb-3" />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </button>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              {(() => {
                const Icon = projects[activeProject].icon;
                return <Icon className="text-blue-600" size={40} />;
              })()}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {projects[activeProject].title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {projects[activeProject].highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <TrendingUp className="text-teal-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 text-lg">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects[activeProject].metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-2">{metric.value}</div>
                  <div className="text-gray-600 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
