import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, ChevronDown, Loader2, Mail, MessageCircle, Phone, Star } from "lucide-react";

export default function SupportSettings() {
  const [activeTab, setActiveTab] = useState<"faq" | "contact" | "about" | "rating">("faq");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    subject: "",
    message: "",
    channel: "email",
  });
  const [rating, setRating] = useState(0);
  const [ratingComment, setRatingComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const faqItems = [
    {
      question: "Como faço para criar uma conta?",
      answer:
        "Clique em 'Criar Conta' na página de login, preencha seus dados e siga as instruções. Sua conta será ativada imediatamente.",
    },
    {
      question: "Posso alterar meu e-mail?",
      answer:
        "Atualmente, o e-mail não pode ser alterado após o cadastro. Se precisar, entre em contato com nosso suporte.",
    },
    {
      question: "Como recupero minha senha?",
      answer:
        "Na tela de login, clique em 'Esqueceu sua senha?' e siga as instruções enviadas para seu e-mail.",
    },
    {
      question: "Como excluo minha conta?",
      answer:
        "Acesse Configurações > Privacidade/LGPD > Excluir Conta. Sua conta e dados serão removidos em até 30 dias.",
    },
    {
      question: "Meus dados estão seguros?",
      answer:
        "Sim! Usamos criptografia de ponta a ponta e estamos em conformidade com a LGPD. Seus dados são sua propriedade.",
    },
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Placeholder for contact submission
      console.log("Submitting contact form:", contactForm);
      setSubmitSuccess(true);
      setContactForm({ subject: "", message: "", channel: "email" });
      setTimeout(() => setSubmitSuccess(false), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRatingSubmit = async () => {
    setIsLoading(true);
    try {
      // Placeholder for rating submission
      console.log("Submitting rating:", { rating, comment: ratingComment });
      setSubmitSuccess(true);
      setRating(0);
      setRatingComment("");
      setTimeout(() => setSubmitSuccess(false), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-2 border-b border-border overflow-x-auto">
        {[
          { id: "faq", label: "FAQ" },
          { id: "contact", label: "Fale Conosco" },
          { id: "about", label: "Sobre o Sistema" },
          { id: "rating", label: "Avaliação" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as "faq" | "contact" | "about" | "rating")}
            className={`px-4 py-3 font-medium border-b-2 transition whitespace-nowrap ${
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* FAQ */}
      {activeTab === "faq" && (
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <Card
              key={index}
              className="p-4 border border-border cursor-pointer hover:border-primary/50 transition"
              onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-foreground">{item.question}</h4>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition ${
                    expandedFaq === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {expandedFaq === index && (
                <p className="text-sm text-muted-foreground mt-3">{item.answer}</p>
              )}
            </Card>
          ))}
        </div>
      )}

      {/* Contact Form */}
      {activeTab === "contact" && (
        <Card className="p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Fale Conosco</h3>

          {submitSuccess && (
            <div className="flex gap-3 p-3 bg-green-50 rounded-lg border border-green-200 mb-4">
              <AlertCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-700">Mensagem enviada com sucesso!</p>
            </div>
          )}

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Assunto</Label>
              <Input
                id="subject"
                type="text"
                placeholder="Descreva o assunto"
                value={contactForm.subject}
                onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                placeholder="Descreva sua dúvida ou problema"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                required
                rows={5}
              />
            </div>

            <div className="space-y-2">
              <Label>Canal de Contato</Label>
              <div className="flex gap-3">
                {[
                  { id: "email", label: "E-mail", icon: Mail },
                  { id: "chat", label: "Chat", icon: MessageCircle },
                  { id: "whatsapp", label: "WhatsApp", icon: Phone },
                ].map((channel) => (
                  <button
                    key={channel.id}
                    type="button"
                    onClick={() => setContactForm({ ...contactForm, channel: channel.id })}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
                      contactForm.channel === channel.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    <channel.icon className="w-4 h-4" />
                    {channel.label}
                  </button>
                ))}
              </div>
            </div>

            <Button type="submit" disabled={isLoading} className="bg-primary hover:bg-primary/90">
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar Mensagem"
              )}
            </Button>
          </form>
        </Card>
      )}

      {/* About System */}
      {activeTab === "about" && (
        <div className="space-y-4">
          <Card className="p-6 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Sobre o Sistema</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-foreground">Nome</p>
                <p className="text-muted-foreground">DevSim Studios - Plataforma de Simuladores</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Versão</p>
                <p className="text-muted-foreground">2.0.0</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Desenvolvedor</p>
                <p className="text-muted-foreground">DevSim Studios - Equipe de Desenvolvimento</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Distribuição</p>
                <p className="text-muted-foreground">Web-based (Acesso via navegador)</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Licença</p>
                <p className="text-muted-foreground">MIT</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border border-border">
            <h4 className="font-semibold text-foreground mb-3">Recursos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Autenticação segura com OAuth</li>
              <li>✓ Conformidade com LGPD</li>
              <li>✓ Criptografia de dados</li>
              <li>✓ Suporte multi-plataforma</li>
              <li>✓ Interface responsiva</li>
            </ul>
          </Card>
        </div>
      )}

      {/* Rating */}
      {activeTab === "rating" && (
        <Card className="p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Avalie o Aplicativo</h3>

          {submitSuccess && (
            <div className="flex gap-3 p-3 bg-green-50 rounded-lg border border-green-200 mb-4">
              <AlertCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-700">Obrigado pela sua avaliação!</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <Label className="mb-3 block">Sua Avaliação</Label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="transition"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="rating-comment">Comentário (opcional)</Label>
              <Textarea
                id="rating-comment"
                placeholder="Compartilhe sua experiência..."
                value={ratingComment}
                onChange={(e) => setRatingComment(e.target.value)}
                rows={4}
              />
            </div>

            <Button
              onClick={handleRatingSubmit}
              disabled={isLoading || rating === 0}
              className="bg-primary hover:bg-primary/90"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar Avaliação"
              )}
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
