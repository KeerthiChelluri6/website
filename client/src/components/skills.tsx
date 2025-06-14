export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      skills: ["Python", "Java", "C++", "JavaScript", "SQL", "HTML", "CSS"]
    },
    {
      title: "Machine Learning & AI",
      icon: "fas fa-robot",
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "YOLOv5", "CNNs", "GANs", "NLP", "BERT", "Transformers"]
    },
    {
      title: "Development & Tools",
      icon: "fas fa-tools",
      skills: ["Django", "Flask", "React.js", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS", "Git", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover-lift">
              <div className="text-center mb-6">
                <i className={`${category.icon} text-4xl text-primary mb-4`}></i>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-blue-50 text-primary px-3 py-2 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
