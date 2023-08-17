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
    <Card
      className={`mx-4 mt-6 ${
        isActive ? "activeCard" : ""
      } h-[250px] w-[300px] border-2 md:w-[400px]`}
    >
      <CardHeader className="relative flex flex-row">
        <Image
          src={avatarSrc}
          alt="Avatar"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="ml-4 flex flex-col">
          <CardTitle className="min-w-max">{name}</CardTitle>
          <CardDescription>{country}</CardDescription>
        </div>
        <div className="absolute right-0 top-0 flex flex-row pr-6 pt-6">
          <p>{score}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#FEA250"
            className="ml-1 mt-1 h-4 w-4"
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