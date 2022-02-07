import React, { useEffect, useState } from "react";
import Header from "../components/Header";
// import { Get } from "../Axios/AxiosFunctions";
// import { apiUrl, BaseURL } from "../Config/apiUrl";
// import HelmetComponent from "../components/HelmetComponent";

import RiderSafety from "../components/RiderSafety"
import DogtarForBusiness from "../components/DogtarForBusiness"
import BestResturants from "../components/BestResturants"
import MostPopularInYourCity from "../components/MostPopular"
import SpanishFlip from "../components/SpanishFlip"
import TrackOrderWithApp from "../components/TrackOrderWithApp"
import TeamDogtor from "../components/TeamDogtor"
import Footer from "../components/Footer"

import {
  Pet, Resturant, Market, Pharmacy, Whatever, Stores,
  BestResturant1,
  BestResturant2,
  BestResturant3,
  BestResturant4,
  BestResturant5,

  // Stores
  BestStore1,
  BestStore2,
  BestStore3,
  BestStore4,
  BestStore5,

  // Pets
  BestPet1,
  BestPet2,
  BestPet3,
  BestPet4,
  BestPet5,

  // Supermarkets
  BestSupermarket1,
  BestSupermarket2,
  BestSupermarket3,
  BestSupermarket4,
  BestSupermarket5,

  // Pharmacies
  BestPharmacy1,
  BestPharmacy2,
  BestPharmacy3,
  BestPharmacy4,
  BestPharmacy5,

  //  Fancy
  Fancy1,
  Fancy2,
  Fancy3,
  Fancy4,
  Fancy5

} from "../constant/imagePath"


const HomePage = (props) => {
  // variables and states
  // const isLogin = useSelector((state) => state.authReducer.isLogin);
  // const ApiURL = BaseURL(
  //   `cms/pages?pages=home&service=${true}&all=${false}&source=true&seo=true`
  // );
  // const [blurLoader, setBlurLoader] = useState(false);
  // const [dataList, setDataList] = useState([]);

  // functions
  // ==== getPageData ===
  // const getPageData = async () => {
  //   setBlurLoader(true);
  //   const responseData = await Get(ApiURL);
  //   if (responseData !== undefined) {
  //     setDataList(responseData?.data?.data);
  //   } else {
  //     setDataList([]);
  //   }
  //   setBlurLoader(false);
  // };

  useEffect(() => {
    // getPageData();
  }, []);


  const data = [
    {
      title: 'Los mejores restaurantes',
      items: [
        { image: BestResturant1, title: 'McDonald’s' },
        { image: BestResturant2, title: 'Taco Bell' },
        { image: BestResturant3, title: 'Sushi Mix' },
        { image: BestResturant4, title: 'Ginos' },
        { image: BestResturant5, title: 'Aloha Poke' },
      ]
    },
    {
      title: 'Los mejores Supermercados',
      items: [
        { image: BestSupermarket1, title: 'Carrefour' },
        { image: BestSupermarket2, title: 'El corte ingles' },
        { image: BestSupermarket3, title: 'Mercadona' },
        { image: BestSupermarket4, title: 'Supercor' },
        { image: BestSupermarket5, title: 'Lidl' },
      ]
    },
    {
      title: 'Las mejores Tiendas',
      items: [
        { image: BestStore1, title: 'FNAC' },
        { image: BestStore2, title: 'El corte ingles' },
        { image: BestStore3, title: 'Inditex' },
        { image: BestStore4, title: 'Primark' },
        { image: BestStore5, title: 'Mr Wonderful' },
      ]
    },
    {
      title: 'Lo mejor en Mascotas',
      items: [
        { image: BestPet1, title: 'Cuidadog' },
        { image: BestPet2, title: 'Agendog' },
        { image: BestPet3, title: 'Deliveredog' },
        { image: BestPet4, title: 'MyVET' },
        { image: BestPet5, title: 'Rocky Shop' },
      ]
    },
    {
      title: 'Las mejores Farmacias',
      items: [
        { image: BestPharmacy1, title: '24 Horas' },
        { image: BestPharmacy2, title: 'De turno ' },
        { image: BestPharmacy3, title: 'Para bebes' },
        { image: BestPharmacy4, title: 'Sin recetas' },
        { image: BestPharmacy5, title: 'Cuidado personal' },
      ]
    },
    {
      title: 'Lo que se te antoje',
      items: [
        { image: Fancy1, title: 'Un anillo de boda' },
        { image: Fancy2, title: 'Escapada ' },
        { image: Fancy3, title: 'Un chef personal' },
        { image: Fancy4, title: 'Sorprendeme' },
        { image: Fancy5, title: 'Experiencias' },
      ]
    }
  ]

  const circleCardsData = [
    { image: Resturant, title: 'Restaurantes', data: data[0] },
    { image: Stores, title: 'Tiendas', data: data[2] },
    { image: Market, title: 'Market', data: data[1] },
    { image: Pet, title: 'Mascotas', data: data[3] },
    { image: Pharmacy, title: 'Farmacia', data: data[4] },
    { image: Whatever, title: 'Lo que sea', data: data[5] },
  ]


  const [selectedData, setSelectedData] = useState(data[0])


  return (
    <>
      <Header />
      <SpanishFlip circleCardsData={circleCardsData} setSelectedData={setSelectedData} />
      <BestResturants data={selectedData} />
      <MostPopularInYourCity />
      <TrackOrderWithApp />
      <DogtarForBusiness />
      <TeamDogtor />
      <RiderSafety />
      <Footer />
    </>
  );
};

export default HomePage;
