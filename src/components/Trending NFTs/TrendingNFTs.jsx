import "./trendingNFTs.css";

function TrendingNFTs() {
  return (
    <section className="trend">
      <h1 className="h1-trend text-center">TrendingNFTs</h1>
      <div className="container1">
        <div className="trendingNfts mt-5">
          <div class="swiper-slide card">
            <div class="card-content">
              <div class="image">
                <img src="images/img1.jpg" alt="" />
              </div>

              <div class="media-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </div>

              <div class="name-profession">
                <span class="name">Someone Name</span>
                <span class="profession">Web Developer</span>
              </div>

              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>

              <div class="button">
                <button class="aboutMe">About Me</button>
                <button class="hireMe">Hire Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingNFTs;
