import Button from "./button/Button";
import "./Product.css";

export default function Product({
  title,
  description,
  isNew,
  img: { desktop, mobile, tablet },
}) {
  return (
    <div>
      <img src={img} alt={title} width={540} height={560} />
      <div>
        {isNew && <span></span>}
        <h3>{title}</h3>
        <p>{description}</p>
        <Button text="See Product" />
      </div>
    </div>
  );
}
