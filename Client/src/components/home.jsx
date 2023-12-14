import "./home.css";
import dream11Team from "../assets/Images/dream11-team.png";
import dream11Review from "../assets/Images/dream11_review.png";
import dream11footer from "../assets/Images/dream11_footer.png";
import footerImage from "../assets/Images/footer_Image.png";
import HomeHeader from './homeHeader'

const home = () => {
  return (
    <>
    <HomeHeader/>
      <div className="px-4" style={{paddingTop: '50px'}}>
        <div>
          <img src={dream11Team} className="responsive-image" />
        </div>
        <div className="mt-0">
          <h3 className="text-center">
            Its easy to start playing on{" "}
            <span className="text-danger">
              <b>MERN11</b>
            </span>
          </h3>
          <h5 className="text-center mt-5">
            <span style={{ backgroundColor: "rgb(187, 230, 250)" }}>
              Play Fantasy Cricket on MERN11 and win big!
            </span>
          </h5>
          <p className="mt-5">
            Enter into the thrilling world of Fantasy sports, a strategy-based
            online sports game wherein you can create a virtual team of real
            players playing in real life matches. Create your team to win points
            based on all the players performance in a live game.Ready to
            challenge other sports fans? Watch this video to learn how to play
            on MERN11 and get started now. Compete with sports fans, make a
            perfect MERN11 team with the best combination of players as per
            your knowledge and skill and win big.
          </p>
          <div>
            <img src={dream11Review} className="responsive-image mt-3" />
          </div>
        </div>
      </div>
      <div className="text-white mt-5" style={{ backgroundColor: "#373737" }}>
        <div className="d-flex justify-content-around">
          <div className="">
            <img src={dream11footer} className="responsive-image" />
          </div>
          <div className="mt-5">
            <ul>
              <li>Download App</li>
              <li>How to Play</li>
              <li>Invite Friends</li>
              <li>Fantacy Lists</li>
              <li>Fantacy Football</li>
              <li>Fantacy Cricket App</li>
            </ul>
          </div>
          <div className="mt-3">
            <img src={footerImage} className="responsive-image" />
          </div>
        </div>
        <hr className="mx-5" />
        <div className="text-center mt-3">
          <h5>
            <b>CORPORATE OFFICE</b>
          </h5>
          <h6>
            ONE BKC, Tower A, 12th & 14th Floor, Unit 1201 & 1202 and 1401 &
            1402, Plot C-66, G Block, Bandra Kurla Complex, Bandra (East),
            Mumbai 400 051
          </h6>
        </div>
        <div className="d-flex justify-content-center text-bg-dark mt-5 py-2">
          <h5>Privacy Policy</h5>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <h5>Terms & Conditions</h5>
        </div>
      </div>
    </>
  );
};

export default home;
