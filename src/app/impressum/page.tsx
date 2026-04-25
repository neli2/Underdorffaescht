export default function Impressum() {
  return (
    <div className="glass-panel animate-fade-in" style={{ marginTop: "2rem" }}>
      <h1 style={{ fontSize: "2rem", color: "var(--primary)", marginBottom: "1rem" }}>Impressum</h1>
      <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
        <strong>Verantwortlich für den Inhalt:</strong><br/>
        TecFox GmbH<br/>
        <br/>
        Kontakt:<br/>
        E-Mail: info@tecfox.ch
      </p>
    </div>
  );
}
