import React, { useEffect, useState } from "react"
import { Gallery } from "react-grid-gallery"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import imageStyle from "../styles/Gallery.module.scss"
import axios from "axios"

export default function PhotoGallery({ currentIdx }) {
  const [index, setIndex] = useState(-1)
  const [images, setImages] = useState([])
  const [slides, setSlides] = useState([])

  const handleClick = (index, item) => {
    setIndex(index)
  }

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/cloudinary")
      setImages(data)
      const slides = data.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
      }))
      setSlides(slides)
    }
    if (images.length == 0) {
        fetchData()
    }
  }, [])

  return (
    <div>
      {currentIdx == 2 ? (
        <div className={imageStyle.gallery}>
          <div className={imageStyle.scroll}>
            <Gallery
              images={images}
              onClick={handleClick}
              enableImageSelection={false}
              rowHeight={300}
              margin={3}
            />
          </div>
          <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
          />
        </div>
      ) : null}
    </div>
  )
}
