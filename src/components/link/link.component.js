const Link = ({ href, className, image, children, disabled }) => {
  return (
    <>
      {disabled ? (
        <div
          title='maintenance'
          className={className}
          style={{
            backgroundImage: `url('images/${image}')`,
          }}
        />
      ) : (
        <a href={href} target='_blank' rel='noreferrer nofollow'>
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
      )}
    </>
  );
};

export default Link;
