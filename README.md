## 디렉토리 구조

📦src

#### app디렉토리

전역 파일 이부분에서 api.jsx로 api인스턴스를 생성, 그리고 App.jsx로 라우팅 관리
┣ 📂app
┃ ┣ 📜App.css
┃ ┣ 📜App.jsx
┃ ┣ 📜api.jsx
┃ ┣ 📜index.css
┃ ┗ 📜main.jsx

#### assets 파일은 추후 리팩토링 예정

┣ 📂assets
┃ ┣ 📂font
┃ ┣ 📂icons
┃ ┣ 📂images

#### components 디렉토리에서는 전역에서 사용되는 ui 컴포넌트를 관리

┣ 📂components
┃ ┣ 📂button
┃ ┃ ┗ 📜Button.jsx
┃ ┣ 📂common
┃ ┃ ┣ 📜CommunityWritePost.jsx
┃ ┃ ┣ 📜Footer.jsx
┃ ┃ ┣ 📜Header.jsx
┃ ┃ ┣ 📜Loading.jsx
┃ ┃ ┣ 📜Logo.jsx
┃ ┃ ┣ 📜MediaWrapper.jsx
┃ ┃ ┣ 📜MobileManageButton.jsx
┃ ┃ ┣ 📜MobileWriteButton.jsx
┃ ┃ ┣ 📜PageHeader.jsx
┃ ┃ ┣ 📜Scroll.jsx
┃ ┃ ┗ 📜SidePageHeader.jsx
┃ ┣ 📂container
┃ ┃ ┗ 📜Color.jsx
┃ ┣ 📂input
┃ ┗ 📂layout
┃ ┃ ┣ 📜Footer.jsx
┃ ┃ ┣ 📜Header.jsx
┃ ┃ ┗ 📜MainLayOut.jsx

#### hooks 디렉토리에서는 전역에서 사용되는 custom hook 컴포넌트를 관리

┣ 📂hooks

#### (중요)pages 디렉토리에서는 각각 아래와 같이 이루어져 있음

#### [페이지명]/[ui]/해당 페이지의 ui 컴포넌트들

    			#### /[api]/해당 페이지의 api들
    			#### /Page.jsx - 해당 페이지 파일(실질적 라우팅되는 파일)

