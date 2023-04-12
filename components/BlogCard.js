import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ post }) => {
  const { title, slug, thumbnail, beskrivning, race } = post.fields;
  return (
    <div>
      <div className="thumbnail">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>blabla</p>
        </div>
        <div className="actions">
          <Link href={`/recipes/${slug}`}>Läs mer</Link>{" "}
        </div>
      </div>

      <style jsx>{`
        .card {
          transform: rotateZ(-1deg);
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          margin: 0;
          position: relative;
          top: 0;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
          padding: 0 20px 20px 0;
        }
      `}</style>
    </div>
  );
};

export default BlogCard;
