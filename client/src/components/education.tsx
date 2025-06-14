export default function Education() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Master's Degree */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border-l-4 border-primary hover-lift">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Master of Science in Software Engineering</h3>
                <p className="text-primary font-semibold">George Mason University</p>
              </div>
              <div>
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">Aug 2023 - May 2025</span>
                <p className="text-gray-600 mt-2 text-center">GPA: 3.3/4.0</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              <strong>Coursework:</strong> Component-based Software Development, Secure Software Design and Architecture, 
              User Interface Design and Development, Software Testing
            </p>
          </div>

          {/* Bachelor's Degree */}
          <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-gray-400 hover-lift">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-700 font-semibold">Gayatri Vidya Parishad College of Engineering for Women</p>
              </div>
              <div>
                <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium">May 2018 - May 2022</span>
                <p className="text-gray-600 mt-2 text-center">GPA: 8.3/10</p>
              </div>
            </div>
            <p className="text-gray-600">
              <strong>Coursework:</strong> Programming in JAVA, Python, C++, HTML, CSS, Data Structures & Algorithms, 
              Database Management Systems, Operating Systems, Robotic Process Automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
