import logo from './logo.svg';
import './App.css';

// 동일한 파일에서 두 개 이상의 컴포넌트를 내보냈을 때는
// 그 각각의 값을 가져와야 사용할 수 있다
import MyComponent from './components/MyComponent';
import LoginComp from './components/LoginComponent';
import TextComp from './components/TextComponent';
import OtherComp from './components/OtherComponent';
import StateComp from './components/StateComp';

function App() {
  return (
    <div className="App">
      <h1>리액트 프로젝트를 수정해서 사용합니다</h1>
      <MyComponent/>

      {/* 만든 컴포넌트에 속성=값 의 형태를 통해 props 전달 */}
      <LoginComp login={false} name="홍길동"/>

      {/* 만든 컴포넌트 사이에 글자를 적어서 전달하면 그 글자는 props의 children값으로 전달된다 */}
      {/* props값을 전달하지 않으면 undefined로 들어간다 */}
      <LoginComp login={true}>내용 전달</LoginComp>

      {/* 새로운 TextComp를 만들어서 children에 들어간 값을 h1태그에, name의 값을 p태그에 넣어서 name 님을 출력 */}
      <TextComp name="홍길동">반갑습니다.</TextComp>
      <TextComp name="성춘향">환영합니다.</TextComp>

      <OtherComp>123</OtherComp>

      {/* state를 가진 컴포넌트 */}
      <StateComp/>
    </div>
  );
}

// import를 이용하여 다른 파일에서 값을 가져올때
// export를 이용해서 내보내는 값
export default App;