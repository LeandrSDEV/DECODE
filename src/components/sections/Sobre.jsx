import { Target, Users, Lightbulb, Heart, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Sobre = ({ setActiveSection }) => {
  const values = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Cada projeto é desenvolvido com objetivos claros e métricas de sucesso bem definidas.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação Constante',
      description: 'Sempre buscamos as tecnologias mais avançadas e metodologias inovadoras.'
    },
    {
      icon: Heart,
      title: 'Paixão pelo que Fazemos',
      description: 'Nossa equipe é apaixonada por criar soluções que fazem a diferença.'
    },
    {
      icon: Users,
      title: 'Parceria Verdadeira',
      description: 'Trabalhamos lado a lado com nossos clientes como verdadeiros parceiros.'
    }
  ]

  const timeline = [
    { year: '2025', title: 'Fundação', description: 'Início da jornada com foco em soluções digitais' },
    { year: '2025', title: 'Expansão', description: 'Crescimento da equipe e diversificação de serviços' }
  ]

  return (
    <section className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Conheça Nossa História
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre a
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}DECODE
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa jovem e dinâmica, fundada com o propósito de transformar ideias em soluções 
            digitais inovadoras que impulsionam o crescimento dos nossos clientes.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Capacitar empresas através de soluções tecnológicas inovadoras, oferecendo serviços de alta qualidade 
                que geram valor real e impacto positivo nos negócios dos nossos clientes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como a empresa líder em transformação digital, conhecida pela excelência, 
                inovação e pelo impacto positivo que geramos na sociedade e no mercado.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Nossa Jornada</h3>
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-200">
                  {item.year.slice(-2)}
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <span className="text-sm text-gray-500">{item.year}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nossos Valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">Nossa Equipe</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Contamos com uma equipe multidisciplinar de profissionais experientes e apaixonados por tecnologia, 
            design e estratégia digital.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="opacity-90">Especialistas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="opacity-90">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="opacity-90">Dedicação</div>
            </div>
          </div>
          <Button
            onClick={() => setActiveSection('contato')}
            variant="outline"
            className="bg-white text-blue-600 hover:bg-gray-100 border-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 group"
          >
            Fale com Nossa Equipe
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Sobre
