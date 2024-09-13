import { StateProps } from '@/types/Interfaces/userData';
import Schedule from '@/views/Authentication/TribalHealth/Schedule';

export default async function () {
  const data: StateProps = await fetchUser();
  return (
    <>
      <Schedule userData={data} />
    </>
  );
}
const fetchUser = async () => {
  const userData = await fetch(
    'https://randomuser.me/api/?results=15&nat=us,gb&gender=male',
  );
  const data: StateProps = await userData.json();
  return data;
};
