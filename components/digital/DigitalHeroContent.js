import styles from "../../styles/home.module.scss";

export default function DigitalHeroContent() {
  return (
    <div className="absolute top-0 w-full h-full flex flex-col justify-center z-30">
      <div className="flex flex-col gap-16 justify-center lg:pt-24 max-w-3xl mx-auto xl:w-1/2">
        <h1
          className={`px-2 mx-6 mt-4 text-4xl lg:text-5xl xl:text-6xl text-white text-center`}
        >
          Welcome to the{" "}
          <span className={styles.customHeading}>unconventional</span>
        </h1>
      </div>
    </div>
  );
}
