import {useContext} from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.scss'
import { IPropsChildren } from '../../Types/types';
import { GlobalContext } from '../../Contexts/DataContext';

function Layout( { children }: IPropsChildren  ) {
  const { adjustment }: any = useContext(GlobalContext);

  return (
    <div className='container'>
      <Header adjustment={adjustment}/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout