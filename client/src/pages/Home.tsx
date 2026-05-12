import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Users,
  Zap,
  Shield,
  BookOpen,
  Rocket,
  Target,
  Eye,
  HeartHandshake,
  Smartphone,
  Monitor,
  Mail,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";

export default function Home() {
  const { isAuthenticated, logout } = useAuth();
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="/manus-storage/pasted_file_db66k3_image_e35bcb12.png"
              alt="DevSim Studios"
              className="w-8 h-8 object-contain"
            />
            <span className="font-bold text-lg text-foreground">
              DevSim Studios
            </span>
          </div>

          {/* MENU NA ORDEM SOLICITADA */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm hover:text-foreground transition">
              Sobre
            </a>
            <a href="#mvv" className="text-sm hover:text-foreground transition">
              M.V.V
            </a>
            <a href="#equipe" className="text-sm hover:text-foreground transition">
              Equipe
            </a>
            <a href="#produto" className="text-sm hover:text-foreground transition">
              Produto
            </a>
            <a href="#acesso" className="text-sm hover:text-foreground transition">
              Acesso
            </a>
            <a href="#contato" className="text-sm hover:text-foreground transition">
              Contato
            </a>
          </nav>

          {/* BOTÕES */}
          <div className="flex gap-2">
            {isAuthenticated ? (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLocation("/dashboard")}
                >
                  Dashboard
                </Button>

                <Button size="sm" variant="ghost" onClick={logout}>
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLocation("/auth/login")}
                >
                  Entrar
                </Button>

                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => setLocation("/auth/signup")}
                >
                  Comece Grátis
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container max-w-5xl text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">
              🚀 Plataforma Inteligente de Simulação
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Aprenda Desenvolvimento de Software na Prática
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A DevSim Studios oferece simuladores realistas para estudantes,
            professores e empresas desenvolverem habilidades técnicas em
            ambientes seguros, modernos e colaborativos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setLocation("/auth/signup")}
            >
              Teste Agora
            </Button>

            <Button size="lg" variant="outline">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20">
        <div className="container max-w-5xl space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Quem Somos</h2>
            <p className="text-muted-foreground text-lg">
              Startup focada em transformar o ensino tecnológico através de
              experiências práticas e acessíveis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                A DevSim Studios nasceu para resolver um problema recorrente na
                formação de profissionais de tecnologia: a distância entre teoria
                e prática.
              </p>

              <p>
                Nossa solução oferece simuladores inteligentes com cenários reais
                de desenvolvimento de software, permitindo que usuários aprendam,
                pratiquem e evoluam com segurança.
              </p>

              <p>
                A empresa une inovação, educação e tecnologia para preparar
                profissionais mais capacitados para o mercado.
              </p>
            </div>

            <Card className="p-8 space-y-5">
              <h3 className="text-2xl font-bold">Identidade da Marca</h3>

              <p className="text-muted-foreground">
                A DevSim Studios representa inovação, aprendizado prático e
                evolução profissional.
              </p>

              <div className="space-y-2">
                <p><strong>Logo:</strong> DevSim Studios</p>
                <p><strong>Mascote:</strong> DevBot</p>
                <p><strong>Slogan:</strong> “Transformando teoria em prática”</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* MVV */}
      <section id="mvv" className="py-20 bg-card/50">
        <div className="container max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Missão, Visão e Valores</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8">
              <Target className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-muted-foreground">
                Democratizar o acesso ao aprendizado prático em tecnologia.
              </p>
            </Card>

            <Card className="p-8">
              <Eye className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-muted-foreground">
                Ser referência nacional em plataformas de simulação para ensino
                tecnológico.
              </p>
            </Card>

            <Card className="p-8">
              <HeartHandshake className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <p className="text-muted-foreground">
                Inovação, acessibilidade, ética, colaboração e aprendizado
                contínuo.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="py-20">
        <div className="container max-w-5xl space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Equipe e Organograma</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 text-center">
              <Users className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold">Alexandre Fernandes</h3>
              <p className="text-muted-foreground">CEO & Estratégia</p>
            </Card>

            <Card className="p-8 text-center">
              <Code2 className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold">Carlos Eduardo</h3>
              <p className="text-muted-foreground">CTO & Desenvolvimento</p>
            </Card>

            <Card className="p-8 text-center">
              <Rocket className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold">Julio Lins</h3>
              <p className="text-muted-foreground">COO & Operações</p>
            </Card>
          </div>
        </div>
      </section>

      {/* PRODUTO */}
      <section id="produto" className="py-20 bg-card/50">
        <div className="container max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Nosso Produto</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              O DevSim é uma plataforma de simuladores educacionais para prática
              profissional em desenvolvimento de software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Funcionalidades</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Simuladores realistas</li>
                <li>✓ Feedback em tempo real</li>
                <li>✓ Dashboard de desempenho</li>
                <li>✓ Colaboração em equipe</li>
              </ul>
            </Card>

            <Card className="p-6">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Diferenciais</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Ambiente seguro para testes</li>
                <li>✓ Interface intuitiva</li>
                <li>✓ Aprendizado gamificado</li>
                <li>✓ Experiência prática imersiva</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4">Público-Alvo</h3>
            <p className="text-muted-foreground leading-relaxed">
              Estudantes de tecnologia, instituições de ensino, professores,
              desenvolvedores iniciantes e empresas que desejam capacitar suas
              equipes.
            </p>
          </Card>
        </div>
      </section>

      {/* ACESSO */}
      <section id="acesso" className="py-20">
        <div className="container max-w-5xl space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Acesso ao Produto</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8">
              <Monitor className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Plataforma Web</h3>
              <p className="text-muted-foreground">
                Acesse diretamente pelo navegador sem necessidade de instalação.
              </p>
            </Card>

            <Card className="p-8">
              <Smartphone className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Mobile</h3>
              <p className="text-muted-foreground">
                Disponível também para dispositivos móveis.
              </p>
            </Card>
          </div>

          <Card className="p-8 space-y-4">
            <h3 className="text-2xl font-bold">Fluxo de Uso</h3>

            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="font-bold text-primary text-2xl">1</p>
                <p>Cadastro</p>
              </div>

              <div>
                <p className="font-bold text-primary text-2xl">2</p>
                <p>Escolha do Simulador</p>
              </div>

              <div>
                <p className="font-bold text-primary text-2xl">3</p>
                <p>Execução da Atividade</p>
              </div>

              <div>
                <p className="font-bold text-primary text-2xl">4</p>
                <p>Feedback e Evolução</p>
              </div>
            </div>
          </Card>

          <div className="text-center pt-4">
            <Button
              size="lg"
              onClick={() => setLocation("/auth/signup")}
            >
              Comece Grátis Agora
            </Button>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 bg-card/50">
        <div className="container max-w-4xl space-y-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Contato</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Mail className="w-10 h-10 mx-auto text-primary mb-4" />
              <p>contato@devsim.com</p>
            </Card>

            <Card className="p-6 text-center">
              <Instagram className="w-10 h-10 mx-auto text-primary mb-4" />
              <p>@devsimstudios</p>
            </Card>

            <Card className="p-6 text-center">
              <Linkedin className="w-10 h-10 mx-auto text-primary mb-4" />
              <p>DevSim Studios</p>
            </Card>
          </div>

          <Card className="p-8 space-y-4">
            <h3 className="text-2xl font-bold">Entre em Contato</h3>

            <div className="grid gap-4">
              <input
                className="border rounded-md p-3 bg-background"
                placeholder="Seu nome"
              />

              <input
                className="border rounded-md p-3 bg-background"
                placeholder="Seu e-mail"
              />

              <textarea
                className="border rounded-md p-3 bg-background min-h-[120px]"
                placeholder="Digite sua mensagem"
              />

              <Button>Enviar Mensagem</Button>
            </div>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>© 2026 DevSim Studios - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
```
