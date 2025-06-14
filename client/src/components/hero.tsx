import headshotImage from "@assets/WhatsApp Image 2025-06-14 at 1.08.02 PM_1749922725052.jpeg";

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
              MS graduate with 5 months of experience building intelligent solutions for real-world problems.
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
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={headshotImage} 
                alt="Sai Kusuma Keerthi Chelluri - AI Engineer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
