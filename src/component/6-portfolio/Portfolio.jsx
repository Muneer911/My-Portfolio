import { useRef } from "react";
import "./PortfolioStyle.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
  {
    id: 1,
    title: "Gericht resturant",
    img: "../../../public/Wallpaper/Griche.png",
    altg: "Griche restaurant image",
    desc: "Experience modern griche cuisine with our innovative menu and order from our high-skilled chefs.",
    link: "https://gericht-restaurant-website-virid.vercel.app/"
  },
  {
    id: 2,
    title: "GPT-3",
    img: "./public/Wallpaper/GPT3.png",
    altg: "GPT-3 website image",
    desc: "Unleash the power of AI with our cutting-edge GPT-3 platform.",
    link: "https://chat9.vercel.app/"
  },
  {
    id: 3,
    title: "Movie-x",
    img: "./public/Wallpaper/MovieX.png",
    altg: "Movie-X website image",
    desc: "Dive into cinematic worlds: Explore the hottest new films & serie.",
    link: ""
  },
  {
    id: 4,
    title: "MV e-commere",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altg: "MV website image",
    desc: "Coming soon...",
    link: ""
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper section__padding">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.altg} />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
              <a href={item.link}>
            <button>
              See Demo
            </button>
              </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;