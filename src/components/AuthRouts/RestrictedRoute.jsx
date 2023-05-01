import { formatISO } from 'date-fns';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/auth.selectors';
import { selectCurrentMonth } from 'redux/calendar/calendar.selectors';

export const RestrictedRoute = () => {
  const token = useSelector(selectAuthToken);
  const currentDate = useSelector(selectCurrentMonth);

  return token ? (
    <Navigate
      to={`/calendar/month/${formatISO(new Date(currentDate), {
        representation: 'date',
      })}`}
    />
  ) : (
    <Outlet />
  );
};
