import { format } from 'date-fns'
import {Link} from "react-router-dom"

export default function Post({_id, title, summary, cover, author, content, createdAt}) {
    return(
      <div className="post">
        <div className="texts">
          <p className="info">
            <a className="author">{author.username}</a>
            <time>{format(new Date(createdAt), 'MMM d, yyyy')}</time>
          </p>
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p className="summary">{summary}</p>
        </div>
        <Link to={`/post/${_id}`}>
          <div className="image">
            <img src={"http://localhost:4000/" + cover} alt=""></img>
          </div>
        </Link>
      </div>
    )
}