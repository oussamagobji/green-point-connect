import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle, Clock } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Collecte de bouteilles en plastique",
    location: "Tunis, La Marsa",
    status: "pending",
    time: "14:00 - 16:00",
    points: 50,
  },
  {
    id: 2,
    title: "Ramassage de cartons",
    location: "Sfax, Route de l'Aéroport",
    status: "completed",
    time: "09:00 - 11:00",
    points: 30,
  },
];

const Tasks = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-500" />
                Tâches en attente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">3</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Tâches complétées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Points gagnés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">250</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {tasks.map((task) => (
            <Card key={task.id} className="p-4">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="font-semibold">{task.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {task.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {task.time}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-primary font-semibold mb-2">
                    {task.points} points
                  </div>
                  <Button
                    variant={task.status === "completed" ? "outline" : "default"}
                    disabled={task.status === "completed"}
                  >
                    {task.status === "completed" ? "Complété" : "Accepter"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;