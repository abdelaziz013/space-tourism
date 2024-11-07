
import { TecHData } from '../interfaces'
import { TECHNOLOGYDTA } from '../data'
import useGetData from '../utils/hooks/getData'
import { getImageUrl } from '../utils/function'

const Technology = () => {
  const { getItemData, itemData } = useGetData<TecHData>(TECHNOLOGYDTA)

  return (
    <div className="technology__content">

    <div className="technology__content__title title">
      <p><span>03</span>Space launch 101</p>
    </div>
    <div className="container">
        <div className="technology__content__img">
          <img src={getImageUrl(itemData.images.portrait)}/>
        </div>

      <div className="technology__content__desc ">
        <div className="circle__nav flex fl-row-center">
          <ul>
          {TECHNOLOGYDTA.map((item, index) => (
                                <li key={index} onClick={() => getItemData(index)} className={` ${itemData.name === item.name ? "circle__nav--active" : ""}`}>
                                {index+1}

                                  </li>
                            ))}

          </ul>
        </div>
        <div>
          <p className="txt-4 upper-case"> The terminology...</p>
          <p className="txt-3 upper-case">{itemData.name}</p>
          <p className="txt-9">{itemData.description}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Technology