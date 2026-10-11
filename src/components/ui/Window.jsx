// Shared terminal / editor window frame.
const Window = ({ title, meta, className = "", bodyClassName = "", children, ...rest }) => (
  <div className={`window ${className}`} {...rest}>
    <div className="window-bar">
      <span className="window-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      {title && <span className="window-title">{title}</span>}
      {meta && <span className="window-meta">{meta}</span>}
    </div>
    <div className={bodyClassName}>{children}</div>
  </div>
);

export default Window;
