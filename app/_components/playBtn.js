import { FaPlay, FaPause } from "react-icons/fa";

export default function PlayBtn({ playing, action, styles }) {
  return (
    <button
      onClick={action}
      className={`${styles} p-7 rounded-full w-fit ring-2 ring-white`}
      aria-label={playing ? "Pause" : "Play"}
    >
      {playing ? <FaPause size={24} /> : <FaPlay size={24} />}
    </button>
  );
}
