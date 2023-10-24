import {ProjectList} from '@/containers';
import {AppLayout} from '@/layouts';

export default function BoardPage() {
  return (
    <AppLayout useSideBar={false}>
      <ProjectList />
    </AppLayout>
  );
}
