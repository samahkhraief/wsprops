import "./App.css";
import Profile from "./profile/profileComponent";
import pic from "./pic.jpg";
function App() {
  const handleName = (fullName) => alert(fullName);
  return (
    <div className="App">
      <Profile
        fullName="Samah Khraief"
        bio="my bio"
        profession="my profession"
        handleName={handleName}
      >
        {" "}
        <img src={pic} alt="cat" />{" "}
      </Profile>
    </div>
  );
}

export default App;
