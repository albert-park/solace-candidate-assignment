type HeaderProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};

const Header = ({ onChange, onClick }: HeaderProps) => {
  const placeholderText = "Name, location, or specialty";
  return (
    <div className="solace-header p-6 text-center">
      <h1>Solace Advocates Search</h1>
      <p>Search from amoung our many qualified advocates near you.</p>
      <div className="m-5 place-self-center flex flex-row">
        <input
          className="m-1 p-1 search-input-box"
          placeholder={placeholderText}
          onChange={onChange}
        />
        <button className="m-1 p-1" onClick={onClick}>
          Reset Search
        </button>
      </div>
    </div>
  );
};

export default Header;
