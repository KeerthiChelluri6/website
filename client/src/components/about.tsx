export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate AI Engineer currently pursuing my Master's in Software Engineering at George Mason University 
              (GPA: 3.5/4.0), expected to graduate in May 2025. With a strong foundation in Computer Science and hands-on 
              experience in AI/ML solutions, I specialize in developing intelligent applications that solve complex problems.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              My experience at DXC Technology involved building ETL pipelines for AI/ML solutions, working with utility grid 
              data for predictive maintenance models, and collaborating with cross-functional teams to deploy scalable 
              computer vision solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm passionate about leveraging cutting-edge technologies like Deep Learning, Computer Vision, and NLP 
              to create innovative solutions that make a real impact.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center hover-lift">
              <i className="fas fa-graduation-cap text-3xl text-primary mb-4"></i>
              <h3 className="font-semibold text-gray-800 mb-2">Education</h3>
              <p className="text-sm text-gray-600">MS Software Engineering<br />George Mason University</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center hover-lift">
              <i className="fas fa-briefcase text-3xl text-primary mb-4"></i>
              <h3 className="font-semibold text-gray-800 mb-2">Experience</h3>
              <p className="text-sm text-gray-600">Associate Software Engineer<br />DXC Technology</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center hover-lift">
              <i className="fas fa-certificate text-3xl text-primary mb-4"></i>
              <h3 className="font-semibold text-gray-800 mb-2">Certifications</h3>
              <p className="text-sm text-gray-600">NVIDIA DLI Certified<br />Multiple Specializations</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center hover-lift">
              <i className="fas fa-code text-3xl text-primary mb-4"></i>
              <h3 className="font-semibold text-gray-800 mb-2">Projects</h3>
              <p className="text-sm text-gray-600">AI/ML Applications<br />Computer Vision & NLP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
