import MyApp from "../_app";
import AboutPuja from "./aboutpuja";
import AboutUs from "./aboutus";
import PujaList from "./pujalist";
import Search from "./search";

export default function HomeContent() {
    return (
      <>
        <MyApp Component={Search} />
        <MyApp Component={PujaList} />
        <MyApp Component={AboutUs} />
        <MyApp Component={AboutPuja} />
      </>
    )
}