import Heading from "./Heading";

const Component2 = () => {
  return (
    <div className="px-20 py-10 bg-lightPurple text-white text-center">
      <Heading content="Customization like never before" color="text-white" />
      <h3 className="text-xl mt-4">
        Design your own cards with images, selfies, quotes, memes and more
      </h3>
      <div className="h-80 flex items-center justify-center text-2xl">
        Image not available
      </div>
    </div>
  );
};

export default Component2;
