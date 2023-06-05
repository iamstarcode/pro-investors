'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
//import { useViewportSize } from '@mantine/hooks';

//import { useAtom } from 'jotai';
//import { burgerOpenedAtom } from '@/stores';

const CustomLink = ({ href, text }: { href: string; text: string }) => {
  const pathName = usePathname();
  //const [burger, toggle] = useToggle([false, true]);
  //const { width } = useViewportSize();

  // const [burgerOpened, setBurgerOpened] = useAtom(burgerOpenedAtom);

  /*   const handleClick = () => {
    if (width >= 1024) return; //if we are in a bigger screen avoid seeting the burger status
    setBurgerOpened(false);
  };
 */
  return (

    <Link
      className={`${pathName === href ? 'font-semibold' : ''} px-4 py-2 text-lg no-underline text-grey-darkest hover:text-i-secondary-400 ml-6`}
      href={href}
    >
      {text}
    </Link>
  );
};
export default CustomLink;
