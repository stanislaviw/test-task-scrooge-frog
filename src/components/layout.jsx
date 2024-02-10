import {
  GITHUB_ACCOUNT,
  GITHUB_REPOSITORIE,
  LINKEDIN_ACCOUNT,
} from "../constants/constants";

const date = new Date();
const year = date.getFullYear();

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <header className="header">
        <a className="link" href="/">
          Home
        </a>
        <a className="link" href={GITHUB_REPOSITORIE} target="_blank">
          Repositorie
        </a>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <div className="footer_social_networks">
          <a target="_blank" className="link" href={GITHUB_ACCOUNT}>
            Github
          </a>
          <a target="_blank" className="link" href={LINKEDIN_ACCOUNT}>
            LinkedIn
          </a>
        </div>
        <p className="footer_text">Stanislav Ivanov © {year}</p>
      </footer>
    </div>
  );
};
