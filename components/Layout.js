import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Camilla</span>
              <span>Hest</span>
            </h1>
            <h2>Proffs på hästar</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2023</p>
      </footer>
    </div>
  );
}
