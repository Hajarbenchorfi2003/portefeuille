import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef } from "react";

const WorkSingleISotope = ({ images }) => {
  const isotope = useRef();

  useEffect(() => {
    const initializeIsotope = () => {
      isotope.current = new Isotope(".m-gallery", {
        itemSelector: ".col-xs-12",
        percentPosition: true,
        masonry: {
          columnWidth: ".col-xs-12",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    };

    // Vérifiez que les images sont chargées
    const imagesLoaded = document.querySelectorAll(".m-gallery img");
    let loadedCount = 0;

    imagesLoaded.forEach((img) => {
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === imagesLoaded.length) {
          initializeIsotope(); // Initialise Isotope après le chargement des images
        }
      };

      // Cas où les images sont en cache
      if (img.complete) {
        loadedCount += 1;
        if (loadedCount === imagesLoaded.length) {
          initializeIsotope();
        }
      }
    });
  }, [images]);

  return (
    <Fragment>
      <div className="m-gallery">
        <div className="row">
          {images.map((image, index) => (
            <div
              className="col-xs-12 col-sm-6 col-md-6 col-lg-6"
              key={index}
            >
              <div className="works-item">
                <div
                  className="image scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="img">
                    <a href={image.image.url} className="has-popup-image">
                      <img
                        decoding="async"
                        src={image.image.url}
                        alt={image.image.alt || `Image ${index + 1}`}
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default WorkSingleISotope;
