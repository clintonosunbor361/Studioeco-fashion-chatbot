function DotLogo() {
  return (
    <span className="footer-logo-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  )
}

const groups = [
  {
    title: 'Product',
    links: [
      ['Features', '#features'],
      ['Solutions', '#how-it-works'],
      ['Pricing', '#pricing'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About', '#hero'],
      ['Contact', '#cta'],
      ['Demo', '#cta'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-container">
        <div className="site-footer-brand">
          <a href="#hero" aria-label="Eco home">
            <DotLogo />
            <span>Eco</span>
          </a>
          <p>Lagos, Nigeria / working globally</p>
        </div>

        <div className="site-footer-links">
          {groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2>{group.title}</h2>
              {group.links.map(([label, href]) => (
                <a key={label} href={href}>
                  {label}
                </a>
              ))}
            </nav>
          ))}
        </div>

        <div className="site-footer-bottom">
          <p>(c) {new Date().getFullYear()} Studio Eco. All rights reserved.</p>
          <a href="#hero">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
