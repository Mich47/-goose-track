import {
  TaskToolbarButton,
  TaskToolbarList,
  ToolbarSvg,
} from './TaskToolbar.styled';
import icons from 'images/sprite.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TaskModal } from '../../TaskModal/TaskModal';
import {
  deleteTaskOperation,
  editTaskOperation,
} from '../../../redux/calendar/calendar.operations';
import { TASK_STATUS } from '../../../constants/taskStatus.constants';

export const TaskToolbar = props => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const NextStatus = currentStatus => {
    const currentIndex = TASK_STATUS.findIndex(
      status => status.name === currentStatus
    );

    if (currentIndex === -1 || currentIndex === TASK_STATUS.length - 1) {
      return null;
    }

    return TASK_STATUS[currentIndex + 1].name;
  };

  const handleMoveToNextStatus = currStatus => {
    const status = NextStatus(props.status);
    if (status) {
      const payload = { ...props, status };
      dispatch(editTaskOperation(payload));
    }
  };

  const handleDelete = () => {
    dispatch(deleteTaskOperation(props._id));
  };

  return (
    <>
      <TaskToolbarList>
        <li>
          <TaskToolbarButton type="button" onClick={handleMoveToNextStatus}>
            <ToolbarSvg>
              <use xlinkHref={`${icons}#task-move-sf`}></use>
            </ToolbarSvg>
          </TaskToolbarButton>
        </li>
        <li>
          <TaskToolbarButton type="button" onClick={handleShowModal}>
            <ToolbarSvg>
              <use xlinkHref={`${icons}#task-edit-sf`}></use>
            </ToolbarSvg>
          </TaskToolbarButton>
        </li>
        <li>
          <TaskToolbarButton type="button" onClick={handleDelete}>
            <ToolbarSvg>
              <use xlinkHref={`${icons}#task-trash-sf`}></use>
            </ToolbarSvg>
          </TaskToolbarButton>
        </li>
      </TaskToolbarList>

      {showModal && (
        <TaskModal
          editMode={true}
          handleCloseModal={handleCloseModal}
          {...props}
        />
      )}
    </>
  );
};
