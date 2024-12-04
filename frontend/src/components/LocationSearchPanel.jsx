import React from 'react';

const LocationSearchPanel = ({ setvehiclePanel,setpanelOpen }) => {
  const locations = [
    "24B, Near Kapoor's cafe, Patia, KIIT, Bhubaneswar",
    "23A, Near Malhotra's cafe, Patia, KIIT, Bhubaneswar",
    "2B, Campus 12, Patia, Bhubaneswar",
    "1AC, Anita's Palace, Damana, Bhubaneswar",
  ];

  return (
    <div>
      {/* Sample Data */}
      {locations.map((elem, index) => (
        <div
          key={index}
          onClick={() => {
            setvehiclePanel(true);
            setpanelOpen(false);
          }}
          className="flex gap-4 border-2 p-3 border-white active:border-black items-center my-2 rounded-xl justify-start"
        >
          <h2 className="bg-[#eee] h-8 w-12 flex items-center rounded-xl justify-center">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
