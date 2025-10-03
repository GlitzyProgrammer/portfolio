export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800 bg-blue-600 text-white px-3 py-1 rounded">LW</h1>
            <div className="flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#resume" className="text-gray-600 hover:text-gray-900">Resume</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Salutations, I'm <span className="text-blue-600">Lawrence Wilson II</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          AI Specialist with expertise in immersive technology and data analytics
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="#projects" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View My Work
          </a>
          <a href="/ResumeLW.pdf" download className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Download Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-4">
                I'm a Computer Science student specializing in Artificial Intelligence at the University of Nebraska at Omaha. 
                I'm passionate about immersive technology and data analytics, with professional experience developing VR 
                education simulators and analyzing complex datasets.
              </p>
              <p className="text-gray-600">
                When I'm not coding, you can find me dancing in a multitude of styles including 
                Tango, West Coast Swing, East Coast Swing and many others with my friends. 
              </p>
            </div>
            
            {/* Tech Stack Visualization */}
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tech Stack</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition cursor-pointer">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="text-sm font-medium text-gray-700">AI/ML</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition cursor-pointer">
                  <div className="text-2xl mb-2">👓</div>
                  <div className="text-sm font-medium text-gray-700">VR/AR</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition cursor-pointer">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="text-sm font-medium text-gray-700">Data Analysis</div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition cursor-pointer">
                  <div className="text-2xl mb-2">🐍</div>
                  <div className="text-sm font-medium text-gray-700">Python</div>
                </div>
                <div className="p-4 bg-red-50 rounded-lg hover:bg-red-100 transition cursor-pointer">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm font-medium text-gray-700">C#</div>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition cursor-pointer">
                  <div className="text-2xl mb-2">🎮</div>
                  <div className="text-sm font-medium text-gray-700">Unity</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-700 mb-3 text-center">Currently Exploring</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600 border">Deep Learning</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600 border">VR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Resume</h2>
          
          {/* Download Button */}
          <div className="text-center mb-12">
            <a href="/ResumeLW.pdf" download className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF Resume
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            {/* Education */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Education</h3>
              
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">University of Nebraska at Omaha</h4>
                  <span className="text-blue-600 font-medium">Graduation: May 2026</span>
                </div>
                <p className="text-gray-600 mb-2">Bachelor of Science in Computer Science</p>
                <p className="text-gray-600 mb-2">Concentration: Artificial Intelligence</p>
                <p className="text-gray-500">Cumulative GPA: 3.00</p>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">Scrum Alliance: Certified ScrumMaster</h4>
                  <span className="text-blue-600 font-medium">June 2025</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Professional Experience</h3>
              
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">Research Intern</h4>
                  <span className="text-blue-600 font-medium">June 2025 - Present</span>
                </div>
                <p className="text-gray-600 mb-2">UneTech Research Institute, University of Nebraska Medical Center</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Participating in bi-weekly discussions in a team about product development for the VR education simulator</li>
                  <li>Developing foundational programming skills while collaborating with senior developers in a Scrum Workflow</li>
                  <li>Communicating frequently with team leads on going developments for the VR education simulator</li>
                </ul>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">Director</h4>
                  <span className="text-blue-600 font-medium">January 2024 - May 2024</span>
                </div>
                <p className="text-gray-600 mb-2">Queer and Transgender Services, University of Nebraska at Omaha</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Directed weekly meetings with QTS board members to design the event calendar and compose social media content</li>
                  <li>Advocated over $11,000 from the Student Activities Budget Commission to fund student lead events benefiting the campus</li>
                  <li>Organized and hosted an annual Homecoming drag show fundraiser, raising $484.60 for Omaha For Us November 4th 2024</li>
                </ul>
              </div>
            </div>

            {/* Personal Project */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Personal Project</h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Environmental Social Governance Score Analysis</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Analyzed ESG factors and stock performance, concluding that high ESG scores have minimal long-term impact on stock returns</li>
                  <li>Investigated workforce influence on ESG scores, identifying a moderate correlation with worker numbers</li>
                  <li>Examined sector-specific ESG performance, finding negligible differences across sectors, indicating no sector-specific ESG advantage</li>
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Technical Skills</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-700">Platforms & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Unity Engine VR', 'Jupyter Notebooks', 'Excel', 'Scrum Workflow'].map((skill) => (
                      <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-gray-700">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['C#', 'C', 'C++', 'Python', 'Data Analysis'].map((skill) => (
                      <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Professional Summary</h3>
              <p className="text-gray-600">
                Specializing in AI with dual proficiency in immersive technology and data analytics. Professional experience developing a VR education simulator with Unity and C# in an Agile environment. Independently analyzing datasets with Python to derive actionable insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
      
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">ESG Score Analysis</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive analysis of Environmental Social Governance factors and their impact on stock performance.
              </p>
              <div className="flex space-x-2">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Python</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Data Analysis</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Jupyter</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations in AI, VR development, and data analytics. 
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:lawrencewilson@unomaha.edu" className="text-blue-600 hover:text-blue-800">
              Email
            </a>
            <a href="https://linkedin.com/in/lawrence-wilson-ii" className="text-blue-600 hover:text-blue-800">
              LinkedIn
            </a>
            <a href="https://github.com/GlitzyProgrammer" className="text-blue-600 hover:text-blue-800">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Lawrence Wilson II. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}