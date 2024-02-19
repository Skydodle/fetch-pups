import SearchByZipCode from './SearchByZipCode';

const LocationSection: React.FC = () => {
  return (
    <>
      <div className="p-4  bg-white flex flex-col">
        <h2 id="filter-title" className="text-primary font-semibold mb-4">
          Search By Location
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <h4 className="text-sm mb-3 text-custom-blue">Zip Code:</h4>
            <SearchByZipCode />
          </div>
          <div>
            <h4 className="text-sm mb-3 text-custom-blue">City:</h4>
            {/* component here */}
          </div>
          <div>
            <h4 className="text-sm mb-3 text-custom-blue">State:</h4>
            {/* component here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationSection;
