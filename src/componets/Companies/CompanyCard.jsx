const CompanyCard = ({ company }) => {
  const isImage = typeof company.logo === "string" && company.logo.startsWith("http");

  return (
    <div className="bg-white p-6 rounded shadow hover:shadow-md transition text-center flex flex-col items-center">
      <div className="text-4xl mb-4">
        {isImage ? (
          <img
            src={company.logo}
            alt={company.name + " logo"}
            className="w-20 h-12 object-contain mx-auto"
          />
        ) : (
          company.logo
        )}
      </div>
      <h3 className="text-lg font-semibold">{company.name}</h3>
      <p className="text-gray-600">{company.openings} Openings</p>
    </div>
  );
};

export default CompanyCard;