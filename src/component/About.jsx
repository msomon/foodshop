
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import HeroImg from "../assets/heroBanner.jpg"
const About = () => {
  return (
    <>
      <section className="about " id="about">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto gap-14 lg:gap-40 mt-6 lg:mt-32 p-2">
          <div className=" ">
            <div className="top ">
              <h1 className="heading text-3xl font-bold mb-4 ">ABOUT US</h1>
              <p className="my-3 ">The only thing we are serious about good food.</p>
            </div>
            <p className="mid leading-8 ">
            Welcome to Delightful Bites, where passion meets palate! We are committed to crafting culinary experiences that tantalize taste buds. From savory classics to innovative delights, our food store is a haven for food enthusiasts seeking memorable flavors and gastronomic bliss. Explore, indulge, and savor the journey with us!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span className="btn h-6 w-14 my-2  mx-2  bg-orange-500">
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          {/* h-[320px] md:h-[350px] lg:h-[450px] w-[320px] md:w-[400px] lg:min-w-[450px] lg:max-w-3xl */}
          <div className="w-fit md:w-[400px] lg:w-[600px]">
            <img className="rounded-2xl h-full w-full " src={HeroImg} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
