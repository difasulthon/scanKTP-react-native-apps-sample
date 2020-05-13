import { connect } from 'react-redux';
import { UpdateMemo, DeleteMemo, CreateMemo, LoadingTrue, LoadingFalse } from '../../actions/MemoAction';
import CameraUI from './Camera.ui';

const mapStateToProps = (props) => {
  const { Memo, LoadingTrue, LoadingFalse } = props.MemoReducer
  return {
    Memo: Memo,
    LoadingTrue: LoadingTrue,
    LoadingFalse: LoadingFalse
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateMemo: (id, name, content) => dispatch(UpdateMemo(id, name, content)),
    DeleteMemo: (id) => dispatch(DeleteMemo(id)),
    CreateMemo: (id, content) => dispatch(CreateMemo(id, content)),
    LoadingTrue: () => dispatch(LoadingTrue()),
    LoadingFalse: () => dispatch(LoadingFalse())
  };
}

const CameraContainer = connect(mapStateToProps, mapDispatchToProps)(CameraUI);

export default CameraContainer;