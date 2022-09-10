import "./home.css";

export default function Home() {
  return (
    <>
      <section>
        <div className="container1">
          <div className="home">
            <div className="left">
              <h1 className="fw-bold mt-5 mb-3">
                Presnting You The Famous Footballs of Pakistan
              </h1>
              <p className="fw-boldr ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                atque optio minima, quisquam asperiores harum consequatur modi
                laudantium aliquam ut reprehenderit veniam, quia assumenda eos
                velit neque dolores alias quis. Minus asperiores corporis
                distinctio odio. Totam qui mollitia neque, amet enim laborum
                harum, accusantium cupiditate quod libero, quidem vero suscipit!
              </p>
              <div className="buttons mt-4 ">
                <button className="btn btn-info py-3 px-5 text-white fw-bold">
                  Sign Up
                </button>
                <button className="btn btn-info py-3 px-5 ms-5 text-white fw-bold">
                  Sign In
                </button>
              </div>
            </div>
            <div className="right">
              <img
                className="img-fluid w-75 rounded-circle"
                src="https://s1.dmcdn.net/v/6y-F61LUvSZ2T3Ey4/x1080"
                alt="footballs insialkot"
              />
            </div>
          </div>
          <div className="bottom">
            <p className="fw-bolder fs-5 ">
              A New NFTs <span className="text-info"> Powernig Pakistan </span>
              will be Available in 20:34:45
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
