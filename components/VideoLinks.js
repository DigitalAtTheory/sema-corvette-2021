import ReactPlayer from "react-player";
import styles from "../styles/videoLinks.module.scss";

export default function VideoLinks() {
  return (
    <div className="px-4 flex flex-col gap-12 mb-12">
      <div
        className={`${styles.videoContainer} border-2 border-white md:w-1/2 mx-auto`}
      >
        <ReactPlayer
          url="https://youtu.be/D9gxYWvX9Ws"
          config={{
            youtube: {
              playerVars: {
                controls: 1,
              },
            },
          }}
        />
      </div>
      <div
        className={`${styles.videoContainer} border-2 border-white md:w-1/2 mx-auto`}
      >
        <ReactPlayer
          url="https://youtu.be/D9gxYWvX9Ws"
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
