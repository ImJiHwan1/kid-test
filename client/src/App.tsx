import React from 'react';
import './App.css';

function App() {
  return (
  <div className="App" style={{width:"910px", height:"768px"}}>
    <div className="top">
      <div style={{ maxHeight:"50px",height:"50px", display:"block"}}>
        <header style={{left: "500px", margin: "0px 20px" }}>
            <span className="header-1">유아</span>
            <span className="header-2">발달</span>
            <span className="header-3">검사</span>
            <br />
            <br />
        </header>
      </div>
        <div style={{display: "flex",padding:"6px 15px",  width: "600px", justifyContent: "space-between"}}>
          <div className="subject">   
            <button><a>감각운동</a></button>
            <button><a>언어</a></button>
            <button><a>사회정서</a></button>
            <button><a>인지</a></button>
          </div>
          <div>
            <span>유아(13~18개월)</span> 
          </div>
          <div className="subject">
            <span><button><a>이름</a></button>  이윤아</span>
          </div>
        </div>
        <hr/>
      </div>
      
    <div style={{display: "flex",marginLeft:"50px"}}>
      <div style={{ width:"750px", height:"438px",display: "block" }} className="content">
        <img src="http://cache.think-u.co.kr/TUCOCONTENTS/WT/A1/CWT_A1_CO_15_00_W.JPG"></img>
        <img src="http://cache.think-u.co.kr/TUCOCONTENTS/WT/A1/CWT_A1_CO_16_00_W.JPG"></img>
        <img src="http://cache.think-u.co.kr/TUCOCONTENTS/WT/A1/CWT_A1_CO_17_00_W.JPG"></img>
      </div>
      <div>
          <table style={{width:"100px", background: "gainsboro", marginLeft: "45px"}}>
              <thead>
                  <tr>
                      <th>문항</th>
                  </tr>
              </thead>
              <tbody>
                  <tr style={{background: "orange"}}>
                      <td>1</td>
                  </tr>
                  <tr>
                      <td>2</td>
                  </tr>
                  <tr>
                      <td>3</td>
                  </tr>
                  <tr>
                      <td>4</td>
                  </tr>
                  <tr>
                      <td>5</td>
                  </tr>
                  <tr>
                      <td>6</td>
                  </tr>
                  <tr>
                      <td>7</td>
                  </tr>
                  <tr>
                      <td>8</td>
                  </tr>
                  <tr>
                      <td>9</td>
                  </tr>
                  <tr>
                      <td>10</td>
                  </tr>
                  <tr>
                      <td>11</td>
                  </tr>
                  <tr>
                      <td>12</td>
                  </tr>
                  <tr>
                      <td>13</td>
                  </tr>
                  <tr>
                      <td>14</td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
    <div className="bottom" style={{ display:"flex",width:"1060px", justifyContent:"space-between" }}>
          <a>이전 문항</a>
          <button>다음영역으로</button>
          <a>다음 문항</a>
    <div style={{ width:"100px" }}></div>
    </div>
  </div>
  );
}

export default App;
