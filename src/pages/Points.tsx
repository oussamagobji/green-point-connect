import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

const Points = () => {
  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              placeholder="Rechercher un point de collecte..."
              className="w-full"
              prefix={<Search className="w-4 h-4 text-gray-500" />}
            />
          </div>
          <Button>
            <MapPin className="w-4 h-4 mr-2" />
            Nouveau point
          </Button>
        </div>

        <Card className="h-[600px] bg-gray-100 flex items-center justify-center">
          <p className="text-gray-500">Carte des points de collecte</p>
        </Card>
      </div>
    </Layout>
  );
};

export default Points;