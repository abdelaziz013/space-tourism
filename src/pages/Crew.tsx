import { CrewData } from '../interfaces'
import { CREWDATA } from '../data'
import useGetData from '../utils/hooks/getData'
import { getImageUrl } from '../utils/function'
const Crew = () => {
    const { getItemData, itemData } = useGetData<CrewData>(CREWDATA)
    return (
        <div className="crew__content">
            <div className="crew__content__title title">
                <p><span>02</span>Meet your crew</p>
            </div>
            <div className="container">
                <div className="crew__content__desc">
                    <p className="txt-4 upper-case">{itemData.role}</p>
                    <p className="txt-3 upper-case">{itemData.name}</p>
                    <p className="txt-9">{itemData.bio}</p>
                    <div className="w-100 flex fl-row fl-row-center nav__container">
                        <ul className="dotted-nav">
                            {CREWDATA.map((item, index) => (
                                <li key={index} onClick={() => getItemData(index)} className={` ${itemData.name === item.name ? "dotted-nav--active" : ""}`}></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="crew__content__img flex fl-row-center fl-row">
                    <div className="crew__content__img--container">
                        <img src={getImageUrl(itemData.images.png)} alt="Douglas-hurly" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Crew