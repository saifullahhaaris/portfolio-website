const Button = ({ text, className, id, href, download, icon = 'arrow-down.svg'}) => {
  const handleClick = (e) => {
    if (href && download) {
      return;
    }
    if (href && !id) {
      return;
    }

    // Scroll behavior
    e.preventDefault();
    const target = document.getElementById('counter');
    if (target && id) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      download={download}
      onClick={handleClick}
      className={`${className ?? ''} cta-wrapper`}
      target={href && !download ? "_blank" : undefined}
      rel={href && !download ? "noopener noreferrer" : undefined}
    >
      
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src={`/images/${icon}`} alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;


