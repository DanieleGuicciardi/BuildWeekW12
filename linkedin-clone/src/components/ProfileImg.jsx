import { Image } from "react-bootstrap";

const ProfileImg = ({ myProfile }) => {
  return (
    <Image
      src={
        myProfile.image
          ? myProfile.image // Usa l'immagine dal profilo se disponibile
          : "https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" // Immagine di default
      }
      roundedCircle
      style={{
        border: "4px solid white",
        width: "120px",
        height: "120px",
        objectFit: "cover",
      }}
    />
  );
};

export default ProfileImg;
