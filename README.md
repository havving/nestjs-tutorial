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

<br/>

#### 2일차(8/30)

##### Module

모듈은 @module {} 클래스로 이루어져있다. Nest가 Application 구조를 구성하는 데 사용하는 메타 데이터를 제공한다.

각 응용 프로그램에는 하나 이상의 모듈(루트 모듈)이 있다. 루트 모듈은 Nest가 사용하는 시작점이다.

모듈은 밀접하게 관련된 기능 집합으로 구성 요소를 구성하는 효과적인 방법이다.  ex) 유저 모듈, 주문 모듈, 채팅 모듈…

같은 기능에 해당하는 것들은 하나의 모듈 폴더안에 넣어 관리하며, 모듈은 기본적으로 싱글톤이므로 여러 모듈간에 쉽게 공급자의 동일한 인스턴스를 공유할 수 있다.

모듈 생성 명령어는 다음과 같다.

`nest g module [모듈명]`

<br/>

##### Controller

컨트롤러는 들어오는 요청을 처리하고 클라이언트에 응답을 반환한다. 인자로는 **경로**를 받는다.

컨트롤러 생성 명령어는 다음과 같다.

`nest g controller [컨트롤러명] --no-spec`

(--no-spec: 테스트를 위한 소스 코드를 생성하지 않음)

<br/>

##### Handler

핸들러는 @Get, @Post, @Patch, @Delete 등 컨트롤러 클래스 내의 단순한 메서드를 뜻한다.



CLI로 명령어 입력 시 Controlle가 생성되는 순서는 다음과 같다.

1. CLI가 boards 폴더 탐색
2. boards 폴더 안에 controller 파일 생성
3. boards 폴더 안에 module 파일 탐색
4. module 파일 안에 controller 주입

<br/>

##### Providers

대부분의 기본 Nest 클래스 - Service, Repository, Factory, Helper 등 -은 프로바이더로 취급될 수 있다. 프로바이더의 주요 아이디어는 **종속성으로 주입**할 수 있다는 것이다. 즉, 객체는 서로 다양한 관계를 만들 수 있으며 객체의 인스턴스를 **연결**하는 기능은 대부분 Nest 런타임 시스템에 위임될 수 있다.

Provider를 사용하기 위해서는 Nest에 등록해야 한다. module 파일의 providers 항목 안에 해당 모듈에서 사용하고자 하는 Provider를 넣어주면 된다.

<br/>

##### Service

서비스는 S/W 개발 내의 공통 개념으로, **@Injectable**로 모듈에 제공되며, 이 서비스 인스턴스는 Application 전체에서 사용될 수 있다.

서비스는 컨트롤러에서 데이터의 유효성 체크를 하거나 데이터베이스에 아이템을 생성하는 등의 작업을 하는 부분을 처리한다.

서비스 생성 명령어는 다음과 같다.

`nest g service [서비스명] --no-spec`

<br/>

##### DTO(Data Transfer Object)

계층간 데이터 교환을 위한 객체로, DB에서 데이터를 얻어 Service나 Controller 등으로 보낼 때 사용하는 객체를 의미한다.

DTO는 데이터가 네트워크를 통해 전송되는 방법을 정의하는 객체이다.

Interface나 Class를 이용해 정의될 수 있으며, 공식 문서에서는 클래스를 이용하는 것을 권장하고 있다.

클래스는 인터페이스와 달리 런타임에서 작동하기 때문에 파이프와 같은 기능을 사용할 때 더 유용하다.

DTO를 사용하는 이유는 다음과 같다.

- 데이터 유효성을 체크하는 데 효율적이다.

- 더 안정적인 코드로 만들어 주며, TypeScript의 타입으로도 사용된다.
