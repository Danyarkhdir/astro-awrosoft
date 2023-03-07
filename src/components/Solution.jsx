export default function Solution({ title, imageUrl, description }) {
  return (
    <div className="wow solution">
      <div className="solution-content">
        <div className="solution-image">
          <img src={imageUrl} alt="solution-image" />
        </div>
        <div className="solution-desc">
          <h2 className="solution-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
