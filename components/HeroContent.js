import styles from "../styles/home.module.scss";

export default function HeroContent({ handlePlayVideo }) {
  return (
    <div className="absolute top-0 w-full h-full flex flex-col justify-center z-30">
      <div className="flex flex-col gap-16 justify-center lg:pt-24 max-w-3xl mx-auto xl:w-1/2">
        <h1
          className={`px-2 mx-6 mt-4 text-4xl lg:text-5xl xl:text-6xl text-white text-center`}
        >
          Welcome to the{" "}
          <span className={styles.customHeading}>unconventional</span>
        </h1>
        <button
          onClick={handlePlayVideo}
          className="bg-reflex-600 text-white w-3/4 lg:w-1/2 mx-auto mt-10 py-3 rounded shadow-xl"
        >
          Show Me More
        </button>
      </div>
    </div>
  );
}
