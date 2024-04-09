
import PaidPlansListComponent from '../components/PaidPlansListComponent'
import { useSelector } from 'react-redux';

const PaidPlansList = () => {
  const user = useSelector((state) => state?.user?.userFound); 
  return (
    <div>
      <PaidPlansListComponent user={user} />
      
    </div>
  )
}

export default PaidPlansList
