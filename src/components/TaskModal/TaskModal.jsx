import { Modal } from '../Modal/Modal';
import { TaskForm } from '../TaskForm/TaskForm';

export const TaskModal = ({ status, handleCloseModal, ...props }) => {
  return (
    <>
      <Modal onClose={handleCloseModal}>
        <TaskForm status={status} onClose={handleCloseModal} {...props} />
      </Modal>
    </>
  );
};
