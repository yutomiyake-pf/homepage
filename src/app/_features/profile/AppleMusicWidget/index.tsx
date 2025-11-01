"use client";
import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  playlistUrl: string;
};

export const AppleMusicWidget = ({ playlistUrl }: Props): ReactNode => {
  return (
    <div className={styles.appleMusicWidget}>
      <iframe
        allow="autoplay *; encrypted-media *;"
        frameBorder="0"
        height="450"
        style={{
          width: "100%",
          maxWidth: "660px",
          overflow: "hidden",
          background: "transparent",
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src={playlistUrl}
        title="Apple Music Playlist"
      />
    </div>
  );
};