┣ 📂pages
┃ ┣ 📂character-vote
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┗ 📜characterAPI.jsx
┃ ┃ ┣ 📂ui
┃ ┃ ┗ 📜CharacterVotePage.jsx
┃ ┣ 📂community
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┗ 📜communityPostsPreviewAPI.jsx
┃ ┃ ┣ 📂ui
┃ ┃ ┃ ┣ 📜BlogPreview.jsx
┃ ┃ ┃ ┣ 📜CommunityHomePosts.jsx
┃ ┃ ┃ ┣ 📜CommunitySelectBox.jsx
┃ ┃ ┃ ┣ 📜DummyBlogPosts.jsx
┃ ┃ ┃ ┣ 📜DummyHotPosts.jsx
┃ ┃ ┃ ┣ 📜DummyProjectPosts.jsx
┃ ┃ ┃ ┣ 📜DummyQuestionPosts.jsx
┃ ┃ ┃ ┣ 📜HotPostPreview.jsx
┃ ┃ ┃ ┣ 📜ProjectPreview.jsx
┃ ┃ ┃ ┗ 📜QuestionPreview.jsx
┃ ┃ ┗ 📜CommunityPage.jsx
┃ ┣ 📂community-detail
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┗ 📜communityPostAPI.jsx
┃ ┃ ┣ 📂ui
┃ ┃ ┃ ┣ 📜Comment.jsx
┃ ┃ ┃ ┣ 📜CommentContainer.jsx
┃ ┃ ┃ ┣ 📜DummyComments.jsx
┃ ┃ ┃ ┣ 📜ExtraPostPreview.jsx
┃ ┃ ┃ ┗ 📜PostWriterInfo.jsx
┃ ┃ ┗ 📜CommunityDetailPage.jsx
┃ ┣ 📂community-write
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┗ 📜communityWriteAPI.jsx
┃ ┃ ┣ 📂ui
┃ ┃ ┃ ┣ 📜Hashtag.jsx
┃ ┃ ┃ ┗ 📜WriteSelectBox.jsx
┃ ┃ ┗ 📜CommunityWritePage.jsx
┃ ┣ 📂login
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┣ 📜commentAPI.jsx
┃ ┃ ┃ ┣ 📜nickNameAPI.jsx
┃ ┃ ┃ ┗ 📜userIdAPI.jsx
┃ ┃ ┣ 📂ui
┃ ┃ ┣ 📜LoginPage.jsx
┃ ┃ ┗ 📜LoginRedirectPage.jsx
┃ ┣ 📂main
┃ ┃ ┣ 📂api
┃ ┃ ┣ 📂ui
┃ ┃ ┃ ┗ 📜MainSelectBox.jsx
┃ ┃ ┗ 📜MainPage.jsx
┃ ┣ 📂mypage
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┣ 📜myStudyListAPI.jsx
┃ ┃ ┃ ┣ 📜postAPI.jsx
┃ ┃ ┃ ┣ 📜studyInfoAPI.jsx
┃ ┃ ┃ ┗ 📜userInfoAPI.jsx
┃ ┃ ┣ 📂ui
┃ ┃ ┃ ┣ 📜Calendar.jsx
┃ ┃ ┃ ┣ 📜MyPost.jsx
┃ ┃ ┃ ┣ 📜StudyList.jsx
┃ ┃ ┃ ┣ 📜Task.jsx
┃ ┃ ┃ ┗ 📜UserInfo.jsx
┃ ┃ ┗ 📜MyPage.jsx
┃ ┣ 📂study
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┗ 📜studyPostsPreviewAPI.jsx
┃ ┃ ┣ 📂ui
┃ ┃ ┃ ┣ 📜DummyStudyPosts.jsx
┃ ┃ ┃ ┗ 📜StudyPreview.jsx
┃ ┃ ┗ 📜StudyMainPage.jsx
┃ ┣ 📂study-create
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┗ 📜studyCreateAPI.jsx
┃ ┃ ┣ 📂ui
┃ ┃ ┃ ┣ 📜StudyCreateCalendar.jsx
┃ ┃ ┃ ┣ 📜StudyCreateLinkEmbed.jsx
┃ ┃ ┃ ┣ 📜StudyCreateRecruitCalendar.jsx
┃ ┃ ┃ ┣ 📜StudyCreateSelectBox.jsx
┃ ┃ ┃ ┣ 📜StudyData.jsx
┃ ┃ ┃ ┣ 📜StudyDetail.jsx
┃ ┃ ┃ ┣ 📜StudyInfo.jsx
┃ ┃ ┃ ┗ 📜StudyPeriod.jsx
┃ ┃ ┗ 📜StudyCreatePage.jsx
┃ ┣ 📂study-detail
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┣ 📜studyDetailAPI.jsx
┃ ┃ ┃ ┣ 📜studyInteraction.jsx
┃ ┃ ┃ ┗ 📜studyRecruitAPI.jsx
┃ ┃ ┣ 📂ui
┃ ┃ ┃ ┣ 📜DummyStudyComments.jsx
┃ ┃ ┃ ┣ 📜ReportModal.jsx
┃ ┃ ┃ ┣ 📜StudyComment.jsx
┃ ┃ ┃ ┣ 📜StudyCommentContainer.jsx
┃ ┃ ┃ ┣ 📜StudyDetailHeader.jsx
┃ ┃ ┃ ┣ 📜StudyLinkEmbed.jsx
┃ ┃ ┃ ┗ 📜StudyPostWriterInfo.jsx
┃ ┃ ┗ 📜StudyDetailPage.jsx
┃ ┣ 📂study-manage
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┗ 📜studyManageDateAPI.jsx
┃ ┃ ┣ 📂ui
┃ ┃ ┃ ┣ 📜LinkData.jsx
┃ ┃ ┃ ┣ 📜LinkEmbed.jsx
┃ ┃ ┃ ┣ 📜ManageDetailed.jsx
┃ ┃ ┃ ┣ 📜ManageInfo.jsx
┃ ┃ ┃ ┣ 📜StudyManageCalendar.jsx
┃ ┃ ┃ ┣ 📜StudyManageDetail.jsx
┃ ┃ ┃ ┣ 📜StudyManagePeriod.jsx
┃ ┃ ┃ ┗ 📜StudyManageRecruitCalendar.jsx
┃ ┃ ┗ 📜StudyManagePage.jsx
┃ ┣ 📂study-manage-week
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┣ 📜TaskAPI.jsx
┃ ┃ ┃ ┣ 📜assignmentsAPI.jsx
┃ ┃ ┃ ┣ 📜descriptionAPI.jsx
┃ ┃ ┃ ┣ 📜period.jsx
┃ ┃ ┃ ┗ 📜weekcountAPI.jsx
┃ ┃ ┣ 📂ui
┃ ┃ ┃ ┣ 📜ManageWeekBasics.jsx
┃ ┃ ┃ ┣ 📜ManageWeekDetailed.jsx
┃ ┃ ┃ ┣ 📜ManageWeekWrithePost.jsx
┃ ┃ ┃ ┣ 📜StudyManageWeekCalendar.jsx
┃ ┃ ┃ ┣ 📜StudyManageWeekRecruitCalendar.jsx
┃ ┃ ┃ ┗ 📜StudyMangeWeekPeriod.jsx
┃ ┃ ┗ 📜StudyManageWeekPage.jsx
┃ ┣ 📂study-notice
┃ ┃ ┣ 📂api
┃ ┃ ┣ 📂ui
┃ ┃ ┗ 📜StudyNoticePage.jsx
┃ ┣ 📂study-notice-write
┃ ┃ ┣ 📂api
┃ ┃ ┣ 📂ui
┃ ┃ ┗ 📜StudyNoticeWritePage.jsx
┃ ┣ 📂study-overview
┃ ┃ ┣ 📂api
┃ ┃ ┣ 📂ui
┃ ┃ ┗ 📜StudyOverviewPage.jsx
┃ ┣ 📂study-room
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┣ 📜studyManageInfoAPI.jsx
┃ ┃ ┃ ┣ 📜studyNoticeAPI.jsx
┃ ┃ ┃ ┣ 📜studyNoticeRegisterAPI.jsx
┃ ┃ ┃ ┣ 📜studyRoomPostDetailAPI.jsx
┃ ┃ ┃ ┣ 📜studyRoomPostPreviewAPI.jsx
┃ ┃ ┃ ┣ 📜studyRoomWriteAPI.jsx
┃ ┃ ┃ ┣ 📜weekStudyInfoAPI.jsx
┃ ┃ ┃ ┗ 📜weekTaskProgressAPI.jsx
┃ ┃ ┣ 📂ui
┃ ┃ ┃ ┣ 📜CheckTooltip.jsx
┃ ┃ ┃ ┣ 📜FirstNoticeSquare.jsx
┃ ┃ ┃ ┣ 📜NoticeSquare.jsx
┃ ┃ ┃ ┣ 📜Notices.jsx
┃ ┃ ┃ ┣ 📜StudyPostList.jsx
┃ ┃ ┃ ┣ 📜StudyRecruitment.jsx
┃ ┃ ┃ ┣ 📜StudyRoomWritePost.jsx
┃ ┃ ┃ ┣ 📜StudySummary.jsx
┃ ┃ ┃ ┗ 📜WeekCurriculum.jsx
┃ ┃ ┣ 📜StudyRoomPage.jsx
┃ ┃ ┗ 📜StudyRoomPostPage.jsx
┃ ┣ 📂study-room-write
┃ ┃ ┣ 📂api
┃ ┃ ┣ 📂ui
┃ ┃ ┗ 📜StudyRoomWritePage.jsx
┃ ┣ 📂study-trouble
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┗ 📜troubleShootingInfoAPI.jsx
┃ ┃ ┣ 📂ui
┃ ┃ ┃ ┣ 📜Comment.jsx
┃ ┃ ┃ ┣ 📜CommentContainer.jsx
┃ ┃ ┃ ┣ 📜DummyComments.jsx
┃ ┃ ┃ ┣ 📜ItemList.jsx
┃ ┃ ┃ ┣ 📜PostWriterInfo.jsx
┃ ┃ ┃ ┣ 📜ReportModal.jsx
┃ ┃ ┃ ┗ 📜TroubleshootingWritePost.jsx
┃ ┃ ┗ 📜StudyTroublePage.jsx
┃ ┣ 📂study-trouble-detail
┃ ┃ ┣ 📂api
┃ ┃ ┣ 📂ui
┃ ┃ ┗ 📜StudyTroubleDetailPage.jsx
┃ ┗ 📂study-trouble-write
┃ ┃ ┣ 📂api
┃ ┃ ┣ 📂ui
┃ ┃ ┗ 📜StudyTroubleWritePage.jsx

