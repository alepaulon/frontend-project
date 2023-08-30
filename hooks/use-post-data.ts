import { BASE_URL } from "@/lib/utils";

export type FormDataType = {
  email: string;
  name: string;
  lastName: string;
};

const usePostData = async (formData: FormDataType) => {
  try {
    const res = await fetch(`${BASE_URL}/api/send-email`, {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to POST data");
  } finally {
    console.log("Success");
  }
};

export default usePostData;
