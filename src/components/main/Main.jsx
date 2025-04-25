import "./Main.css";
export default function Main() {
  const { title, description, isNew, img } = {
    title: "XX99 Mark II    Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    isNew: true,
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fru%2F%25D1%2581%25D1%2582%25D0%25BE%25D0%25BA%25D0%25BE%25D0%25B2%25D1%258B%25D0%25B5-%25D1%2584%25D0%25BE%25D1%2582%25D0%25BE%25D0%25B3%25D1%2580%25D0%25B0%25D1%2584%25D0%25B8%25D0%25B8%2F%25D0%25BF%25D1%2580%25D0%25B8%25D1%2580%25D0%25BE%25D0%25B4%25D0%25B0-%25D0%25BB%25D0%25B0%25D0%25BD%25D0%25B4%25D1%2588%25D0%25B0%25D1%2584%25D1%2582%25D1%258B-%25D0%25B8-%25D0%25BF%25D0%25B5%25D0%25B9%25D0%25B7%25D0%25B0%25D0%25B6%25D0%25B8&psig=AOvVaw2eyFTswoRekceYt9Q2w--s&ust=1745612917546000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDzzITB8YwDFQAAAAAdAAAAABAE",
  };
  return (
    <main className="main">
      <Product
        title={title}
        description={description}
        isNew={isNew}
        img={img}
      />
    </main>
  );
}
