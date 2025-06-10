import React, { useState, useEffect } from 'react';
import { Button } from '@//components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@//components/ui/card.jsx';
import { Badge } from '@//components/ui/badge.jsx';
import { BookOpen, Code, Brain, Cpu, Play, Download, ChevronRight } from 'lucide-react';
import './App.css';

function App() {
  const modules = [
    {
      id: 1,
      title: "Entendendo a Linguagem Python",
      description: "Configuração do ambiente, sintaxe básica, estruturas de dados e boas práticas",
      level: "Básico",
      duration: "4-6 horas",
      topics: ["Instalação do Python", "Primeiro programa", "Variáveis e tipos", "Estruturas de dados", "Comentários"]
    },
    {
      id: 2,
      title: "Orientação a Objetos com Python",
      description: "Classes, objetos, herança, polimorfismo e encapsulamento",
      level: "Intermediário",
      duration: "6-8 horas",
      topics: ["Classes e objetos", "Construtores", "Herança", "Polimorfismo", "Propriedades"]
    },
    {
      id: 3,
      title: "Ambientes Virtuais, Arquivos e APIs",
      description: "Gerenciamento de dependências, manipulação de arquivos e desenvolvimento de APIs",
      level: "Intermediário",
      duration: "5-7 horas",
      topics: ["venv e pip", "Manipulação de arquivos", "FastAPI", "Tratamento de erros"]
    },
    {
      id: 4,
      title: "Estruturas de Dados e Algoritmos",
      description: "Pilhas, filas, árvores, grafos e análise de complexidade",
      level: "Intermediário",
      duration: "6-8 horas",
      topics: ["Pilhas e filas", "Árvores e grafos", "Algoritmos de busca", "Big O notation"]
    },
    {
      id: 5,
      title: "Manipulação de Dados com Pandas e NumPy",
      description: "Computação numérica, análise de dados e visualização",
      level: "Intermediário",
      duration: "8-10 horas",
      topics: ["Arrays NumPy", "DataFrames Pandas", "Limpeza de dados", "Matplotlib/Seaborn"]
    },
    {
      id: 6,
      title: "Introdução à IA e Machine Learning",
      description: "Conceitos fundamentais, modelos de regressão e classificação",
      level: "Avançado",
      duration: "10-12 horas",
      topics: ["Tipos de aprendizado", "Regressão linear", "Classificação", "Avaliação de modelos"]
    },
    {
      id: 7,
      title: "Deep Learning com TensorFlow/PyTorch",
      description: "Redes neurais, CNNs, RNNs e treinamento de modelos",
      level: "Avançado",
      duration: "12-15 horas",
      topics: ["Redes neurais", "CNNs", "RNNs/LSTMs", "TensorFlow", "PyTorch"]
    },
    {
      id: 8,
      title: "Processamento de Linguagem Natural",
      description: "Técnicas de PLN, modelos de linguagem e aplicações",
      level: "Avançado",
      duration: "8-10 horas",
      topics: ["Pré-processamento", "Word embeddings", "Transformers", "Análise de sentimento"]
    },
    {
      id: 9,
      title: "Visão Computacional",
      description: "Processamento de imagens, detecção de objetos e reconhecimento facial",
      level: "Avançado",
      duration: "8-10 horas",
      topics: ["OpenCV", "Detecção de objetos", "Reconhecimento facial", "Segmentação"]
    },
    {
      id: 10,
      title: "IA para Tecnologia Embarcada",
      description: "Hardware embarcado, otimização de modelos e Edge AI",
      level: "Avançado",
      duration: "10-12 horas",
      topics: ["Raspberry Pi", "Arduino", "ESP32", "TensorFlow Lite", "Otimização"]
    },
    {
      id: 11,
      title: "Projetos Práticos",
      description: "Desenvolvimento de projetos completos integrando todos os conceitos",
      level: "Avançado",
      duration: "15-20 horas",
      topics: ["Projeto de visão", "Chatbot", "Sistema de recomendação", "IoT com IA"]
    }
  ];

  const videoTopics = [
    {
      title: "Introdução a Redes Neurais Artificiais",
      description: "Conceitos fundamentais, neurônios artificiais e funções de ativação",
      duration: "2:15"
    },
    {
      title: "TensorFlow vs PyTorch",
      description: "Comparação entre os frameworks e quando usar cada um",
      duration: "2:45"
    },
    {
      title: "CNNs para Visão Computacional",
      description: "Como funcionam as redes convolucionais",
      duration: "2:45"
    },
    {
      title: "RNNs e LSTMs para PLN",
      description: "Processamento sequencial e memória em redes neurais",
      duration: "3:00"
    },
    {
      title: "Otimização para Edge AI",
      description: "Técnicas para modelos em dispositivos embarcados",
      duration: "3:00"
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Básico': return 'bg-green-100 text-green-800';
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800';
      case 'Avançado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "modules", "videos", "projects"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Curso Python para IA e Embarcados</h1>
                <p className="text-gray-600 text-sm">Do básico ao avançado com foco em Inteligência Artificial</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-4">
              <Button variant="ghost" onClick={() => scrollToSection('overview')}>Visão Geral</Button>
              <Button variant="ghost" onClick={() => scrollToSection('modules')}>Módulos</Button>
              <Button variant="ghost" onClick={() => scrollToSection('videos')}>Vídeos</Button>
              <Button variant="ghost" onClick={() => scrollToSection('projects')}>Projetos</Button>
            </nav>
            <div className="flex space-x-3">
              <Button variant="outline" className="flex items-center space-x-2" onClick={() => window.open('/curso_python_ia_embarcados.pdf', '_blank')}>
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </Button>
              <Button className="flex items-center space-x-2" onClick={() => scrollToSection('modules')}>
                <Play className="h-4 w-4" />
                <span>Começar Curso</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32">
        <div id="overview" className="space-y-6 mb-12">
          {/* Course Overview */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Sobre o Curso</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Um curso completo de Python focado em Inteligência Artificial e aplicações embarcadas. 
                  Aprenda desde os fundamentos da linguagem até o desenvolvimento de sistemas de IA para dispositivos de borda.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Duração Total:</span>
                    <span>80-100 horas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Módulos:</span>
                    <span>11 módulos</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Projetos:</span>
                    <span>4+ projetos práticos</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Vídeos:</span>
                    <span>5 vídeos explicativos</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5" />
                  <span>O que Você Vai Aprender</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-blue-600" />
                    <span>Fundamentos sólidos de Python e POO</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-blue-600" />
                    <span>Machine Learning e Deep Learning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-blue-600" />
                    <span>Processamento de Linguagem Natural</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-blue-600" />
                    <span>Visão Computacional</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-blue-600" />
                    <span>IA para dispositivos embarcados</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-blue-600" />
                    <span>Desenvolvimento de projetos reais</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Technologies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Cpu className="h-5 w-5" />
                <span>Tecnologias e Bibliotecas</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Python", "TensorFlow", "PyTorch", "NumPy", "Pandas", "OpenCV", "FastAPI", "Raspberry Pi", "Arduino", "ESP32", "NLTK", "Matplotlib"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="justify-center py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div id="modules" className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Módulos</h2>
          <div className="grid gap-4">
            {modules.map((module) => (
              <Card key={module.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">
                        Módulo {module.id}: {module.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {module.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge className={getLevelColor(module.level)}>
                        {module.level}
                      </Badge>
                      <span className="text-sm text-gray-500">{module.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div id="videos" className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Vídeos Explicativos</h2>
          <div className="grid gap-4">
            {videoTopics.map((video, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center space-x-2">
                        <Play className="h-5 w-5 text-blue-600" />
                        <span>{video.title}</span>
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {video.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{video.duration}</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <p className="text-blue-800">
                <strong>Nota:</strong> Os roteiros para os vídeos explicativos estão incluídos no material do curso. 
                Você pode usar esses roteiros para criar seus próprios vídeos ou buscar conteúdo similar online.
              </p>
            </CardContent>
          </Card>
        </div>

        <div id="projects" className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Projetos Práticos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sistema de Reconhecimento de Objetos</CardTitle>
                <CardDescription>
                  Raspberry Pi + Câmera + TensorFlow Lite para detecção em tempo real
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">Visão Computacional</Badge>
                  <Badge variant="outline">Hardware Embarcado</Badge>
                  <Badge variant="outline">TensorFlow Lite</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Chatbot Inteligente</CardTitle>
                <CardDescription>
                  Bot com análise de sentimento e processamento de linguagem natural
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">PLN</Badge>
                  <Badge variant="outline">FastAPI</Badge>
                  <Badge variant="outline">Transformers</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sistema de Recomendação</CardTitle>
                <CardDescription>
                  Recomendação de filmes/produtos usando filtragem colaborativa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Pandas</Badge>
                  <Badge variant="outline">Scikit-learn</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monitoramento Ambiental IoT</CardTitle>
                <CardDescription>
                  ESP32 + Sensores + IA para detecção de anomalias
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">IoT</Badge>
                  <Badge variant="outline">TinyML</Badge>
                  <Badge variant="outline">ESP32</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2025 Curso Python para IA e Embarcados. Desenvolvido por Manus AI.</p>
            <p className="mt-2">Material educacional completo para aprender Python com foco em Inteligência Artificial.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


