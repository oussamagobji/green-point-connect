import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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

const recentActivities = [
  {
    collecteur: "Ahmed Ben Ali",
    action: "Point collecté",
    lieu: "Tunis Centre",
    date: "Il y a 2h",
  },
  {
    collecteur: "Sarah Mansour",
    action: "Nouvelle demande",
    lieu: "Sfax Nord",
    date: "Il y a 3h",
  },
  {
    collecteur: "Karim Gharbi",
    action: "Tâche complétée",
    lieu: "Sousse",
    date: "Il y a 4h",
  },
];

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Tableau de bord</h2>
          <div className="text-sm text-gray-500">
            Dernière mise à jour: {new Date().toLocaleString("fr-FR")}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
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
          <Card>
            <CardHeader>
              <CardTitle>Activités récentes</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Collecteur</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Lieu</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentActivities.map((activity, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {activity.collecteur}
                      </TableCell>
                      <TableCell>{activity.action}</TableCell>
                      <TableCell>{activity.lieu}</TableCell>
                      <TableCell>{activity.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tâches prioritaires</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  Les tâches prioritaires seront affichées ici une fois que nous aurons implémenté la fonctionnalité de gestion des tâches.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;