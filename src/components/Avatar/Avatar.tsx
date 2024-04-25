import styles from "./Avatar.module.scss";

interface AvatarProps {
  name?: string;
  image?: string;
}
const Avatar = (props: AvatarProps) => {
  const { name, image } = props;

  return (
    <div className={styles.avatar}>
      {image ? (
        <img src={image} alt="avatar" />
      ) : (
        name
          ?.split(" ")
          .map((e) => e[0]?.toUpperCase())
          .join("")
      )}
    </div>
  );
};

export default Avatar;
