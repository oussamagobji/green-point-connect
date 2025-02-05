import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { MapPin, Users, Calendar, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Points de collecte",
    value: "124",
    icon: MapPin,
    trend: "+12%",
  },
  {
    title: "Collecteurs actifs",
    value: "48",
    icon: Users,
    trend: "+5%",
  },
  {
    title: "Tâches en cours",
    value: "32",
    icon: Calendar,
    trend: "+8%",
  },
  {
    title: "Taux de complétion",
    value: "94%",
    icon: TrendingUp,
    trend: "+2%",
  },
];

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Tableau de bord</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary-800" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-sm font-medium text-green-600">
                  {stat.trend}
                </span>
                <span className="ml-2 text-sm text-gray-500">vs mois dernier</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Activités récentes</h3>
            <div className="space-y-4">
              {/* Placeholder pour les activités */}
              <p className="text-gray-600">Chargement des activités...</p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Tâches prioritaires</h3>
            <div className="space-y-4">
              {/* Placeholder pour les tâches */}
              <p className="text-gray-600">Chargement des tâches...</p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;