#### redux에서는 전역에서 사용되는 redux 상태를 관리 향후 recoil 등으로 개선될 수 있기에 별도로 디렉토리를 구성

┣ 📂redux
┃ ┣ 📂slice
┃ ┃ ┣ 📂community
┃ ┃ ┃ ┣ 📜communitySlice.jsx
┃ ┃ ┃ ┗ 📜communityWriteSlice.jsx
┃ ┃ ┣ 📂posts
┃ ┃ ┃ ┣ 📜commentSlice.jsx
┃ ┃ ┃ ┗ 📜postSlice.jsx
┃ ┃ ┗ 📂study
┃ ┃ ┃ ┗ 📜studyCreateSlice.jsx
┃ ┗ 📂store
┃ ┃ ┗ 📜store.jsx

#### utils는 전역에서 사용되며, api와 무관하고, 훅으로 작동하는 것이 아닌 함수기능을 포함

┗ 📂utils
┃ ┗ 📜ScrollToTop.js

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

### Eslint 규칙 (.eslintrc.cjs)

```
module.exports = {
    // 프로젝트의 루트 디렉토리임을 명시합니다.
    root: true,

    // 코드가 실행될 환경을 정의합니다. 여기서는 브라우저와 ES2020 환경을 사용합니다.
    env: {
        browser: true, // 브라우저 환경
        es2020: true   // ECMAScript 2020 문법 지원
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
        sourceType: 'module'   // ES 모듈 사용
    },

    // React 버전 설정을 명시적으로 지정합니다.
    settings: {
        react: { version: '18.2' } // React 18.2 버전을 사용
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

### 사용 라이브러리
