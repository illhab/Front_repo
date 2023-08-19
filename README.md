illhab-client

모듈 설치
패키지 관리자 npm을 사용하여 모듈을 설치합니다.

npm install
실행
npm run dev를 사용하여 실행합니다.

npm run dev
프로젝트 구성
pages: next.js에서 pages는 각 페이지는 파일 이름을 기반으로 경로를 연결합니다. 리액트 구성요소로 .js, .jsx, .ts, .tsx만 허용합니다.

styles: 페이지마다 style을 정의합니다.

layouts: 레이아웃 컴포넌트가 있습니다.

pubilc: fonts, images 등 assets 역할을 합니다.

routes: path 이름을 상수로 정의해 놓고 사용합니다.

containers: 각 페이지에서 보여줄 컨텐츠들.

components: 컴포넌트들 정의 폴더. (버튼, 팝업 등 ...)

states: zustand 를 사용하여 전역 상태 관리를 합니다.

hooks: 페이지 곳곳에서 사용되는 공통 훅.

libs: 튜닝해서 사용할 외부 라이브러리.

types: 타입 정의 폴더.

services: 그 외 서비스적인 모듈 정의 폴더.

...추가 중
