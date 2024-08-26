import "./GiftComponent.css";

export default function GiftComponent(props) {
  return (
    <div className="GiftCategoty">
      {props.hasTitle ? (
        <div className="title">
          <h2>{props.title}</h2>
        </div>
      ) : null}
      <div className="GiftChild">
        {props.data.map((val) => {
          const imageUrl = new URL(
            `../../assets/allGifts/${val.imgUrl}`,
            import.meta.url
          ).href;

          return (
            <div className="GiftCard" key={val.id}>
              <img src={imageUrl} alt="" />
              <span>{val.name}</span>
              <button>{val.peace}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
