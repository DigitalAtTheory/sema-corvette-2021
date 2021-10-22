import ReactPlayer from "react-player";
import styles from "../styles/playVideo.module.scss";
import { RiCloseCircleFill } from "react-icons/ri";

export default function PlayVideo({ handleDonePlaying }) {
  return (
    <div
      className={`${styles.videoContainer} fixed top-0 h-screen w-full bg-black z-50 text-center`}
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
      <button
        onClick={handleDonePlaying}
        className="absolute top-2 right-2 text-reflex-600 text-3xl"
      >
        <RiCloseCircleFill />
      </button>
      <button
        onClick={handleDonePlaying}
        className="bg-reflex-600 text-white w-full md:w-3/4 lg:w-1/2 mt-10 py-3 rounded shadow-xl absolute top-3/4 lg:top-2/3 left-0 md:left-24 lg:left-1/4"
      >
        Done Watching
      </button>
    </div>
  );
}
