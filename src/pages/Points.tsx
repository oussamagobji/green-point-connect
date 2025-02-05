import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const Points = () => {
  const collectionPoints = [
    {
      id: 1,
      name: "Point de collecte Centre-ville",
      address: "123 Rue Principale",
      type: "Plastique, Verre",
      status: "Actif",
    },
    {
      id: 2,
      name: "Point de collecte Nord",
      address: "45 Avenue des Pins",
      type: "Papier, Carton",
      status: "Actif",
    },
    // Ajoutez d'autres points de collecte ici
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Points de Collecte</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {collectionPoints.map((point) => (
          <Card key={point.id}>
            <CardHeader className="flex flex-row items-center gap-2">
              <MapPin className="h-5 w-5 text-green-600" />
              <CardTitle className="text-lg">{point.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{point.address}</p>
              <p className="text-sm text-gray-500 mt-2">Types: {point.type}</p>
              <div className="mt-2">
                <span className="inline-block px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                  {point.status}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Points;