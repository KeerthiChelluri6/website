export default function Publications() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Publications</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg hover-lift">
            <div className="flex items-start space-x-4">
              <i className="fas fa-file-alt text-3xl text-primary mt-2"></i>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Air Canvas Using OpenCV and YOLOv5 Algorithm</h3>
                <p className="text-gray-600 mb-4">
                  This paper focuses on the Air Canvas web application, its functionalities and algorithms using Python, OpenCV, YOLOv5.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Published: June 2023</span>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-secondary transition-colors">
                    View Publication <i className="fas fa-external-link-alt ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
