import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item =>item.category === 'dessert');
    const soup = menu.filter(item =>item.category === 'soup');
    const salad = menu.filter(item =>item.category === 'salad');
    const pizza = menu.filter(item =>item.category === 'pizza');
    const offered = menu.filter(item =>item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Marica & Alif Foods | Menu</title>

            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/*main cover*/}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items*/}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items*/}
            <MenuCategory
            items={desserts}
            title="Dessert"
            img={dessertImg}
            ></MenuCategory>
            <MenuCategory items={pizza} title={pizza} img={pizzaImg}></MenuCategory>
        </div>
    );
};

export default Menu;