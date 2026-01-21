import { createBox } from "../../boxes.api";

const handleSubmit = async (formData) => {
  await createBox(formData);
  navigate("/vendor/my-boxes");
};
