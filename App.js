function Card({ children, title }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card title="Sacha">
        <img
          className="avatar"
          src="https://avatars.githubusercontent.com/u/101428141?v=4"
          alt="Helu"
          width={91}
          height={91}
        />
      </Card>
      <Card title="About">
        <p>  🥰 Hi, I’m currently learning JavaScript and its framworks(Angular, React.JS and Node.JS) for a chance on Junior Web developer(Front-End) for my study! </p>
        <p><a href="https://github.com/c4hun">Github</a></p>
      </Card>
    </div>
  );
}