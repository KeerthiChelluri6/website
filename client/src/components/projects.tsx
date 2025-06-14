export default function Projects() {
  const projects = [
    {
      title: "Air Canvas Using YOLO Object Detection",
      description: "Developed an air canvas application using YOLOv5s and OpenCV for real-time hand tracking, gesture recognition, and virtual drawing with customizable brush features.",
      image: "https://images.unsplash.com/photo-1559163499-413811fb2344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["YOLOv5", "OpenCV", "Python", "Computer Vision"]
    },
    {
      title: "Restaurant Management System",
      description: "Built a full-stack web application using Django and PostgreSQL for user registration, table reservations, and management with a responsive interface.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Django", "PostgreSQL", "HTML/CSS", "Full-Stack"]
    },
    {
      title: "Face Generation with GANs",
      description: "Implemented advanced training techniques, including transfer learning and fine-tuning, on GANs for facial generation, reducing training time by 40%.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["GANs", "Deep Learning", "Transfer Learning", "PyTorch"]
    },
    {
      title: "Handwritten Digit Classifier",
      description: "Developed a neural network in PyTorch for MNIST digit classification achieving 96.81% accuracy with Adam optimizer and GPU acceleration.",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["PyTorch", "Neural Networks", "CUDA", "96.81% Accuracy"]
    },
    {
      title: "Landmark Classification and Tagging",
      description: "Implemented CNN with transfer learning for landmark image classification, achieving 74% accuracy through advanced preprocessing and optimization.",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["CNN", "Transfer Learning", "Image Classification", "74% Accuracy"]
    },
    {
      title: "Text Translation & Sentiment Analysis",
      description: "Built a multi-lingual tool using MarianMT for translation and BERT-based models for sentiment analysis of French and Spanish movie reviews.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["NLP", "BERT", "MarianMT", "Transformers"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover-lift">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-primary font-semibold hover:text-secondary transition-colors">
                  View Project <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
