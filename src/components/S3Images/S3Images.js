import React, { useState, useEffect } from "react";
import { Storage } from "aws-amplify";

const S3Image = ({ imageKey, ...rest }) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    Storage.get(imageKey, {
      level: "public",
    }).then((url) => {
      setImage(url);
    });
  }, [imageKey]);
  return <img {...rest} src={image} alt="s3 product here" />;
};

export default S3Image;
