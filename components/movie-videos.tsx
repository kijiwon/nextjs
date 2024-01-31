import { API_URL } from "../app/constants";
import style from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  // console.log(`Fetching videos: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
  // throw new Error("Something broke...");
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return (
    <div className={style.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
