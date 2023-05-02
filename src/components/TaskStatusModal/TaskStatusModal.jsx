import { Modal } from '../Modal/Modal';
import { TASK_STATUS } from '../../constants/taskStatus.constants';
import icons from 'images/sprite.svg';
import * as STC from './TaskStatusModal.styled';
import { useDispatch } from 'react-redux';
import { editTaskOperation } from '../../redux/calendar/calendar.operations';

export const TaskStatusModal = ({
  editRef,
  handleCloseStatusModal,
  ...props
}) => {
  const dispatch = useDispatch();

  const currentStatus = props.status;
  const filteredStatuses = TASK_STATUS.filter(
    status => status.name !== currentStatus
  );

  const handleStatusClick = status => {
    const payload = { ...props, status };
    dispatch(editTaskOperation(payload));
  };

  return (
    <>
      <Modal
        onClose={handleCloseStatusModal}
        isCloseBtn={false}
        editRef={editRef}
      >
        <STC.Ul>
          {filteredStatuses.map(status => (
            <li key={status.id}>
              <STC.Button
                type="button"
                onClick={() => handleStatusClick(status.name)}
              >
                {status.name}
                <STC.Svg>
                  <use xlinkHref={`${icons}#task-move-sf`}></use>
                </STC.Svg>
              </STC.Button>
            </li>
          ))}
        </STC.Ul>
      </Modal>
    </>
  );
};
