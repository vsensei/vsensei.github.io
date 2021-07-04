const Link = ({ href, className, image, children }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer nofollow">
      {children ? (
        children
      ) : (
        <div
          className={className}
          style={{
            backgroundImage: `url('images/${image}')`,
          }}
        />
      )}
    </a>
  );
};

export default Link;
