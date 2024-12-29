import axios from "axios";
import toast from "react-hot-toast";

const useImageUpload = () => {
  const handleImageUpload = async (file, setImageUrl) => {
    // Ensure the file exists
    if (!file) {
      toast.error("Please select an image.");
      return;
    }

    toast.loading("Uploading image...");

    const formData = new FormData();
    formData.append("file", file); // The actual image file
    formData.append("publicKey", process.env.IMAGEKIT_PUBLIC_KEY); // Your ImageKit API key
    formData.append("folder", "posts"); // Optional: Folder name

    try {
      // Send the file to ImageKit
      const response = await axios.post(
        "https://upload.imagekit.io/api/v1/files/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { url } = response.data; // Extract the uploaded image URL
      setImageUrl(url); // Save URL in state
      toast.dismiss(); // Dismiss loading
      toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.dismiss(); // Dismiss loading
      toast.error("Failed to upload image.");
      console.error(error);
    }
  };
  return { handleImageUpload };
};

export default useImageUpload;
