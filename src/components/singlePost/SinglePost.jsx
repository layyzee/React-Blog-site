import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Balaji</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          quaerat animi aliquam ipsa omnis repellendus provident, quia
          similique, perferendis voluptatem ducimus nesciunt? Dignissimos earum
          totam vitae maxime ut? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Alias similique, quod numquam quae provident
          voluptatum tempora repudiandae voluptates repellat culpa distinctio
          sunt odio modi corporis corrupti magnam aspernatur magni consequuntur
          iusto nemo ratione, odit recusandae deserunt! Ut laboriosam nam
          praesentium corrupti accusantium vel commodi soluta dicta illo
          architecto. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Adipisci optio dolor similique voluptatum delectus, deleniti esse eos
          quasi. A adipisci eius provident ut tenetur enim sunt veritatis quis
          laborum nostrum? Tempora, nihil. Odit.
        </p>
      </div>
    </div>
  );
}
