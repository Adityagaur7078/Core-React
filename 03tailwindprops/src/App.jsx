import Card from "./components/card";

function App() {

  const nft1 = {
    title: "Monkey NFT",
    id: "#101",
    price: "0.05 $",
    image:
      "https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif",
  };

  const nft2 = {
    title: "Lion NFT",
    id: "#202",
    price: "0.12 $",
    image:
      "https://media3.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
  };

  return (
    <>
      <Card nftData={nft1} />
      <Card nftData={nft2} />
    </>
  );
}

export default App;