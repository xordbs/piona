import {createSlice} from '@reduxjs/toolkit';

// store -> root reducer(state) -> user slice
// state.user.id

// action: state를 바꾸는 행위/동작
// dispatch: 그 액션을 실제로 실행하는 함수
// reducers: 액션이 실제로 실행되면 state를 바꾸는 로직

const initialState = {
  name: '',
  id: '',
  nickname: '',
  phoneNumber: '',
  accessToken: '',
  refreshToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.nickname = action.payload.nickname;
      state.phoneNumber = action.payload.phoneNumber;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
  extraReducers: builder => {},
});

export default userSlice;
