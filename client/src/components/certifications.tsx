interface Certification {
  title: string;
  issuer: string;
  credentialUrl?: string;
  credentialId?: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      title: "NVIDIA DLI - Rapid Application Development with LLMs",
      issuer: "NVIDIA Deep Learning Institute",
      credentialUrl: "https://learn.nvidia.com/certificates?id=PgmSSBh7Sg2U72LSvZhTxg",
      credentialId: "PgmSSBh7Sg2U72LSvZhTxg"
    },
    {
      title: "NVIDIA DLI - Getting Started with Deep Learning",
      issuer: "NVIDIA Deep Learning Institute",
      credentialUrl: "https://courses.nvidia.com/certificates/f012c14279e04218b5ce44ed3eab85fb",
      credentialId: "f012c14279e04218b5ce44ed3eab85fb"
    },
    {
      title: "NVIDIA DLI - Introduction to Transformer-Based NLP",
      issuer: "NVIDIA Deep Learning Institute",
      credentialUrl: "https://courses.nvidia.com/certificates/2e3f7b43090a4f8ebc5348f9c6fd9723/",
      credentialId: "2e3f7b43090a4f8ebc5348f9c6fd9723"
    },
    {
      title: "Deep Learning Nanodegree",
      issuer: "Udacity",
      credentialUrl: "https://confirm.udacity.com/e/ade211e0-65f5-11ee-8f4a-03489a63bfc5",
      credentialId: "ade211e0-65f5-11ee-8f4a-03489a63bfc5"
    },
    {
      title: "LLMOps: Building Real-World Applications with LLMs",
      issuer: "Udacity"
    },
    {
      title: "Backend Engineering Virtual Experience Program",
      issuer: "Forage"
    },
    {
      title: "Computing using Python",
      issuer: "NPTEL"
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL"
    },
    {
      title: "Robotic Process Automation",
      issuer: "UiPath"
    },
    {
      title: "Kubernetes for the Absolute Beginners",
      issuer: "Udemy",
      credentialUrl: "https://www.udemy.com/certificate/UC-73cfa3c1-f483-4dea-a5ce-19bb7ed12fc0/",
      credentialId: "UC-73cfa3c1-f483-4dea-a5ce-19bb7ed12fc0"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover-lift">
              <div className="text-center">
                <i className="fas fa-certificate text-3xl text-primary mb-4"></i>
                <h3 className="font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{cert.issuer}</p>
                {cert.credentialUrl ? (
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:text-secondary transition-colors text-sm"
                  >
                    View Certificate <i className="fas fa-external-link-alt ml-1"></i>
                  </a>
                ) : (
                  <button className="text-primary font-medium hover:text-secondary transition-colors text-sm">
                    View Certificate <i className="fas fa-external-link-alt ml-1"></i>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
