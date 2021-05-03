import Link from "next/link";
import Image from "next/image";
const RecipeCard = ({ item }) => {
  const { title, slug, cookingTime, thumbnail } = item.fields;
  console.log(thumbnail);
  return (
    <div key={item.sys.id}>
      <div className="card">
        <div className="featured">
          <Image
            src={"https:" + thumbnail.fields.file.url}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
          />
        </div>
        <div className="content">
          <div className="info">
            <h4>{title}</h4>
            <p>takes approx {cookingTime} mins to make</p>
          </div>
          <div className="actions">
            <Link href={"/recipes/" + slug}>
              <a>Cook this</a>
            </Link>
          </div>
        </div>
      </div>
      {item.fields.title}
    </div>
  );
};

export default RecipeCard;
