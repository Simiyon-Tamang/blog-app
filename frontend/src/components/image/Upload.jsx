import { IKContext, IKUpload } from "imagekitio-react";
import { useRef } from "react";
import toast from "react-hot-toast";

const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:5001/auth");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    console.log(response);
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({ children, type, setData, setUrl }) => {
  const ref = useRef(null);
  return (
    <IKContext
      publicKey="public_U8xuxl5i0wb6D8SbQAJrAvjNnFQ="
      urlEndpoint="https://ik.imagekit.io/olermup8h"
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        className="hidden"
        ref={ref}
        accept={`${type}/*`}
        onError={(error) => {
          console.log(error);
          toast.error("Failed to upload image");
        }}
        onSuccess={(res) => {
          //setImageUrl(res.url);
          console.log(res);
          setData(res);
          setUrl(res.url);
        }}
      />
      <div
        className="cursor-pointer"
        role="button"
        aria-label={`Upload ${type}`}
        onClick={() => ref.current.click()}
      >
        {children}
      </div>
    </IKContext>
  );
};

export default Upload;
