import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, ThumbsUp, MessageSquare, Share2, Gift, Award } from "lucide-react";

const posts = [
  {
    id: 1,
    author: "Oussama Ben Ali",
    avatar: "/placeholder.svg",
    time: "Il y a 2 heures",
    content: "J'ai 5 bouteilles en plastique à recycler",
    location: "Tunis, La Marsa",
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    author: "Sarah Mansour",
    avatar: "/placeholder.svg",
    time: "Il y a 3 heures",
    content: "Je dispose d'un lot de cartons d'emballage à recycler. Disponible aujourd'hui jusqu'à 18h.",
    location: "Sfax, Route de l'Aéroport",
    likes: 8,
    comments: 5,
  }
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-6 max-w-3xl mx-auto">
        <Card className="p-4">
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4">
              <Input 
                placeholder="Que souhaitez-vous recycler aujourd'hui ?" 
                className="w-full"
              />
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Ajouter un lieu
                </Button>
                <Button size="sm">Publier</Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-primary/5">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-gray-600">Mes points</p>
                  <p className="text-2xl font-bold text-primary">250</p>
                </div>
              </div>
              <Button variant="outline">
                <Gift className="w-4 h-4 mr-2" />
                Échanger
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarImage src={post.avatar} />
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{post.author}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{post.time}</span>
                        <span className="mx-1">•</span>
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{post.location}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Collecter
                  </Button>
                </div>

                <p className="text-gray-700">{post.content}</p>

                <div className="flex gap-4 pt-2 border-t">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
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

export default Dashboard;