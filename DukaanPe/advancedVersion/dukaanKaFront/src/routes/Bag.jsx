import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
     
    const bagItem = useSelector(store=>store.bag);
        const items = useSelector(store=>store.items);
        const finalItems = items.filter(item=>{
            const itemIndex = bagItem.indexOf(item.id);
            return itemIndex>=0;
        });

    return (
            <main>
                <div className="bag-page">
                    <div className="bag-items-container">
                        {finalItems.map((item)=><BagItem key={item.id} item={item} />)}
                    </div>
                    <BagSummary />
                </div>
            </main>
    )
};
export default Bag;