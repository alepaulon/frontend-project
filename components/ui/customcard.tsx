import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type CustomCardTypes = {
  avatar: string;
  fullName: string;
  country: string;
  testimonial: string;
};

const country: { [key: number]: string } = {
  1: "Warsaw, Poland",
  2: "Shanxi, China",
  3: "Seoul, South Korea",
  4: "Santa Fe, Argentina",
  5: "Santiago, Chile",
};

function randomCountry(): string {
  const k = Object.keys(country);
  const numeroPais = k[Math.floor(Math.random() * k.length)];
  return country[parseInt(numeroPais)];
}

const CustomCard: React.FC<CustomCardTypes> = ({
  avatar,
  fullName,
  country,
  testimonial,
}) => {
  return (
    <div className="flex flex-row">
      <Card className="mx-4 mt-6 h-[250px] w-[300px] border-2 md:w-[400px]">
        <CardHeader className="relative flex flex-row">
          <img
            key={avatar}
            src={avatar}
            alt="Avatar"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="ml-4 flex flex-col">
            <CardTitle key={fullName} className="min-w-max">
              {fullName}
            </CardTitle>
            <CardDescription> {randomCountry()} </CardDescription>
          </div>
          <div className="absolute right-0 top-0 flex flex-row pr-6 pt-6">
            <p>4.5</p>
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
          <p key={testimonial}>{testimonial}</p>
        </CardContent>
      </Card>
    </div>
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
