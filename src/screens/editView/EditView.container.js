import { connect } from 'react-redux';
import { UpdateMemo, DeleteMemo } from '../../actions/MemoAction';
import EditViewUI from './EditView.ui';

const mapStateToProps = (props) => {
  const { Memo } = props.MemoReducer
  return {
    Memo: Memo
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateMemo: (id, name, wilayah, nik, nama, birthdate, kelamin, alamat) => dispatch(UpdateMemo(id, name, wilayah, nik, nama, birthdate, kelamin, alamat)),
    DeleteMemo: (id) => dispatch(DeleteMemo(id))
  };
}

const EditViewContainer = connect(mapStateToProps, mapDispatchToProps)(EditViewUI);

export default EditViewContainer;