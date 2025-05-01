export default function LoginButton({ type, image, title, description, onClick }) {
  return (
    <div className={`login-button ${type}-button`} onClick={onClick}>
      <div className="image-circle">
        <img src={image} alt={title} />
      </div>
      <h3 className="button-title">{title}</h3>
      <p className="button-description">{description}</p>
    </div>
  )
} 