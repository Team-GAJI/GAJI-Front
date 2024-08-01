const initialState = {
  // 초기 상태 정의
};

const anotherReducer = (state = initialState, action) => {
  switch (action.type) {
    // 액션 타입에 따른 상태 변경 로직
    default:
      return state;
  }
};

export default anotherReducer; // default export 추가
