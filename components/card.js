import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export const Card = ({ data }) => {
  const { start, end, duration, title, address, description, text } = data;

  return (
    <div className={utilStyles.card}>
      <div className={utilStyles.firstColumn}>
        <div className={utilStyles.regular}>
          {start}
          {end && " – "}
        </div>
        {end && <div className={utilStyles.regular}>{end}</div>}
        <div className={utilStyles.secondary}>{duration}</div>
      </div>
      <div className={utilStyles.secondColumn}>
        <div className={utilStyles.bold}>{title}</div>
        {address && (
          <Link href={`https://${address}`} target="_blank">
            <div className={utilStyles.secondary}>{address}</div>
          </Link>
        )}
        <div className={utilStyles.bold}>{description}</div>
        {text && <div className={utilStyles.regular}>{text}</div>}
      </div>
    </div>
  );
};
