
import Profile from '../Profile/Profile'; 
import css from './App.module.css';
import userData from '../userData/userData.json'; 

export default function App() {
  return (
    <div>
      <Profile
        className={css.profileStyle}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}

