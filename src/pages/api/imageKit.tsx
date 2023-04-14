import ImageKit from "imagekit";
import { NextApiRequest, NextApiResponse } from "next";

interface ImageKitConfig {
  publicKey: string;
  privateKey: string;
  urlEndpoint: string;
}

const imagekitConfig: ImageKitConfig = {
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "",
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "",
};

const imagekit = new ImageKit(imagekitConfig);

interface ListFilesParams {
  skip?: number;
  limit?: number;
}

interface Image {
  name: string;
  src: string;
  width: number;
  height: number;
}

async function fetchAllImages() {
  const params: ListFilesParams = {
    skip: 0,
    limit: 100,
  };

  const images = await imagekit.listFiles(params);
  const imageList: Image[] = [];
  images.forEach((image) => {
    imageList.push({
      name: image.name,
      src: image.url,
      width: image.width,
      height: image.height,
    });
  });
  return imageList;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const images = await fetchAllImages();
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(images));
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end();
  }
}
