import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Leaf } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState("normal");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Vérification des identifiants
      if (
        (email === "hazem@gmail.com" && password === "hazem123") ||
        (email === "oussama@gmail.com" && password === "oussama123")
      ) {
        const isCollector = email === "hazem@gmail.com";
        localStorage.setItem("userType", isCollector ? "collector" : "normal");
        localStorage.setItem("userEmail", email);
        toast({
          title: "Connexion réussie",
          description: `Bienvenue ${isCollector ? "Hazem" : "Oussama"}!`,
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Erreur de connexion",
          description: "Email ou mot de passe incorrect",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="flex items-center gap-2 text-green-600 mb-2">
            <Leaf className="h-6 w-6" />
            <span className="text-2xl font-bold">EcoTri</span>
          </div>
          <CardTitle className="text-2xl text-center">
            {isLogin ? "Connexion" : "Inscription"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <Label>Type de compte</Label>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant={userType === "normal" ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setUserType("normal")}
                    >
                      Utilisateur
                    </Button>
                    <Button
                      type="button"
                      variant={userType === "collector" ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setUserType("collector")}
                    >
                      Collecteur
                    </Button>
                  </div>
                </div>
              </>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              {isLogin ? "Se connecter" : "S'inscrire"}
            </Button>
            <div className="text-center text-sm">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-green-600 hover:underline"
              >
                {isLogin
                  ? "Pas encore de compte ? S'inscrire"
                  : "Déjà un compte ? Se connecter"}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;