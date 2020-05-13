import { CREATE_MEMO, UPDATE_MEMO, DELETE_MEMO, LOADING_TRUE, LOADING_FALSE } from '../constants/MemoConstant';
import MEMOS from '../data/dummy-data';
import Memo from '../models/Memo';

const initialState = {
  Memo: [],
  LoadingTrue: false,
  LoadingFalse: false
}

export function MemoReducer (state = initialState, action) {
  switch (action.type) {
    case CREATE_MEMO:
      const newMemo = new Memo(
        action.id,
        action.name,
        action.wilayah,
        action.nik,
        action.nama,
        action.birthdate,
        action.kelamin,
        action.alamat
      );
      return Object.assign({}, state, {
        Memo: state.Memo.concat(newMemo)
      });
    case UPDATE_MEMO:
      const memoIndex = state.Memo.findIndex(
        memo => memo.id === action.id
      );
      const updatedMemo = new Memo(
        state.Memo[memoIndex].id,
        action.name,
        action.wilayah,
        action.nik,
        action.nama,
        action.birthdate,
        action.kelamin,
        action.alamat
      );
      const updatedMemos = [...state.Memo];
      updatedMemos[memoIndex] = updatedMemo;
      return Object.assign({}, state, {
        Memo: updatedMemos
      });
    case LOADING_TRUE:
      return Object.assign({}, state, {
        LoadingFalse: false,
        LoadingTrue: true
      });
    case LOADING_TRUE:
      return Object.assign({}, state, {
        LoadingTrue: false,
        LoadingFalse: true
      });
    case DELETE_MEMO:
      return Object.assign({}, state, {
        Memo: state.Memo.filter(
          memo => memo.id !== action.id
        )
      });
    default:
      return state
  }
}