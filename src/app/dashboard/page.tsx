import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const questions = [
  {
    title: "Guess the word",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis cumque culpa excepturi labore ducimus voluptate! Earum corporis nesciunt eius!",
  },
  {
    title: "CSS Challenge 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis cumque culpa excepturi labore ducimus voluptate! Earum corporis nesciunt eius!",
  },
  {
    title: "CSS Challenge 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis cumque culpa excepturi labore ducimus voluptate! Earum corporis nesciunt eius!",
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full w-full">
      <h2 className="text-4xl text-foreground text-center text-balance">
        Challenges ⚡
      </h2>
      <div className="flex gap-4 justify-center items-center">
        {questions.map((question, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{question.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{question.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button
              className="w-full"
              >Start</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
