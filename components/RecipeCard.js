import Link from "next/link";

const RecipeCard = ({ item }) => {
  console.log(item);

  const { title, slug, cookingTime, thumbnail } = item.fields;

  return (
    <div key={item.sys.id}>
      <div className="card">
        <div className="featured"></div>
        <div className="content">
          <div className="info">
            <h4>{title}</h4>
            <p>takes approx {cookingTime} mins to make</p>
          </div>
          <div className="actions">
            <Link href={"/recipes/"}></Link>
          </div>
        </div>
      </div>
      {item.fields.title}
    </div>
  );
};

export default RecipeCard;
