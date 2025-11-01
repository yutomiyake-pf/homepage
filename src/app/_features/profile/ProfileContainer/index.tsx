import { ReactNode } from "react";
import styles from "./styles.module.css";
import { Header } from "@/app/_components/Header";
import { FaGithub } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import { Profile } from "./type";
import { AppleMusicWidget } from "../AppleMusicWidget";

type Props = {
  profile: Profile;
};

export const ProfileContainer = ({ profile }: Props): ReactNode => {
  return (
    <main className={styles.section}>
      <div className={styles.sectionContent}>
        <Header title="プロフィール" />
        <section className={styles.profileContainer}>
          <article className={styles.profileCard}>
            <div className={styles.profileHeader}>
              <div className={styles.iconWrapper}>
                <Image
                  src={profile.iconUrl}
                  alt={profile.name}
                  width={120}
                  height={120}
                  className={styles.icon}
                  priority
                />
              </div>
              <div className={styles.profileBasicInfo}>
                <h2 className={styles.name}>{profile.name}</h2>
                <p className={styles.nickname}>@{profile.nickname}</p>
                <div className={styles.links}>
                  <Link
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                    aria-label="GitHubプロフィール"
                  >
                    <FaGithub className={styles.githubIcon} />
                    <span>GitHub</span>
                  </Link>
                  <Link
                    href="https://music.apple.com/profile/yuto_uver1064"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.appleMusicLink}
                    aria-label="Apple Musicプロフィール"
                  >
                    <SiApplemusic className={styles.appleMusicIcon} />
                    <span>Apple Music</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.profileDetails}>
              <div className={styles.profileItem}>
                <dt className={styles.label}>出身地</dt>
                <dd className={styles.value}>{profile.birthplace}</dd>
              </div>

              <div className={styles.profileItem}>
                <dt className={styles.label}>生年月日</dt>
                <dd className={styles.value}>{profile.birthdate}</dd>
              </div>

              <div className={styles.profileItem}>
                <dt className={styles.label}>趣味</dt>
                <dd className={styles.value}>
                  <ul className={styles.hobbiesList}>
                    {profile.hobbies.map((hobby, index) => (
                      <li key={index} className={styles.hobbyItem}>
                        {hobby}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </div>

            <AppleMusicWidget playlistUrl="https://embed.music.apple.com/jp/playlist/%E3%81%8A%E6%B0%97%E3%81%AB%E5%85%A5%E3%82%8A%E3%81%AE%E6%9B%B2/pl.u-ovUGaDyr8E" />
          </article>
        </section>
      </div>
    </main>
  );
};
