import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <div className="bg-amber-200 text-center">
        <p className="text-midnight-400">Site currently work in progress</p>
      </div>
      <div className="bg-midnight-500 p-4 flex mb-8">
        <Nav />
      </div>
    </>
  );
};

export default Header;
