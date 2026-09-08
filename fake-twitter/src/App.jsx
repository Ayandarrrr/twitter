function App() {
  const tweets = [
    {
      name: "PSL Updates",
      username: "@PSLUpdates",
      time: "2h",
      avatar: "/images/psl.jpg",
      text: "Big match energy! Who are you backing this weekend?",
      image: "/images/psl.jpg",
    },
    {
      name: "Faith Daily",
      username: "@FaithDaily",
      time: "4h",
      avatar: "/images/faith.jpg",
      text: "Keep trusting God even when you cannot see the whole picture.",
      image: "/images/faith.jpg",
    },
    {
      name: "Gospel Events SA",
      username: "@GospelEventsSA",
      time: "6h",
      avatar: "/images/gospel.jpg",
      text: "Gospel concert season is here! Who is ready for praise and worship?",
      image: "/images/gospel.jpg",
    },
    {
      name: "HLE Community",
      username: "@HLECommunity",
      time: "8h",
      avatar: "/images/hle.jpg",
      text: "Learning, growing and sharing knowledge with the community.",
      image: "/images/hle.jpg",
    },
  ];

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">X</div>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">Notifications</a>
          <a href="#">Messages</a>
          <a href="#">Bookmarks</a>
          <a href="#">Profile</a>
        </nav>

        <button className="post-button">Post</button>
      </aside>

      <main className="timeline">
        <header className="timeline-header">
          <h2>Home</h2>

          <div className="tabs">
            <button className="active">For You</button>
            <button>Following</button>
          </div>
        </header>

        <section className="tweet-box">
          <div className="tweet-box-top">
            <img
              className="avatar"
              src="/images/psl.jpg"
              alt="Your profile"
            />

            <input
              type="text"
              placeholder="What is happening?"
            />
          </div>

          <div className="tweet-box-bottom">
            <button className="post-button-small">Post</button>
          </div>
        </section>

        <section className="feed">
          {tweets.map((tweet, index) => (
            <article className="tweet" key={index}>
              <img
                className="avatar"
                src={tweet.avatar}
                alt={tweet.name}
              />

              <div className="tweet-content">
                <div className="tweet-user">
                  <strong>{tweet.name}</strong>
                  <span>{tweet.username}</span>
                  <span>·</span>
                  <span>{tweet.time}</span>
                </div>

                <p className="tweet-text">{tweet.text}</p>

                <img
                  className="tweet-image"
                  src={tweet.image}
                  alt={tweet.name}
                />

                <div className="tweet-actions">
                  <button>Reply</button>
                  <button>Repost</button>
                  <button>Like</button>
                  <button>Share</button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <aside className="right-sidebar">
        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>

        <section className="trends">
          <h2>What's happening</h2>

          <div className="trend">
            <span>Trending in South Africa</span>
            <strong>#PSL</strong>
            <small>12.4K posts</small>
          </div>

          <div className="trend">
            <span>Trending</span>
            <strong>#GospelConcert</strong>
            <small>8,542 posts</small>
          </div>

          <div className="trend">
            <span>Trending</span>
            <strong>#Christianity</strong>
            <small>6,821 posts</small>
          </div>

          <div className="trend">
            <span>Trending</span>
            <strong>#HLE</strong>
            <small>3,214 posts</small>
          </div>
        </section>
      </aside>
    </div>
  );
}

export default App;