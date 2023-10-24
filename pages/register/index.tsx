import {Register as RegisterContainer} from '@/containers';
import {AppLayout} from '@/layouts';

export default function Register() {
  return (
    <AppLayout useSideBar={false}>
      <RegisterContainer />
    </AppLayout>
  );
}
