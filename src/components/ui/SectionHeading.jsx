const SectionHeading = ({ index, kicker, title, accent, lead, id }) => (
  <header className="section-head" data-reveal>
    <span className="section-kicker">
      <b>{index}</b> {"//"} {kicker}
    </span>
    <h2 className="section-title" id={id}>
      {title} {accent && <em>{accent}</em>}
    </h2>
    {lead && <p className="section-lead">{lead}</p>}
  </header>
);

export default SectionHeading;
