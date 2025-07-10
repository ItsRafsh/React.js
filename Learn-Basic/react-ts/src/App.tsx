import Welcome from "./Components/Welcome";
import HeaderCostum from "./Components/HeaderCustom";
import ProfileCard from "./Components/ProfileCard";

type Teacher = {
  name: string;
  job: string;
  year: number;
  id?: number;
}

const teachers : Teacher[] = [
  {
    job: 'Dosen',
    name: 'haris',
    year: 2006,
    id: 1
  },
  {
    job: 'Editor',
    name: 'hardi',
    year: 1980,
    id: 2
  },
  {
    job: 'engineer',
    name: 'Rafa',
    year: 2006,
    id: 3
  },
  {
    job: 'Penganguran',
    name: 'hokowi',
    year: 1950,
    id: 4
  },
];
// Component
function App() {
  return (
    <>
      <HeaderCostum/>
      <h1>hello world</h1>
      <div style={{gap: "8px", display: 'flex', flexDirection: 'row'}}>
        {teachers.map((teacher) => {
          return (
            <ProfileCard 
            name={teacher.name} 
            year={teacher.year} 
            job={teacher.job}
            key={teacher.id}/>
          );
        })}
      </div>
      <Welcome/>
    </>
  )
}

export default App
