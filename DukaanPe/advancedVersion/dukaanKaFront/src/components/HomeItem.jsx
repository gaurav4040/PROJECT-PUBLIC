import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice"; 
import {GrAddCircle} from "react-icons/gr"
import {AiFillDelete} from "react-icons/ai"

const HomeItem = ({item}) => {
    
    const dispatch= useDispatch();
    const bagItem = useSelector(store=>store.bag);

    const handleAddToBag=()=>{
        dispatch(bagAction.addToBag(item.id));
    }
    const handleRemoveFromBag=()=>{
        dispatch(bagAction.removeFromBag(item.id));
    }
    return (
        <div className="item-container">
            <img className="item-image" src={item.image} alt="item image" />
            <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">({item.discount_percentage}% OFF)</span>
            </div>
            
            {
            bagItem.indexOf(item.id)>=0 
            
            ? 
            
            <button type="button" className="btn btn-add-bag btn-danger" onClick={handleRemoveFromBag}><AiFillDelete /> Remove from bag</button> 
            
            :
        
            <button type="button" className="btn btn-add-bag btn-success" onClick={handleAddToBag}><GrAddCircle /> Add to Bag</button>
            }
        </div>
    )
};

export default HomeItem;