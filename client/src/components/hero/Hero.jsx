import { Link } from "react-router-dom";
import AnimatedTextWord from "../animations/AnimatedTextWord";
import Tags from "../tags/Tags";

const Hero = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <AnimatedTextWord text='StudySyncer.' />
          <hr></hr>
          <br></br>
          <h3 className='text-xl font-bold'>
            Where Your Success Finds its Rhythm!
          </h3>
          <p className='py-6'>
            Say goodbye to academic chaos! 🎓✨ StudySyncer, your personal
            orchestrator, harmonizes quiz victories, assignment triumphs, and
            every Eureka moment into a symphony of accomplishments. 🎵🏆
            Consider StudySyncer your academic DJ, spinning tracks that resonate
            with your victories! 🚀💻 <Tags text='StudySmart' />{" "}
            <Tags text='AchieveMore' />
          </p>
          <Link to={"/signup"}>
            <button className='btn btn-primary'>Sign-up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
