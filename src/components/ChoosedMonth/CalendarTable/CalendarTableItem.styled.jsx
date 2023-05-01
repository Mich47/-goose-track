import styled from 'styled-components';
import { TASK_PRIORITY } from 'constants/taskPriority.constants';

export const DaysOfMonth = styled.div`
  position: absolute;
  top: 8px;
  right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 4px 6px;

  border-radius: 6px;
`;

export const Today = styled(DaysOfMonth)`
  background-color: var(--accent-background-color);
  color: var(--primary-background-color);
`;
export const BoxTasks = styled.ul`
  width: 100%;
  height: 100%;
  padding-top: 27px;
  padding-bottom: 1px;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(auto, 20px);
  grid-gap: 2px;
`;

export const Task = styled.li`
  display: grid;
  align-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(auto, 10px);

  width: 95%;
  padding: 0 4px;
  background: var(
    ${props => {
      if (props.priority === TASK_PRIORITY.medium) {
        return '--priority-medium-bg-color';
      }
      if (props.priority === TASK_PRIORITY.high) {
        return '--priority-high-bg-color';
      }
      return '--priority-low-bg-color';
    }}
  );
  border-radius: 8px;
`;

export const Title = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1;

  color: var(
    ${props => {
      if (props.priority === TASK_PRIORITY.medium) {
        return '--task-priority-medium-color';
      }
      if (props.priority === TASK_PRIORITY.high) {
        return '--task-priority-high-color';
      }
      return '--task-priority-low-color';
    }}
  );
`;
