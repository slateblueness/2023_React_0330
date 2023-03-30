import { Component } from "react";

class LoginComp extends Component{
    render(){
        // 변수 작성
        // const login = false;
        // 클래스에서 props 값을 가져올 때는 this.props을 사용
        // this.props은 Component에서 상속받아 온 속성
        // this.props = {login: true, name: "홍길동"}; 값이 들어가 있는 상태
        // 구조화 할당: 배열이나 객체와 같이 값이 여러 개인 자료형의 안에 있는 요소를 꺼내어 각각의 변수에 따로 저장하는 방식

        const prop = this.props;
        // 객체의 속성 이름과 동일하게 적어서 할당 가능
        const {login, name, children} = this.props;
        console.log(prop.login);
        console.log(name);
        console.log(children);

        return(
            <div>
                <p>{children}</p>
                <h1>{name}</h1>
                {login === true ?(
                    <div>
                        <h1>로그인에 성공하였습니다.</h1>
                        <p>홍길동입니다.</p>
                    </div>
                ) :(
                    <div>
                        <h1>로그인이 필요합니다.</h1>
                        <p>리액트를 시작하였습니다.</p>
                    </div>
                )}
            </div>
        );
    }
}

export default LoginComp;

// 하나의 컴포넌트 작성 파일 안에 클래스형 또는 함수형 컴포넌트를 여러 개 작성할 수 있다.
// 그러나 export를 통해 내보내 주지 않으면 해당 작성 파일 외부에서는 사용할 수 없다.

// 여러 개의 내용을 export를 통해 내보낼 때
// export{};

// (주로 사용) 하나의 컴포넌트 작성 파일에서 하나의 컴포넌트를 내보낼 때
// export default 컴포넌트 이름;