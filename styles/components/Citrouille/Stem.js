import styled from "styled-components";

const Stem = styled.div`
  position: absolute;
  bottom: 180px;
  left: 100px;
  background: black;
  width: 80px;
  height: 60px;
  clip-path: polygon(
    45% 12%,
    68% 7%,
    100% 41%,
    96% 45%,
    59% 34%,
    5% 76%,
    0 71%,
    24% 36%
  );
`;

export default Stem;
