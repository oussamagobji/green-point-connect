import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Collecte de bouteilles",
      address: "123 Rue du Commerce",
      status: "En attente",
      points: 50,
      time: "14:00",
    },
    {
      id: 2,
      title: "Ramassage de cartons",
      address: "45 Avenue Centrale",
      status: "Terminé",
      points: 30,
      time: "16:30",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Tâches du Jour</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                {task.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  {task.address}
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  {task.time}
                </p>
                <p className="text-green-600 font-semibold">
                  {task.points} points
                </p>
                <Button
                  className={
                    task.status === "Terminé"
                      ? "bg-gray-200 text-gray-600 cursor-not-allowed w-full"
                      : "bg-green-600 hover:bg-green-700 w-full"
                  }
                  disabled={task.status === "Terminé"}
                >
                  {task.status === "Terminé" ? "Tâche terminée" : "Accepter la tâche"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tasks;