import { connect } from 'react-redux';
import { UpdateMemo, DeleteMemo } from '../../actions/MemoAction';
import WelcomeUI from './Welcome.ui';

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

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(WelcomeUI);

export default WelcomeContainer;