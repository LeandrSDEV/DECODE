import { ExternalLink, Github, Star, Calendar, Users, TrendingUp, ArrowRight, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { useState } from 'react'

const Projetos = ({ setActiveSection }) => {
  const [activeFilter, setActiveFilter] = useState('todos')

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'saas', label: 'SaaS' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Atualização cadastral',
      category: 'web',
      description: 'Plataforma de atualização cadastral automatizada',
      image: '/api/placeholder/600/400',
      technologies: ['C#','React','MySQL','Clean Arquiteture'],
      metrics: { users: '50K+', conversion: '+127%', performance: '99%' },
      featured: false
    },
    {
      id: 2,
      title: 'Portal Corporativo',
      category: 'web',
      description: 'Website institucional moderno com CMS personalizado.',
      image: '/api/placeholder/600/400',
      technologies: ['C#', 'HTML', 'CSS', 'MVC'],
      metrics: { traffic: '+300%', seo: 'Top 3', speed: '95/100' },
      featured: true
    }
  ]

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Nossos Projetos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio de
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Sucesso
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos e os resultados excepcionais que alcançamos 
            para nossos clientes.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Projeto em Destaque</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
                  <div className="w-full h-48 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-white text-lg font-semibold">Preview do Projeto</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-blue-600">{value}</div>
                      <div className="text-sm text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 rounded-full transition-all duration-300 group-hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-2 border-gray-200 hover:border-purple-600 text-gray-700 hover:text-purple-600 rounded-full transition-all duration-300 group-hover:scale-105"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <div className="w-full h-48 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
                <div className="text-white text-sm font-medium">Preview do Projeto</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium capitalize">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 rounded-full transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Ver
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-gray-200 hover:border-purple-600 text-gray-700 hover:text-purple-600 rounded-full transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Código
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Resultados que Falam por Si</h3>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="opacity-90">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="opacity-90">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="opacity-90">Usuários Impactados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Suporte Técnico</div>
            </div>
          </div>
          <Button
            onClick={() => setActiveSection('contato')}
            variant="outline"
            className="bg-white text-blue-600 hover:bg-gray-100 border-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 group"
          >
            Vamos Criar Seu Projeto
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projetos
