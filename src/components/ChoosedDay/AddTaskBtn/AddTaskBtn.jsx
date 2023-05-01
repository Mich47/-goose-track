import { Button, AddTask, Plus } from './AddTaskBtn.styled';
import { TaskModal } from '../../TaskModal/TaskModal';
import { useState } from 'react';

export const AddTaskBtn = ({ status }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button type="button" onClick={handleShowModal}>
        <Plus>+</Plus>
        <AddTask>Add task</AddTask>
      </Button>

      {showModal && (
        <TaskModal handleCloseModal={handleCloseModal} status={status} />
      )}
    </>
  );
};
