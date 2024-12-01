import { IKImage } from "imagekitio-react";
import React from "react";

const Image = ({ src, className, w, h, alt }) => {
  const urlEndpoint = "https://ik.imagekit.io/olermup8h/";
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      width={w}
      height={h}
      alt={alt}
    />
  );
};

export default Image;
