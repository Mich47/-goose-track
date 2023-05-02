import {
  TaskToolbarButton,
  TaskToolbarList,
  ToolbarSvg,
} from './TaskToolbar.styled';
import icons from 'images/sprite.svg';
import { createRef, useState } from 'react';
import { TaskModal } from '../../TaskModal/TaskModal';
import { TaskDelete } from 'components/TaskDelete/TaskDelete';
import { TaskStatusModal } from 'components/TaskStatusModal/TaskStatusModal';

export const TaskToolbar = props => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [editElement, setEditElement] = useState(null);
  const editRef = createRef();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const handleCloseStatusModal = () => {
    setShowStatusModal(false);
  };

  return (
    <>
      <TaskToolbarList>
        <li>
          <TaskToolbarButton
            type="button"
            ref={editRef}
            onClick={() => {
              // Розміри і координати поточного елементи
              const element = editRef.current.getBoundingClientRect();
              // Якщо відстань зліва + 165px > за ширину екрану
              // то зменшуємо на 145, інакше відстань зліва без змін
              const elemLeft =
                element.left + 165 > window.innerWidth
                  ? element.left - 145
                  : element.left;
              setEditElement({ top: element.top + 24, left: elemLeft });
              setShowStatusModal(true);
            }}
          >
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
          <TaskToolbarButton
            type="button"
            onClick={() => setShowDeleteModal(true)}
          >
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
      {showDeleteModal && (
        <TaskDelete
          handleCloseDeleteModal={handleCloseDeleteModal}
          id={props._id}
        />
      )}
      {showStatusModal && (
        <TaskStatusModal
          editRef={editElement}
          handleCloseStatusModal={handleCloseStatusModal}
          {...props}
        />
      )}
    </>
  );
};
