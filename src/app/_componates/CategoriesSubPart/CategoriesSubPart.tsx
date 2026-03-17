import { getAllCategories } from "-/api/services/route.services";
import Link from "next/link";

export default async function CategoriesSubPart() {
  const AllCategories = await getAllCategories();

  console.log("AllCategories", AllCategories);

  return (
    <div className=" p-10 flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h2>Shop By Category</h2>
        <Link href="/categories">View All Categories</Link>
      </div>

      <div className="grid grid-cols-6 gap-5">
        {AllCategories?.map((category) => (
          <div key={category._id} className="flex justify-center items-center flex-col hover:shadow-lg ">
            <img src={category.image} alt={category.name} className="w-20 h-20 rounded-full" />
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
