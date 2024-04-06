import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"

const InfoCard = ({name}) => {

  return (

<div >
    <div class="p-5">
        <h5 class="mb-2 text-xl text-center  font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
    </div>
</div>


  )
}
export default InfoCard