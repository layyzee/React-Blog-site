import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
        voluptatum error non blanditiis excepturi eum aspernatur sapiente,
        nesciunt sed perferendis suscipit nemo. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Molestias accusamus adipisci dicta
        voluptatum sint omnis autem ad eaque quos incidunt. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Illo, perspiciatis harum. Qui,
        voluptates repellat.
      </p>
    </div>
  );
}
