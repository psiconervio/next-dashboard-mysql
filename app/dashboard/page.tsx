// app/dashboard/page.jsx
import Weather from '../components/weather';
import UserList from '../components/UserList';
import  headernav  from "../components/headernav";
export default function PageDashboard() {
  return (

      <><p>Página Dashboard</p><Weather /><UserList />   </>
    
  );
}
