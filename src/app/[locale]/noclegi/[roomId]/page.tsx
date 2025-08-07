import HeroRooms from '@/components/HeroRooms';
import { notFound } from 'next/navigation';
import RoomTabs from '@/components/RoomTabs';
import LayoutWrapper from '@/components/LayoutWrapper';

const VALID_ROOMS = [
  'chaber',
  'dziewanna',
  'lawenda',
  'mak',
  'malwa',
  'niezapominajka',
  'roza',
];

type RoomPageProps = {
  params: Awaited<{
    roomId: string;
    locale: string;
  }>;
};



export default async function RoomPage({ params }: RoomPageProps) {
    
  const { roomId } = await params; // ✅ obbligatorio in Next.js 15

  if (!VALID_ROOMS.includes(roomId)) {
    notFound();
  }

  return (
    <>
      <HeroRooms roomId={roomId} />
      <LayoutWrapper>
        <RoomTabs roomId={roomId} />
      </LayoutWrapper>
    </>
  );
}
