function Header() {
  return (
    <div className="flex justify-between my-8 items-center sticky top-0">
      <h1 className="font-medium text-xl">Occian Drops 💧</h1>
      <div>
        <a
          href="https://twitter.com/occiandiaali"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          Twitter
        </a>
        <a
          href="https://github.com/occiandiaali"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          Github
        </a>

        <a
          href="https://linkedin.com/occiandiaali"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          LinkedIn
        </a>
        <a
          href="https://i-am-occian.firebaseapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          Portfolio
        </a>
      </div>
    </div>
  );
}

export default Header;
