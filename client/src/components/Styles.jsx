import styled from 'styled-components';

const Styles = styled.div`

.clockContainer {
  border: 3px #0272bd solid;
  height: 50px;
  width: 160px;
  text-align: center;
  border-radius: 25px;
  line-height: 50px;
  background: black;
}

.timeContainer {
  margin: auto;
  color: #0272bd;
  font-family: 'Orbitron', sans-serif;
}

.hoursAndMinutes {
  display: inline-block;
  font-size: 30px;

}

.seconds {
  display: inline-block;
}

`;

export default Styles;
