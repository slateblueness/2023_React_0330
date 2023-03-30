import { Component } from "react";

class StateComp extends Component{
    // state: 컴포넌트 내부에서 바뀔 수 있는 값
    constructor(props){
        // constructor를 사용하면 props을 따로 연결
        super(props);
        // this.state 안에 객체 형태로 값을 작성할 수 있다
        this.state = {
            number: 0,
            name: "홍길동"
        }
    }

    // 화면에 출력되는 html
    // 가상 돔을 화면에 출력하기 위해 render()를 호출
    // 호출시 render 안에서 사용한 변수는 초기화된다
    // 초기화되는 것을 막으려면 전역변수 또는 this.state 사용
    // 업데이트마다 화면에 표시되는 값: state, props
    render(){
        // this.state의 값을 비구조화 할당을 통해 사용
        const {number, name} = this.state;
        let count = 0;

        // return의 html 안에서 직접 불러와서 사용
        return(
            <div>
                <h2>{number}</h2>
                <h3>state의 값 {number}, 변수값 {count}</h3>
                <h3>{this.state.number}</h3>

                <button // 리액트에서는 화살표 함수를 사용
                    onClick = { () => {
                        this.setState({number: number+1})}}>
                        +1
                </button>

                <button
                    onClick = { () => {
                        count++;
                        console.log(count);}}>
                        count +1
                </button>

                {/* 버튼을 눌렀을 때 number값이 1씩 감소(-1) */}
                <button
                    onClick={() => {
                        // 하나의 이벤트에서 setState를 여러 번 부를 경우 원치 않는 값으로 나올 수 있다
                        // ex) -1을 두 번 불러서 -2가 되길 바랐지만 한 번만 되는 경우
                        // this.setState({number: number-1});
                        // this.setState({number: number-1});

                        // 이전에 있던 state값을 prevState로 들고 와서 수정
                        // 값이 바뀐 후에 들고 오는 것이기 때문에 동기적으로 값이 수정
                        // () => () 의 형태로 사용하는 이유: return으로 객체를 전달하기 위함
                        // (prevState) => ({state 속성: 값})
                        this.setState((prevState) => ({number: prevState.number-1}))
                    }}
                >
                    -1
                </button>

                {/* 버튼을 눌렀을 때 number값이 0으로 변화 */}
                <button
                    onClick={() => {this.setState({number: 0})}}
                >
                    0
                </button>
            </div>
        );
    }
}
export default StateComp;