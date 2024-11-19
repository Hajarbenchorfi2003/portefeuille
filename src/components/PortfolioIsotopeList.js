import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { client } from "../utils/prismicClient"; // Importer le client Prismic

const PortfolioIsotopeList = ({ projects }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="works-box works-list">
        <div
          className="filter-links scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
          >
            All
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-ui-ux-design"
            )}`}
            onClick={handleFilterKeyChange("sorting-ui-ux-design")}
          >
            UI UX Design
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-photo")}`}
            onClick={handleFilterKeyChange("sorting-photo")}
          >
            Photography
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-development"
            )}`}
            onClick={handleFilterKeyChange("sorting-development")}
          >
            Development
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-branding"
            )}`}
            onClick={handleFilterKeyChange("sorting-branding")}
          >
            Branding
          </a>
        </div>
        <div className="works-items works-list-items row">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 ${project.tags
                .map((tag) => `sorting-${tag.toLowerCase().replace(/\s/g, "-")}`)
                .join(" ")}`}
            >
              <div
                className="works-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <div className="img">
                    <Link href={`/work/${project.uid}`}>
                      <a>
                        <img
                          decoding="async"
                          src={project.image}
                          alt={project.title}
                        />
                        <span className="overlay" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="desc">
                  <span className="category">{project.category}</span>
                  <h5 className="name">
                    <Link href={`/work/${project.uid}`}>
                      <a>{project.title}</a>
                    </Link>
                  </h5>
                  <div className="text">
                    <p>{project.description}</p>
                  </div>
                  <Link href={`/work/${project.uid}`}>
                    <a className="lnk">See project</a>
                  </Link>
                </div>
                <div
                  className="bg-img"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export async function getStaticProps() {
  const response = await client.getByType("project");
  const projects = response.results.map((doc) => ({
    uid: doc.uid,
    title: doc.data.title,
    description: doc.data.description,
    image: doc.data.image.url,
    category: doc.data.category,
    tags: doc.data.tags || [],
  }));

  return {
    props: {
      projects,
    },
  };
}

export default PortfolioIsotopeList;
