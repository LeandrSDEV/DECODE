import { ArrowRight, Play, Star, Users, Award, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Home = ({ setActiveSection }) => {
  const stats = [
    { icon: Users, value: '3+', label: 'Clientes Satisfeitos' },
    { icon: Award, value: '3+', label: 'Projetos Concluídos' },
    { icon: TrendingUp, value: '100%', label: 'Taxa de Sucesso' },
    { icon: Star, value: '5.0', label: 'Avaliação Média' }
  ]

  return (
  <section
  className="relative min-h-screen bg-cover bg-center pt-16"
  style={{ backgroundImage: "url('/background4.jpg')" }}
>
  {/* Overlay para reduzir opacidade */}
  <div className="absolute inset-0 bg-blue bg-opacity-50"></div>

  {/* Conteúdo por cima */}
  <div className="relative z-10">

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">
                  <Star className="w-4 h-4 mr-2" />
                  Empresa 100% autentica
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Transformamos
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {' '}Ideias{' '}
                  </span>
                  em Realidade
                </h1>

                <p className="relative text-xl text-white leading-relaxed">
                  Somos uma empresa moderna especializada em soluções inovadoras que impulsionam o crescimento do seu negócio.
                  Combinamos tecnologia de ponta com estratégias personalizadas para entregar resultados excepcionais.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setActiveSection('projetos')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  Ver Nossos Projetos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>

                <Button
                  variant="outline"
                  onClick={() => setActiveSection('sobre')}
                  className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  Conheça Nossa História
                </Button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300">
                <div className="space-y-6">
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <video
                      src="/videoap.mov"
                      controls
                      playsInline
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
              {/* Background decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="bg-none text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white text-sm "
                 style={{  boxShadow: "0 4px 20px rgba(0, 0, 0, 1)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Action Elements */}
        <div className="fixed bottom-8 right-8 z-40">
          <Button
            onClick={() => setActiveSection('contato')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Home
