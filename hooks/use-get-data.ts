import { useCallback, useEffect, useState } from "react";
import { BASE_URL } from "@/lib/utils";

type GetDataParam = {
  endpoint: "testimonial" | "subscription";
};

const useGetData = <T>(params: GetDataParam) => {
  const [result, setResult] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleGetData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/api/${params.endpoint}`);
      const data = await response.json();
      setResult(data);
      setLoading(false);
    } catch (err) {
      const currentError = err as { message: string };
      setError(currentError.message);
    }
  }, []);

  useEffect(() => {
    handleGetData();
  }, []);

  return {
    result,
    loading,
    error,
  };
};

export default useGetData;
