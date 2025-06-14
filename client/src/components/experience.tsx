export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-primary hover-lift">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Associate Software Engineer, Data</h3>
                <p className="text-primary font-semibold">DXC Technology, India</p>
              </div>
              <div className="text-gray-600 mt-2 md:mt-0">
                <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">2023</span>
              </div>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                <span>Contributed to ETL pipeline development for AI/ML solutions, transforming raw utility grid data into structured datasets for predictive maintenance models built for a European energy company.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                <span>Implemented data validation and cleaning procedures using Python, ensuring high-quality inputs for machine learning algorithms analyzing network infrastructure.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                <span>Collaborated with cross-functional teams to integrate data from multiple sources into a unified platform, supporting scalable computer vision model deployment for utility clients.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                <span>Developed data transformation workflows that reduced processing time by 30% while maintaining data integrity across the analytics pipeline.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
