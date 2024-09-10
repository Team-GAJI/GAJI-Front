### 프로젝트 디렉토리 구조 요약

1. **`app` 디렉토리**: 전역 파일 관리 및 API 인스턴스 생성.

    - `api.jsx`: API 인스턴스 생성.
    - `App.jsx`: 라우팅 관리.

2. **`assets` 디렉토리**: 폰트, 아이콘, 이미지 파일 저장 (리팩토링 예정).

3. **`components` 디렉토리**: 전역 UI 컴포넌트 관리.

    - 버튼, 레이아웃, 공통 컴포넌트, 입력 등 다양한 UI 요소 포함.

4. **`hooks` 디렉토리**: 전역에서 사용되는 커스텀 훅 관리.

5. **`pages` 디렉토리**: 페이지별로 API, UI 컴포넌트 및 라우팅 파일을 관리.

    - 예: `character-vote`, `community`, `study` 등.

6. **`redux` 디렉토리**: Redux 상태 관리 (추후 Recoil 등으로 개선 가능).

    - `slice` 폴더: Redux 슬라이스 파일.
    - `store` 폴더: Redux 스토어 파일.

7. **`utils` 디렉토리**: 전역에서 사용되는 유틸리티 함수들 포함.

---

### Prettier 규칙 (.prettierrc)

```json
{
    "tabWidth": 4, // 들여쓰기에 사용할 공백의 수를 4칸으로 설정
    "trailingComma": "all", // 가능한 모든 곳에 후행 쉼표를 추가
    "singleQuote": true, // 문자열에 작은 따옴표 사용
    "printWidth": 120, // 한 줄의 최대 길이를 120자로 제한
    "useTabs": false, // 들여쓰기에 탭 대신 공백 사용
    "endOfLine": "auto" // 파일의 줄바꿈 방식을 자동으로 처리
}
```

-   **탭 너비**: 4칸.
-   **후행 쉼표**: 모든 곳에 추가.
-   **작은 따옴표** 사용.
-   **최대 줄 길이**: 120자.
-   **탭 대신 공백 사용**.
-   **줄바꿈 방식**: 자동.

---

### Eslint 규칙 (.eslintrc.cjs)

```js
module.exports = {
    // 프로젝트의 루트 디렉토리임을 명시합니다.
    root: true,

    // 코드가 실행될 환경을 정의합니다. 여기서는 브라우저와 ES2020 환경을 사용합니다.
    env: {
        browser: true, // 브라우저 환경
        es2020: true, // ECMAScript 2020 문법 지원
    },

    // ESLint 설정을 확장합니다. 여러 플러그인과 규칙을 적용하여 코드 품질을 유지합니다.
    extends: [
        'plugin:react/jsx-runtime', // React의 JSX 구문을 위한 규칙 추가
        'plugin:react-hooks/recommended', // React Hooks 관련 권장 규칙 적용
        'eslint:recommended', // ESLint 기본 권장 규칙 적용
        'plugin:react/recommended', // React 관련 권장 규칙 적용
        'plugin:prettier/recommended', // Prettier 관련 권장 규칙 적용
    ],

    // ESLint가 무시할 파일 및 디렉토리를 지정합니다.
    ignorePatterns: ['dist', '.eslintrc.cjs'], // 빌드 결과물인 'dist' 폴더와 '.eslintrc.cjs' 파일 무시

    // 파서 옵션을 설정합니다. 최신 ECMAScript 문법을 사용할 수 있도록 설정합니다.
    parserOptions: {
        ecmaVersion: 'latest', // 최신 ECMAScript 버전 사용
        sourceType: 'module', // ES 모듈 사용
    },

    // React 버전 설정을 명시적으로 지정합니다.
    settings: {
        react: { version: '18.2' }, // React 18.2 버전을 사용
    },

    // 사용할 ESLint 플러그인을 정의합니다.
    plugins: ['react-refresh'], // React Fast Refresh를 위한 플러그인 사용

    // ESLint 규칙을 설정합니다.
    rules: {
        // React prop-types 사용을 비활성화합니다.
        'react/prop-types': 'off', // PropTypes 사용 강제 안함

        // React 17 이상에서는 'React'를 명시적으로 import하지 않아도 되므로 해당 규칙을 비활성화합니다.
        'react/react-in-jsx-scope': 'off', // JSX에서 React를 import 하지 않아도 오류 발생 안함

        // target="_blank" 사용 시 rel="noreferrer" 규칙을 강제하지 않도록 비활성화합니다.
        'react/jsx-no-target-blank': 'off', // target="_blank" 규칙 해제

        // 컴포넌트의 최상위 export만 Fast Refresh가 동작하도록 경고를 출력합니다.
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // React Fast Refresh를 위한 규칙
    },
};
```

-   **주요 규칙**:
    -   `prop-types` 비활성화.
    -   `react-in-jsx-scope` 비활성화.
    -   `target="_blank"` 규칙 비활성화.
    -   Fast Refresh 관련 규칙 적용.
