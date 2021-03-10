import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
`;

const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
`;

const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) => (props.index === 2 ? '#f00' : props.index === 1 ? '#0f0' : '#ddd')};
  border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

// interface CooldownSliderProps {
//   duration: number;
//   cooldown: number;
//   fightLength: number;
// }

function CooldownSlider({ duration, cooldown, fightLength }) {
  const [usageCount, setUsageCount] = useState(1);
  const addUse = () => {
    setUsageCount(usageCount + 1);
  };
  console.log(usageCount);
  return (
    <div>
      {/* <input type="range"></input>
      <br /> */}
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[0, 50, 100]}
        ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={10}
      />
      <StyledSlider defaultValue={[50, 75]} renderTrack={Track} renderThumb={Thumb} />;
      {/* <button onClick={addUse}>+ add</button> */}
    </div>
  );
}

export default CooldownSlider;
