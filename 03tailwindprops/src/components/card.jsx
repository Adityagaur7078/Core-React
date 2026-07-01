export default function Card({ nftData }) {
  return (
    <div className="w-72 flex flex-col rounded-xl glass min-h-72 mt-3">

      <img
        src={nftData.image}
        alt="card"
        className="rounded-t-xl w-full"
      />

      <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl text-white">

        <div className="flex justify-between">
          <h1 className="font-bold">
            {nftData.title}
          </h1>

          <h1 className="font-bold">
            Price
          </h1>
        </div>

        <div className="flex justify-between font-mono">
          <p>{nftData.id}</p>
          <p>{nftData.price}</p>
        </div>

      </div>
    </div>
  );
}