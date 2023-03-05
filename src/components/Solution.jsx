export default function Solution({ title, imageUrl, description }) {
  return (
    <div class="solution">
      <h2 class="solution-title">{title}</h2>
      <div class="solution-content">
        <div class="solution-image">
          <img src={imageUrl} alt="solution-image" />
        </div>
        <div class="solution-desc">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
