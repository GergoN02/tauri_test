/* eslint-disable jsx-a11y/media-has-caption */
import type { ReactElement } from "react";
import { useRef } from "react";

const getStream = async (): Promise<MediaStream | undefined> => {
  await navigator.mediaDevices
    .getUserMedia({
      audio: false,
      video: true,
    })
    .then((stream) => {
      console.log(stream);
      return stream;
    })
    .catch((error) => {
      console.log("error", error);
    });
  return undefined;
};

const App = (): ReactElement => {
  const videoReference = useRef<HTMLVideoElement>(null);

  const onStream = async (): Promise<void> => {
    const stream = await getStream();
    if (videoReference.current && stream) {
      videoReference.current.srcObject = stream;
      // eslint-disable-next-line unicorn/prefer-add-event-listener
      videoReference.current.onloadedmetadata = (): void => {
        void videoReference.current?.play();
      };
    }
  };

  return (
    <div className="App">
      <video ref={videoReference}>No source found</video>
      <button onClick={onStream} type="submit">
        Test
      </button>
    </div>
  );
};

export default App;
