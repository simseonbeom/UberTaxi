import logoLight from './assets/logo.mode=light.svg'
import logoDark from './assets/logo.mode=dark.svg'

// import './reset.css';
// import './style.css';


let mode = 'dark';
let color = 'white'


const app = document.querySelector('#app');
const themeButton = document.querySelector('.changeThemeButton');


function init(){

document.querySelector('#app').innerHTML = `
<div>
  <header id="header">
    <div class="inner">
      <div>
      <h1 class="logo">
        <img width="40px" height="40px" src="${mode === 'dark' ?logoDark: logoLight}" alt="우버택시 로고" />
      </h1>

      <ul class="gnb">
        <li>
          <button>기업 정보
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 9L11.9999 16L20 9" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </li>
        <li>
          <button>안전</button>
        </li>
        <li>
          <button>고객지원</button>
        </li>
        <li>
          <button>차량 서비스</button>
        </li>
        <li>
          <button>기사 지원
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 9L11.9999 16L20 9" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          </button>
        </li>
      </ul>
      </div>

      <div>
        <button class="lang">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9.5" stroke="${color}"/>
        <path d="M16.0169 12.8784L15.5487 13.054L16.0169 12.8784ZM15.7758 12.2354L15.3076 12.4109L15.7758 12.2354ZM17.9836 4.54937L13.1649 6.86594L13.5982 7.7672L18.4168 5.45063L17.9836 4.54937ZM13.1338 10.8759L14.5739 11.596L15.0211 10.7016L13.581 9.98149L13.1338 10.8759ZM15.3076 12.4109L15.5487 13.054L16.4851 12.7029L16.2439 12.0598L15.3076 12.4109ZM16.2239 18.2362L16.0025 20.4502L16.9975 20.5498L17.2189 18.3357L16.2239 18.2362ZM15.5487 13.054C16.1685 14.7067 16.3995 16.4799 16.2239 18.2362L17.2189 18.3357C17.4098 16.4267 17.1587 14.4993 16.4851 12.7029L15.5487 13.054ZM14.5739 11.596C14.9126 11.7653 15.1747 12.0564 15.3076 12.4109L16.2439 12.0598C16.0224 11.469 15.5856 10.9838 15.0211 10.7016L14.5739 11.596ZM12.346 7.53868C11.51 8.65329 11.8876 10.2528 13.1338 10.8759L13.581 9.98149C12.8929 9.63743 12.6844 8.75416 13.146 8.13868L12.346 7.53868ZM13.1649 6.86594C12.8419 7.02122 12.561 7.25197 12.346 7.53868L13.146 8.13868C13.2647 7.98036 13.4198 7.85294 13.5982 7.7672L13.1649 6.86594Z" fill="${color}"/>
        <path d="M3 9.5L6.04398 8.94655C7.01616 8.76979 7.75174 9.80946 7.2615 10.6674V10.6674C6.87923 11.3364 7.24153 12.1854 7.98902 12.3723L9.91812 12.8545C11.2101 13.1775 11.8314 14.6493 11.1618 15.8004L10.4238 17.0693C10.1528 17.5351 10.0813 18.0905 10.2254 18.6098L11 21.4004" stroke="${color}"/>
        </svg>

          KO-KR
        </button>

        <button class="sign">가입하기</button>
    
        <button class="hamburger">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7H20M4 17H20M4 12H20" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

    </div>
  </header>
  <section class="visual">
     <div class="inner">

        <div class="textContents">
          <h2>우리들의 택시, UT</h2>
          <p>UT로 안전하고 편안한 차량 서비스를 이용하세요.</p>
          <a href="#" class="download">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H13V5V10.8697L15.2526 8.33551C15.6195 7.92272 16.2516 7.88554 16.6644 8.25246C17.0771 8.61938 17.1143 9.25145 16.7474 9.66423L12.7474 14.1642C12.5576 14.3777 12.2856 14.4999 12 14.4999C11.7144 14.4999 11.4424 14.3777 11.2526 14.1642L7.25259 9.66423C6.88567 9.25145 6.92285 8.61938 7.33564 8.25246C7.74842 7.88554 8.38049 7.92272 8.74741 8.33551L11 10.8697V5V4H6Z" fill="${color}"/>
          </svg>
          앱 다운로드</a>
        </div>

     </div>
  </section>
</div>
`

}

init();

let clicked = false;

themeButton.addEventListener('click',()=>{
  
  

 
  if(!clicked){
    mode = 'light'
    color = 'black'
    app?.classList.remove('light-theme');
    app?.classList.add('dark-theme');  
  }else{
    mode = 'dark'
    color = 'white'
    app?.classList.remove('dark-theme');
    app?.classList.add('light-theme');
  }

  init();
  clicked = !clicked

  
  
  
})


