import { AppConfig } from "../../utils/AppConfig";

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{" "}
    <span role="img" aria-label="Love">
      ♥
    </span>
    by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
  </div>
);

export { FooterCopyright };
