import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StaticImageData } from "next/image";
import Image from "next/image";

type CustomCardTypes = {
  avatarSrc: string | StaticImageData;
  name: string;
  country: string;
  score: number;
  message: string;
  isActive: boolean;
};

const CustomCard: React.FC<CustomCardTypes> = ({
  avatarSrc,
  name,
  country,
  score,
  message,
  isActive,
}) => {
  return (
    <Card className={`w-96 h-56 ${isActive ? "activeCard" : ""} border-2`}>
      <CardHeader className="flex flex-row relative">
        <Image
          src={avatarSrc}
          alt="Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col ml-4">
            <CardTitle className="min-w-max">{name}</CardTitle>
            <CardDescription>{country}</CardDescription>
        </div>
        <div className="flex flex-row absolute top-0 right-0 pt-6 pr-6">
          <p>{score}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#FEA250"
            className="w-4 h-4 mt-1 ml-1"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </CardHeader>
      <CardContent>
        <p>{message}</p>
      </CardContent>
    </Card>
  );
};

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CustomCard,
};
