import {LogIn as LogInContainer} from '@/containers';
import {AppLayout} from '@/layouts';

export default function LogIn() {
  return (
    <AppLayout useSideBar={false} showSignUpButton={true}>
      <LogInContainer />
    </AppLayout>
  );
}
