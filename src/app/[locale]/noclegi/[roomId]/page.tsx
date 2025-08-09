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

export default async function RoomPage({
  params,
}: {
  params: { roomId: string; locale: string };
}) {
  const { roomId } = params;

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
