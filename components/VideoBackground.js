import styles from "../styles/home.module.scss";

export default function VideoBackground({ videoPath, children }) {
  return (
    <div className="relative w-full h-screen z-10 ">
      <div className={`${styles.customOverlay} absolute w-full h-full z-20`} />
      {children}
      <div className="absolute h-full w-full top-0 z-0 ">
        <video
          className="relative h-full w-full object-cover z-0"
          src={videoPath}
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    </div>
  );
}
