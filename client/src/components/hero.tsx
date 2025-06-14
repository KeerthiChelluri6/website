export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Sai Kusuma Keerthi 
              <span className="text-primary"> Chelluri</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AI Engineer & Software Developer specializing in Machine Learning, Deep Learning, and Computer Vision. 
              Recent MS graduate building intelligent solutions for real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-all duration-200 text-center">
                Get In Touch
              </a>
              <a href="#projects" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200 text-center">
                View Projects
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            {/* Professional headshot placeholder - will be replaced with actual image */}
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-6xl shadow-2xl">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
