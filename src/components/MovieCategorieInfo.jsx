import { categories } from '../api/movieCategories';

function MovieCategorieInfo() {
  return (
    <div>
      <div className="flex gap-2 text-white justify-center mx-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-item bg-gray-900 rounded-3xl p-2 mt-4 flex items-center justify-center"
            style={{ width: category.width }}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieCategorieInfo
