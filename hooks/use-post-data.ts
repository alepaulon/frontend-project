import { BASE_URL } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const usePostData = () => {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Invalid email, enter a valid one")
        .min(5, "Min 5 characters required")
        .max(50, "Max 50 characters required")
        .required(),
      name: yup
        .string()
        .min(2, "Min 2 characters required")
        .max(20, "Max 20 characters required")
        .required(),
      lastName: yup
        .string()
        .min(2, "Min 2 characters required")
        .max(20, "Max 20 characters required")
        .required(),
    })
    .required();
  type FormData = yup.InferType<typeof schema>;

  const submitHandler = async (data: FormData) => {
    try {
      const res = await fetch(`${BASE_URL}/api/send-email`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      data = await res.json();
      return data;
    } catch (error) {
      console.error("Failed to POST data");
    } finally {
      console.log("Success");
    }
  };

  const {
    register,
    handleSubmit: originalSubmitHandler,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleSubmit = originalSubmitHandler(submitHandler);

  return {
    onSubmit: handleSubmit,
    errors,
    register,
  };
};

export default usePostData;
