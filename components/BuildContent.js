import ReactPlayer from "react-player";
import styles from "../styles/videoLinks.module.scss";

export default function BuildContent() {
  return (
    <div className="mb-10">
      <h1 className="text-3xl text-white text-center mb-4">
        Go behind the build
      </h1>
      <div className={`${styles.videoContainer} p-4`}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=iIEh1hyPWuk"
          config={{
            youtube: {
              playerVars: {
                controls: 1,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
