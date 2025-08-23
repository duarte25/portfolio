import { useEffect } from 'react';
import { Code, Database, Cloud, Award, BookOpen, Mail, Github, Linkedin, ExternalLink, Palette, Cpu, Layers } from 'lucide-react';

export default function Portfolio() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const skills = [
    {
      name: 'Linguagens',
      items: ['TypeScript', 'JavaScript', 'Go (Golang)'],
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Frontend',
      items: ['React', 'Next.js', 'Tailwind CSS', 'ShadCN'],
      icon: Palette,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Backend',
      items: ['Node.js', 'Express', 'Prisma'],
      icon: Cpu,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Databases',
      items: ['PostgreSQL', 'MongoDB'],
      icon: Database,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'Cloud & Deploy',
      items: ['AWS', 'Digital Ocean', 'Heroku'],
      icon: Cloud,
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      name: 'Bibliotecas',
      items: ['Nodemailer', 'Zod', 'Multer', 'TanStack'],
      icon: Layers,
      gradient: 'from-teal-500 to-cyan-500'
    },
  ];

  const experience = [
    {
      period: '2025 - presente',
      title: 'EcoIntegra',
      description: 'Atuei no levantamento de requisitos, implementação e desenvolvimento completo do sistema. Participei da prototipagem, da criação do site e da integração com sistemas da prefeitura, como o Oxy e outros serviços externos.',
      technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Express', 'PostgreSQL', 'Prisma', 'Digital Ocean'],
      image: '/eco_integra.png',
      link: 'https://ecointegra.tech/'
    },
    {
      period: '2024 - 2025',
      title: 'ADAT - Análise de Dados de Acidentes de Trânsito',
      description: 'ADAT, uma plataforma transparente que oferece dados detalhados sobre acidentes de trânsito no Brasil. Com um design inovador, você pode explorar e filtrar informações de forma fácil e intuitiva.',
      technologies: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Go', 'Redis'],
      image: '/adat.png',
      link: 'https://adat.app.fslab.dev/'
    },
    {
      period: '2023 - 2025',
      title: 'Cidades Inteligentes',
      description: 'O projeto "Cidades Inteligentes de Cerejeiras" é uma iniciativa importante que visa modernizar a cidade de Cerejeiras com tecnologia e inovação. A iniciativa inclui sistemas de controle de frota municipal, otimizando a gestão dos veículos públicos, e um chat interativo para que a população solicite serviços aos órgãos públicos.',
      image: '/cidades.png',
      technologies: ['JavaScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
      link: 'https://frotas.app.fslab.dev/'
    },
    {
      period: '2024 - 2024',
      title: 'Mobile Levantamento Patrimonial IFRO',
      description: 'Levantamento Patrimonial, um aplicativo que facilita a consulta e o levantamento de informações sobre o patrimônio do IFRO de forma intuitiva e acessível.',
      image: '/levantamento.svg',
      technologies: ['JavaScript', 'Express.js', 'MongoDB', 'Kotlin JetPack'],
      link: 'https://www.figma.com/proto/dhz0w3tJg13HKijbPizq5Y/Levantamento-de-Invent%C3%A1rio?node-id=1430-1563&t=eAzz6tDksQhtrmCf-1&scaling=scale-down&content-scaling=fixed&page-id=719%3A546&starting-point-node-id=1430%3A1563'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="/photo_perfil.jpeg"
                    alt="perfil"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Gustavo Duarte
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Desenvolvedor <span className="text-blue-400 font-semibold">FullStack</span> especializado em
              tecnologias modernas com <span className="text-purple-400 font-semibold">2 anos de experiência</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white">
                <span className="text-sm font-medium">22 anos</span>
              </div>
              <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 text-green-300">
                <Award className="w-4 h-4 inline mr-2" />
                <span className="text-sm font-medium">AWS Cloud Practitioner</span>
              </div>
              <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 text-blue-300">
                <BookOpen className="w-4 h-4 inline mr-2" />
                <span className="text-sm font-medium">IFRO - Análise e Desenvolvimento</span>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <a href="mailto:duarte.guga2025@gmail.com" target="_blank" className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
                <Mail className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
                Entrar em Contato
              </a>
              <a href="https://github.com/duarte25" target="_blank" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105">
                <Github  className="w-5 h-5 inline mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Sobre Mim</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Desenvolvedor <span className="text-blue-400 font-semibold">Full-Stack</span> com experiência em <span className="text-green-400 font-semibold">Node.js</span>, <span className="text-cyan-400 font-semibold">Golang</span>, <span className="text-pink-400 font-semibold">React</span>, <span className="text-purple-400 font-semibold">Next.js</span> e <span className="text-orange-400 font-semibold">AWS</span>. No Back-End, atuo na criação de APIs e processamento de dados, no Front-End, desenvolvo interfaces responsivas. Tenho experiência em projetos de controle de frotas, e-commerce e iniciei trabalhos com Inteligência Artificial. Busco oportunidades em um ambiente seguro que me permita crescer e aprimorar meus conhecimentos.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Habilidades Técnicas</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${skill.gradient} rounded-xl flex items-center justify-center mr-4`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white/5 rounded-lg px-3 py-2 text-gray-300 text-sm border border-white/5 hover:bg-white/10 transition-colors">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Experiência & Projetos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experience.map((exp, index) => (
              <a
                key={index}
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 block"
              >
                <div className="relative h-48 flex items-center justify-center bg-black/20">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-blue-400 font-semibold text-sm mb-2">{exp.period}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{exp.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full border border-blue-400/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Formação</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Análise e Desenvolvimento de Sistemas</h3>
              <p className="text-blue-400 font-semibold mb-2">IFRO - Instituto Federal de Rondônia</p>
              <p className="text-gray-300">Concluindo em 2025</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AWS Cloud Practitioner</h3>
              <p className="text-green-400 font-semibold mb-2">Amazon Web Services</p>
              <p className="text-gray-300">Certificado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Vamos Conversar</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
              Interessado em trabalhar juntos ou tem alguma pergunta? Ficarei feliz em conversar sobre projetos e oportunidades!
            </p>
          </div>

          <div className="flex justify-center gap-6">
            <a href="mailto:duarte.guga2025@gmail.com" target="_blank" className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
              <Mail className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
              Email
            </a>
            <a href="https://www.linkedin.com/in/gustavo-duarte-46a229169/" target="_blank" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105">
              <Linkedin className="w-5 h-5 inline mr-2" />
              LinkedIn
            </a>
            <a href="https://github.com/duarte25" target="_blank" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105">
              <Github className="w-5 h-5 inline mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Gustavo Duarte. Desenvolvido com React e TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
}
