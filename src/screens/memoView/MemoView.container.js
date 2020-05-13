import { connect } from 'react-redux';
import { UpdateMemo, DeleteMemo } from '../../actions/MemoAction';
import MemoViewUI from './MemoView.ui';

const mapStateToProps = (props) => {
  const { Memo } = props.MemoReducer
  return {
    Memo: Memo
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateMemo: (id, name, content) => dispatch(UpdateMemo(id, name, content)),
    DeleteMemo: (id) => dispatch(DeleteMemo(id))
  };
}

const MemoViewContainer = connect(mapStateToProps, mapDispatchToProps)(MemoViewUI);

export default MemoViewContainer;