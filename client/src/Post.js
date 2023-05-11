export default function Post() {
    return(
        <div className="post">
        <div className="texts">
          <p className="info">
            <a className="author">Jan Kammerath</a>
            <time>April 23, 2023</time>
          </p>
          <h2>Boomer Developers: 10 Lessons I Learned From Them</h2>
          <p className="summary">I am now in my late 30s and started to learn to code around the age of 12, in 1996. My professional career as a software engineer took off in the early 2000s when I started working for a local software company.</p>
        </div>
        <div className="image">
          <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*X-_AvCTBRFyTGXpcz_utlA.png" alt=""></img>
        </div>
      </div>
    )
}