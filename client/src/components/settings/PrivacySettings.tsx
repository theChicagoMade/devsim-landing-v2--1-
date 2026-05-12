import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle, CheckCircle2, Download, Loader2, Trash2 } from "lucide-react";

export default function PrivacySettings() {
  const [activeTab, setActiveTab] = useState<"consents" | "export" | "delete">("consents");
  const [consents, setConsents] = useState({
    privacyPolicy: true,
    termsOfUse: true,
    marketing: false,
    dataProcessing: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  const handleConsentChange = (key: keyof typeof consents) => {
    setConsents((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleExportData = async () => {
    setIsLoading(true);
    try {
      // Placeholder for data export
      console.log("Exporting user data");
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!deleteConfirm) {
      setDeleteConfirm(true);
      return;
    }

    setIsLoading(true);
    try {
      // Placeholder for account deletion
      console.log("Deleting account");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-2 border-b border-border overflow-x-auto">
        {[
          { id: "consents", label: "Consentimentos" },
          { id: "export", label: "Exportar Dados" },
          { id: "delete", label: "Excluir Conta" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as "consents" | "export" | "delete")}
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

      {/* Consents */}
      {activeTab === "consents" && (
        <div className="space-y-4">
          <Card className="p-6 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Gerenciar Consentimentos</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                <Checkbox
                  id="privacy"
                  checked={consents.privacyPolicy}
                  onCheckedChange={() => handleConsentChange("privacyPolicy")}
                />
                <div className="flex-1">
                  <label htmlFor="privacy" className="font-medium text-foreground cursor-pointer">
                    Política de Privacidade
                  </label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Concordo com a coleta e uso dos meus dados conforme descrito.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                <Checkbox
                  id="terms"
                  checked={consents.termsOfUse}
                  onCheckedChange={() => handleConsentChange("termsOfUse")}
                />
                <div className="flex-1">
                  <label htmlFor="terms" className="font-medium text-foreground cursor-pointer">
                    Termos de Uso
                  </label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Concordo com os termos e condições de uso da plataforma.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                <Checkbox
                  id="marketing"
                  checked={consents.marketing}
                  onCheckedChange={() => handleConsentChange("marketing")}
                />
                <div className="flex-1">
                  <label htmlFor="marketing" className="font-medium text-foreground cursor-pointer">
                    Comunicações de Marketing
                  </label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Desejo receber e-mails sobre novos produtos e promoções.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                <Checkbox
                  id="processing"
                  checked={consents.dataProcessing}
                  onCheckedChange={() => handleConsentChange("dataProcessing")}
                />
                <div className="flex-1">
                  <label htmlFor="processing" className="font-medium text-foreground cursor-pointer">
                    Processamento de Dados
                  </label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Autorizo o processamento dos meus dados para melhorar a experiência.
                  </p>
                </div>
              </div>

              <Button type="button" className="bg-primary hover:bg-primary/90">
                Salvar Consentimentos
              </Button>
            </div>
          </Card>

          <Card className="p-6 border border-border bg-blue-50">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-blue-900">Conformidade com LGPD</p>
                <p className="text-sm text-blue-800 mt-1">
                  Seus dados são protegidos conforme a Lei Geral de Proteção de Dados (LGPD).
                  Você pode alterar seus consentimentos a qualquer momento.
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Export Data */}
      {activeTab === "export" && (
        <Card className="p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Exportar Meus Dados</h3>

          {exportSuccess && (
            <div className="flex gap-3 p-3 bg-green-50 rounded-lg border border-green-200 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-700">Dados exportados com sucesso! Verifique seu e-mail.</p>
            </div>
          )}

          <div className="space-y-4">
            <p className="text-muted-foreground">
              Você pode solicitar uma cópia de todos os seus dados em formato JSON. Um link de download
              será enviado para seu e-mail em até 24 horas.
            </p>

            <div className="p-4 bg-card/50 border border-border rounded-lg">
              <p className="text-sm font-medium text-foreground mb-2">Incluirá:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Informações de perfil</li>
                <li>✓ Histórico de atividades</li>
                <li>✓ Preferências e configurações</li>
                <li>✓ Dados de consentimento</li>
              </ul>
            </div>

            <Button
              onClick={handleExportData}
              disabled={isLoading}
              className="bg-primary hover:bg-primary/90"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processando...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Solicitar Exportação de Dados
                </>
              )}
            </Button>
          </div>
        </Card>
      )}

      {/* Delete Account */}
      {activeTab === "delete" && (
        <Card className="p-6 border border-destructive/50 bg-destructive/5">
          <h3 className="text-lg font-semibold text-destructive mb-4">Excluir Conta</h3>

          <div className="space-y-4">
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-sm text-destructive font-medium mb-2">⚠️ Ação Irreversível</p>
              <p className="text-sm text-destructive">
                Excluir sua conta removerá permanentemente todos os seus dados. Esta ação não pode ser
                desfeita.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Seus dados serão anonimizados e removidos de nossos servidores em até 30 dias.
              </p>
            </div>

            {deleteConfirm && (
              <div className="p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                <p className="text-sm font-medium text-destructive mb-3">
                  Tem certeza? Digite "EXCLUIR" para confirmar:
                </p>
                <input
                  type="text"
                  placeholder="EXCLUIR"
                  className="w-full px-3 py-2 border border-destructive/20 rounded-lg text-sm"
                />
              </div>
            )}

            <Button
              onClick={handleDeleteAccount}
              disabled={isLoading}
              variant="destructive"
              className="w-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Excluindo...
                </>
              ) : (
                <>
                  <Trash2 className="w-4 h-4 mr-2" />
                  {deleteConfirm ? "Confirmar Exclusão" : "Excluir Minha Conta"}
                </>
              )}
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
