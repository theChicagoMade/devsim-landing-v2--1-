import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2, Loader2, Shield } from "lucide-react";

export default function SecuritySettings() {
  const [activeTab, setActiveTab] = useState<"password" | "sessions">("password");
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess(false);

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError("As senhas não coincidem");
      return;
    }

    if (passwordForm.newPassword.length < 8) {
      setPasswordError("Senha deve ter no mínimo 8 caracteres");
      return;
    }

    setIsLoading(true);
    try {
      // Placeholder for password change
      console.log("Changing password");
      setPasswordSuccess(true);
      setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setTimeout(() => setPasswordSuccess(false), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Password Policy */}
      <Card className="p-6 border border-border bg-card/50">
        <div className="flex gap-3">
          <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Política de Senha</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Mínimo de 8 caracteres</li>
              <li>✓ Pelo menos uma letra maiúscula</li>
              <li>✓ Pelo menos um número</li>
              <li>✓ Pelo menos um caractere especial (!@#$%)</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border">
        {[
          { id: "password", label: "Alterar Senha" },
          { id: "sessions", label: "Sessões Ativas" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as "password" | "sessions")}
            className={`px-4 py-3 font-medium border-b-2 transition ${
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Change Password */}
      {activeTab === "password" && (
        <Card className="p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Alterar Senha</h3>

          {passwordError && (
            <div className="flex gap-3 p-3 bg-destructive/10 rounded-lg border border-destructive/20 mb-4">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm text-destructive">{passwordError}</p>
            </div>
          )}

          {passwordSuccess && (
            <div className="flex gap-3 p-3 bg-green-50 rounded-lg border border-green-200 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-700">Senha alterada com sucesso!</p>
            </div>
          )}

          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Senha Atual</Label>
              <Input
                id="current-password"
                type="password"
                placeholder="••••••••"
                value={passwordForm.currentPassword}
                onChange={(e) =>
                  setPasswordForm({ ...passwordForm, currentPassword: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-password">Nova Senha</Label>
              <Input
                id="new-password"
                type="password"
                placeholder="••••••••"
                value={passwordForm.newPassword}
                onChange={(e) =>
                  setPasswordForm({ ...passwordForm, newPassword: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                value={passwordForm.confirmPassword}
                onChange={(e) =>
                  setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })
                }
                required
              />
            </div>

            <Button type="submit" disabled={isLoading} className="bg-primary hover:bg-primary/90">
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Alterando...
                </>
              ) : (
                "Alterar Senha"
              )}
            </Button>
          </form>
        </Card>
      )}

      {/* Active Sessions */}
      {activeTab === "sessions" && (
        <Card className="p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Sessões Ativas</h3>
          <div className="space-y-4">
            <div className="p-4 border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-foreground">Navegador Atual</p>
                  <p className="text-sm text-muted-foreground">Chrome no Windows</p>
                  <p className="text-xs text-muted-foreground mt-2">Último acesso: Agora</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                  Ativo
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Você tem apenas uma sessão ativa. Novas logins encerrarão sessões antigas automaticamente.
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}
