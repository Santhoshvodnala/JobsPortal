const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
      <div className="mb-4"><Icon className="w-8 h-8 text-orange-500" /></div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;