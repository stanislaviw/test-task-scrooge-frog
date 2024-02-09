const date = new Date();
const year = date.getFullYear();

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <header className="header">
        <a className="header_link" href="/">
          Home
        </a>
        <a
          className="header_link"
          href="https://github.com/stanislaviw/test-task-scrooge-frog"
          target="_blank"
        >
          Repositorie
        </a>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <p className="footer_text">Stanislav Ivanov © {year}</p>
      </footer>
    </div>
  );
};
