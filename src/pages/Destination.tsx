import { DESTDATA } from '../data';
import { getImageUrl } from '../utils/function';
import useGetData from '../utils/hooks/getData';
import { DestData } from '../interfaces';
const Destination = () => {
  const {getItemData,itemData}=useGetData<DestData>(0,DESTDATA)
  return (
    <div className="dest__content">
      <p className="title"><span>01</span>Pick your destination</p>
      <div className="container">
        <div className="dest__content--img-wrapper">
          <div className="dest__content__img--moon">
            <div>
              <img src={getImageUrl(itemData.images.png)} alt="moon-img" />
            </div>
          </div>
        </div>
        <div className="dest__content--desc-wrapper">
          {/* dest nav */}
          <ul className="dest_nav">
            {DESTDATA.map((item, index) => (
              <li key={index} onClick={() =>getItemData(index)} className={`dest_nav__list ${itemData.name === item.name ? "dest_nav__list--active" : ""}`}>{item.name}</li>
            ))}
          </ul>
          <div className="dest__content__description">
            <p className="txt-1 upper-case">{itemData.name}</p>
            <p className="txt-9"> {itemData.description}.</p>
          </div>
          <div className="dest__content__description--dest-time">
            <div className="dest__content__description--distance">
              <p className="txt-7 upper-case"> Avg. distance</p>
              <p className="txt-6 upper-case">{itemData.distance}</p>
            </div>
            <div className="dest__content__description--time">
              <p className="txt-7 upper-case">  Est. travel time</p>
              <p className="txt-6 upper-case"> {itemData.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Destination