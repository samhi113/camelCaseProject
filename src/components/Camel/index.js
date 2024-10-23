import Image from "next/image";
import camelStyles from "./camel.module.css";
"../../assets/img"

export default function Camel({ img, title, desc }) {
  return (
    <div className={camelStyles.camel}>
      <div className="camelText">
        <h2>Hi {title}</h2>
        <p>{desc}</p>
      </div>
      <Image
       src={`/assets/img/${img}.png`}
       alt={desc}
       width={200}
       height={200}
      />
    </div>
  );
}