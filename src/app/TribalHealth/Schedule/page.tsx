import { StateProps } from '@/types/Interfaces/userData';
import ScheduleView from '@/views/Authentication/TribalHealth/Schedule';

export default async function Schedule() {
  const data: StateProps = await fetchUser();
  return (
    <>
      <ScheduleView userData={data} />
    </>
  );
}

const fetchUser = async () => {
  const userData = await fetch(
    'https://randomuser.me/api/?results=13&nat=us,gb&gender=male',
  );
  const data: StateProps = await userData.json();
  return data;
};
