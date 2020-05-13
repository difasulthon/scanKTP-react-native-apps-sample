import { connect } from 'react-redux';
import { UpdateMemo, DeleteMemo, CreateMemo } from '../../actions/MemoAction';
import ImageCropPickerUI from './ImageCropPicker.ui';

const mapStateToProps = (props) => {
  const { Memo } = props.MemoReducer
  return {
    Memo: Memo
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateMemo: (id, name, content) => dispatch(UpdateMemo(id, name, content)),
    DeleteMemo: (id) => dispatch(DeleteMemo(id)),
    CreateMemo: (id, content) => dispatch(CreateMemo(id, content))
  };
}

const ImageCropPickerContainer = connect(mapStateToProps, mapDispatchToProps)(ImageCropPickerUI);

export default ImageCropPickerContainer;