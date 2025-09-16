import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { useState } from 'react'

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    servico: '',
    mensagem: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          nome: '',
          email: '',
          empresa: '',
          servico: '',
          mensagem: ''
        })
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'leandro22.js@gmail.com',
      description: 'Resposta em até 2 horas'
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '+55 (79) 98801-2359',
      description: 'Seg-Sex: 8h às 17h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Aracaju, SE - Brasil',
      description: 'Atendimento Online'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: '24/7 Suporte Online',
      description: 'Sempre disponível'
    }
  ]

  const services = [
    'Desenvolvimento Web',
    'Aplicativos Mobile',
    'Design & UX/UI',
    'SEO & Marketing Digital',
    'Consultoria Estratégica',
    'Outro'
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            Entre em Contato
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vamos
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Conversar
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para transformar suas ideias em realidade. Entre em contato conosco 
            e descubra como podemos ajudar seu negócio a crescer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite um Orçamento</h3>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Serviço de Interesse
                    </label>
                    <select
                      name="servico"
                      value={formData.servico}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-none"
                    placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  Enviar Mensagem
                </Button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h4>
                <p className="text-gray-600">
                  Obrigado pelo seu interesse. Entraremos em contato em breve!
                </p>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-blue-600 font-medium mb-1">{item.info}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda Rápida?</h3>
              <p className="mb-6 opacity-90">
                Nossa equipe está sempre disponível para esclarecer suas dúvidas e ajudar com seu projeto.
              </p>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 border-white rounded-lg py-3 font-medium transition-all duration-300 hover:scale-105 group"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Ligar Agora
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 border-white rounded-lg py-3 font-medium transition-all duration-300 hover:scale-105 group"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Reunião
                </Button>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h3>
              <div className="space-y-3">
                <div className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                  • Qual o prazo médio de entrega?
                </div>
                <div className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                  • Como funciona o processo de desenvolvimento?
                </div>
                <div className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                  • Vocês oferecem suporte pós-entrega?
                </div>
                <div className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                  • Quais formas de pagamento aceitas?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
