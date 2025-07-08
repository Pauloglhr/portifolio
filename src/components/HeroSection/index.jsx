import background from "@/assets/videos/background.mp4";
import styled from "styled-components";

const StyledDiv = styled.div`
  .video-container {
    position: relative; 
    height: 100vh; 
    width: 100%;
    overflow: hidden; 
    display: flex;
    border-radius: 20px;
  }

  #background-video {
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
    background-size: cover;
    
  }

  .content-overlay {
    padding: 0 80px;
    position: absolute;
    top: 20%;
  }

  .content-overlay h1 {
    font-size: 8rem;
    margin-bottom: 0.5rem;
  }

  .content-overlay span {
    font-size: 3.5rem;
    font-weight: bolder;
  }
`;

const HeroSection = () => {
  return (
    <StyledDiv>
      <div class="video-container">
        <video autoPlay loop muted id="background-video">
          <source src={background} type="video/mp4" />
        </video>

        <div class="content-overlay">
          <h1>PAULO TORRES</h1>
          <span>WEB DEVELOPER</span>
        </div>
      </div>
    </StyledDiv>
  );
};

export default HeroSection;
