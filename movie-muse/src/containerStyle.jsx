//took this object out of component as this object will not change and doesn't depend on anything inside the component
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

export default function StarRating() {
  return (
    <div style={containerStyle}>
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <span>s{i + 1}</span>
        ))}
      </div>
      <p>10</p>
    </div>
  );
}
