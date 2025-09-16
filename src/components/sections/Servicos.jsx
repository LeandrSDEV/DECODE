import { Code, Palette, Search, BarChart3, Smartphone, Cloud, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Servicos = ({ setActiveSection }) => {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Criamos sites e aplicações web modernas, responsivas e otimizadas para performance.',
      features: ['React & Next.js', 'Node.js & C#', 'APIs RESTful', 'Banco de Dados'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Aplicativos Mobile',
      description: 'Desenvolvemos apps nativos e híbridos para iOS e Android com excelente UX.',
      features: ['React Native', 'Flutter', 'iOS & Android', 'App Store Deploy'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'Design & UX/UI',
      description: 'Criamos interfaces intuitivas e experiências memoráveis para seus usuários.',
      features: ['Design System', 'Prototipagem', 'User Research', 'Testes de Usabilidade'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Search,
      title: 'SEO & Marketing Digital',
      description: 'Aumentamos sua visibilidade online e geramos mais leads qualificados.',
      features: ['SEO Técnico', 'Google Ads', 'Social Media', 'Analytics'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Consultoria Estratégica',
      description: 'Ajudamos a definir estratégias digitais alinhadas aos objetivos do negócio.',
      features: ['Análise de Mercado', 'Roadmap Tecnológico', 'KPIs & Métricas', 'Otimização'],
      color: 'from-indigo-500 to-purple-500'
    },
   
  ]

  const process = [
    { step: '01', title: 'Descoberta', description: 'Entendemos suas necessidades e objetivos' },
    { step: '02', title: 'Estratégia', description: 'Definimos a melhor abordagem e tecnologias' },
    { step: '03', title: 'Desenvolvimento', description: 'Criamos a solução com qualidade e agilidade' },
    { step: '04', title: 'Entrega', description: 'Implementamos e oferecemos suporte contínuo' }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Code className="w-4 h-4 mr-2" />
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluções
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Completas
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos um portfólio completo de serviços digitais para transformar sua presença online 
            e acelerar o crescimento do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button
                onClick={() => setActiveSection('contato')}
                variant="outline"
                className="w-full border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 rounded-full transition-all duration-300 group-hover:scale-105"
              >
                Saiba Mais
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nosso Processo</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Seguimos uma metodologia comprovada para garantir o sucesso de cada projeto
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 opacity-30"></div>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Pronto para Começar?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar a transformar seu negócio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setActiveSection('contato')}
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100 border-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 group"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                onClick={() => setActiveSection('projetos')}
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100 border-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 group"
              >
                Ver Projetos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicos
