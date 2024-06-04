import { MainPage } from '@/pageComponents/MainPage/MainPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lumia',
  description: 'Lumia',
};

export default function Main() {
  return <MainPage />;
}
