export const PostCard = ({cover,title,id,body}) => 
(
    <div className="post">
        <img src={cover} alt={title}/>
        <div key={id} className="post-content">
        <h1>{title}</h1>
        <p>{body}</p>
        </div>
    </div>
);