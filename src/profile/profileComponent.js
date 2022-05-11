import { PropTypes } from "prop-types";
const Profile = (props) => {
  const styleObject = {
    background:
      " linear-gradient(45deg, hsl(89, 13%, 51%) 0%, rgba(46,51,112,1) 50%, rgba(0,250,255,1) 50%)",
    width: "700px",
    display: "flex",
    flexDirection: "column",
    marginLeft: "400px",
    paddingBottom: "60px",
  };
  return (
    <div>
      <section style={styleObject}>
        <h1> {props.fullName}</h1>
        <h1> {props.bio} </h1>
        <h1> {props.profession} </h1>
        <button
          style={{ width: "100px", marginLeft: "300px", marginBottom: "20px" }}
          onClick={() => props.handleName(" my name is " + props.fullName)}
        >
          ClickMe
        </button>
        <div> {props.children}</div>
      </section>
    </div>
  );
};
// Set default props
Profile.defaultProps = {
  fullName: "16",
  bio: "nothing",
  profession: "also nothing",
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
export default Profile;
