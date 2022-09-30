# 리액트란
- 페이스북사에서 만든 자바스크립트 라이브러리
- 페이스북에서 자체적으로 이용, 많은 웹 어플리케이션에 적용
- 유저 인터페이스를 만드는 라이브러리
- View 레이어를 담당
- React(웹 어플리케이션), React Native(모바일 어플리케이션), React Electron(데스크탑 어플리케이션)
- 사용자 UI를 만들기 위한 자바스크립트 라이브러리
- 앵귤러(프레임워크), 뷰(프레임워크와 라이브러리 중간단계)

# 리액트의 특징
- 리액트는 컴포넌트로 이루어진 UI 라이브러리
- 컴포넌트는 한 가지의 기능을 수행하는 UI단위
- 리액트 어플리케이션은 꼭 하나이상의 컴포넌트로 이루어져 있음
- 최상위 컴포넌트는 Root 
- Vritual DOM Tree를 가지고 있음 

# 컴포넌트 
- 리액트에서 레고 조각처럼 조합하여 프로그래밍 할 수 있도록 만든 모듈단위
- 함수형과 클래스형
- state : 데이터의 상태를 나타내는 객체
- render : 사용자에게 어떻게 표기될 것인지를 나타내는 함수
> state 객체의 값이 변경되면 render 함수가 자동적으로 호출되면서 변경된 state의 값이 화면에 나타낼 수 있도록 render 함수가 계속 반복적으로 호출
# 리액트를 위한 툴
1. 터미널

2. 노드
3. 크롬브라우저 -> React Developer Tools
    - 개발자 모드에서 리액트 트리 눈으로 확인 가능
4. 비주얼스튜디오 코드 -> Reactjs code snippets
    - 리액트 문법 자동완성등을 지원
# 리액트 시작
1. cdn을 이용하는 방법 
    >cdn 이란 Content Delivery Network 의 약자로 특정 서버에 집중 되지않고 
    컨텐츠를 자동으로 가장 가까운 서버에서 다운받도록 하는 기술
    - react cdn
    ```html
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    ```
    bable cdn
    - bable : 과거 브라우저에 맞도록 스크립트를 변경
    ```html 
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    ```

 
 2. create react-app 

    ### yran 설치
         npm i -g yarn
    ### test 프로젝트 생성
        yarn create react-app test
    ### 프로젝트 경로 진입
        cd yarn
    ### 프로젝트 실행
        yarn start
        


# 프로젝트 구조
- .gitignore
    - 명시되어 있는 파일들은 git에 저장되지 않음
- package.json
    - npm에서 버전을 관리할 때 프로젝트에서 외부적으로 쓰고 있는 라이브러이의 버전들과 스크립트들이 명시 
- README.md 
    - 프로젝트에 대해 설명하는 파일
- public 디렉토리
    - 사용자에게 배포할 때 외부적으로 보여지는 리소스들을 포함
- src 디렉토리
    - 리액트 소스코드를 포함 

REACT 설치시 설치되는 숨겨진 툴
- BABEL 
     - 자바스크립트의 트랜스컴파일러
     - type script, JSX등 순수 자바스크립트가 아닌 문법을 브라우저가 이해할 수 있도록 변환해주는 역할
- Webpack
    - 소스코드나 리소스 이미지들을 한 번에 묶어서 번들 단위로 사용자에게 제공할 수 있도록 도와주는 툴
    - 자바스크립트 코드를 줄여주고 긴 변수나 함수의 이름을 해커들이 알아볼 수 없도록 변경해주는 역할

- ESLint 
    - 코드에 잘못된 점이 있으면 경고를 표시해주는 툴
- Jest  
    - 코드를 작성할 때 유닛 테스트를 할 수 있도록 해주는 툴
- PostCSS 
    - css 전처리기 중 하나 
    - 정해진 프레임워크에 따라 css를 작성하면 그 css를 브라우저가 이해할 수 있는 css코드로 변환 
    - scss, less와 비슷하지만 PostCss는 다양한 플로그인이 있어서 확정성이 좋음 

# JSX 
- 페이스북에서 개발한 확장 구문
- UI를 화면에 나타내는 파일을 만들어가는 것(실제는 자바스크립트)
- 태그는 꼭 닫혀야함 
- 두개 이상의 태그는 하나의 태그로 감싸져야 함 
    - 단순히 div로 감싸주면 됨 
    - div를 사용하고 싶지 않다면 <>(프래그먼트)를 사용하여 이름없는 태그를 사용하면 됨
- 주석은 {/*   */} 표현
- css 속성은 카멜케이스 표기법  

# 비구조화 할당
- 객체 안에 있는 값을 추출해서 변수 혹은 상우세 저장 

```
const student = {'apple':'김사과','banana':'오렌지','orange':'반하나'};

const { apple, banana, orange } = student;
```

# defaultProps 
- 컴포넌트에 props를 지정하지 않았을 때 기본겂을 설정
```
컴포넌트명.defaultProps = {
    설정할 프로퍼티
    ....
}
```

# props.children
- 컴포넌트 태그 사이에 넣은 값을 조회 
```
function 컴포넌트명({ children }){
    return(
        <div>
            { children }
        </div>
    )
}
```

# 삼항연산자를 사용하여 조건 랜더링  
1. 조건식이 true인 경우와 false인 경우를 모두 표현
```
{ 조건식 ? true인 경우 : false인 경우}
```

2. 조건식이 true인 경우만 표현
```
{조건식 && true인 경우}
```

# useState 함수
- 컴포넌트에서 동작한 값의 상태(state)를 다루는 Hook함수
```
const [현재상태변수, 설정함수] = useState(초기값) 
// 예
const [number, setNumber] = useState(초기값); // 배열 비구조화 할당

// 배열 비구조화 할당을 하지 않는다면 
const numberState = useState(0);
const number = numberState[0];
const setNumber = numberState[1]
```
- Hook함수
    - 상태관리를 다루던 클래스를 좀 더 쉽게 다룰수 있도록 만들어진 함수 

# spread 
- 객체 또는 배열을 펼쳐 저장할 수 있음

```
const dog = {
    name = '버튼'
};
const cuteDog = {
    ...dog,
    age: 10
}
const whiteCuteDog = {
    ...cuteDog,
    color: 'white'
}
```

# 리액트 상태에서 객체를 수정하기
```
setUsers({
    userid: '',
    name: ''
})
```
- 리액트에서는 상태값의 불변성을 지켜줘야 함
- 리액트 컴포넌트에서상태가 업데이트 되었음을 감지할 수 있음
- 리액트에서 객체를 업데이트 할 때는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서 새 객체에 변화를 줘야 함

# useRef 함수
- 특정 엘리먼트에 접근하거나 스크롤바 위치를 설정할 때 
- 외부 라이브러리를 사용할 때
- useRef() 객체를 생성 -> 가상 DOM에 ref 값을 설정
    - current : 가상 DOM을 가르킴

# 배열 
```
// 객체
const member = {
    idx: 1, 
    userid: 'ronaldo',
    name: '호날두'
}

// 배열
const member = [
    {
    idx: 1, 
    userid: 'ronaldo',
    name: '호날두'
    },
    {
    idx: 2, 
    userid: 'messi',
    name: '메시'
    },
    {
    idx: 3, 
    userid: 'son',
    name: '손흥민'
    },
]
```
