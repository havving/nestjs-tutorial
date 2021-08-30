## NestJS

Nest(NestJS)는 효율적이고 확장 가능한 Node.js 서버 측 Application을 구축하기 위한 프레임워크이다.



Progressive JavaScript를 사용하고 TypeScript로 빌드되며, OOP(Object Oriented Progrmming), FP(Functional Programming) 및 FRP(Functional Reactive Programming) 요소를 사용할 수 있게 해준다.



내부적으로 Nest는 Express(기본값)와 같은 강력한 HTTP 서버 프레임워크를 사용하며, 선택적으로 Fastify를 사용하도록 구성할 수 있다. Nest는 이러한 공통 Node.js 프레임워크(Express/Fastify)위에 추상화 수준을 제공하지만, API를 개발자에게 직접 노출한다. 이를 통해 개발자는 기본 플랫폼에서 사용할 수 있는 수많은 타사 모듈을 자유롭게 사용할 수 있다.



Node(및 서버 측 JS)를 위한 훌륭한 라이브러리, 도우미 및 도구가 많이 존재하지만 이들 중 어느 것도 아키텍처의 주요 문제를 효과적으로 해결하지 못한다. Nest는 개발자와 팀이 고도로 테스트 가능하고 확장 가능하며, 느슨하게 결합되고 유지 관리가 쉬운 Application을 만들 수 있는, 즉시 사용 가능한 Application 아키텍처를 제공한다. 이 아키텍처는 Angular에서 영감을 받았다.



공식문서 : https://docs.nestjs.com/ 


<br/>

#### 1일차(8/29)

#### NestJS CLI로 시작하기

프로젝트를 시작할 때 Nest CLI를 이용하면 간단히 프로젝트를 생성할 수 있다.



아래의 명령어로 NestJS를 설치하고, 잘 설치되었는지 확인할 수 있다.

`$ npm i -g @nestjs/cli`

`$ nest --version`

<img src="img/nestjs-cli.png" height="300"></img>

<br/>

아래의 명령어는 새 프로젝트 디렉토리가 생성되고 초기 핵심 Nest 파일 및 지원 모듈로 디렉토리가 채워져 프로젝트의 기본 구조가 생성된다.

`$ nest new project-name`

<img src="img/nestjs-new.png" height="300"></img>

<br/>

##### NestJS 기본 구조

- eslintrc.js : 개발자가 특정한 규칙을 가지고 코드를 깔끔하게 작성할 수 있게 도와주는 라이브러리로, TypeScript를 쓰는 가이드 라인을 제시하고 문법에 오류가 발생하면 알려주는 역할 등을 수행한다.
- prettierrc : 주로 코드 형식을 맞추는 코드 포맷터 역할을 한다. (Indent 값 = 2 or 4, 작은따옴표 or 큰따옴표)
- nest-cli.json : nest 프로젝트를 위해 특정한 설정을 할 수 있는 json 파일
- tsconfig.json : TypeScript 컴파일 방식을 설정하는 json 파일
- tsconfig.build.json : tsconfig.json의 연장선상 파일이며, build를 할 때 필요한 설정들을 명시한다. "excludes"에서는 빌드할 때 필요없는 파일들을 명시한다.
- package.json
  - build : 운영환경을 위한 빌드
  - format : 린트에러 발생 시 수정 
  - start : App 시작
- src 폴더 : 비즈니스 로직이 들어가는 폴더 
  - main.ts : App을 생성하고 실행 
  - app.module.ts : App 모듈 정의


<img src="img/diagram.png" height="300"></img>
