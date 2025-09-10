const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
      <div className="text-3xl mb-4">{category.icon}</div>
      <h3 className="text-lg font-semibold">{category.name}</h3>
      <p className="text-gray-600  ">{category.jobs} Jobs</p>
    </div>
  );
};

export default CategoryCard;
