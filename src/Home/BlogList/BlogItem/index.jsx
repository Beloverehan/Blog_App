import React from "react";
import Chip from "../../../common/Chip";
import "./styles.css";
import { Link } from "react-router-dom";
import AD from "../../../../../public/assets/images/author.jpg";
const BlogItem = ({
  blog: {
    id,
    description,
    title,
    createdAt,
    authourName,
    authourAvatar,
    category,
    cover,
  },
}) => (
  <div className="blogItem-wrap">
    <img src={cover} alt="cover" className="blogItem-cover" />
    <Chip label={category} />
    <h3>{title}</h3>
    <p className="blogItem-desc">{description}</p>
    <footer>
      <div className="blogItem-author">
        <img src={AD} alt="avatar" />
        <div>
          <h6>{authourName}</h6>
          <p>{createdAt}</p>
        </div>
      </div>
      <Link className="blogItem-link" to={`/blog/${id}`}>
        {" "}
        ➝
      </Link>
    </footer>
  </div>
);

export default BlogItem;
