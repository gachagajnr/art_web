import { useGetArtQuery } from "./artApi";
import ArtDetailsCard from "./artDetailsCard";

function ArtDetails(props) {
  const {
    data: art,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetArtQuery(props._id);

  let postContent;
  if (isLoading) {
    postContent = (
      <div className="d-flex justify-content-center p-t 15">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (isSuccess) {
    postContent = <ArtDetailsCard item={art}/>;
  } else if (isError) {
    postContent = (
      <div className="alert alert-danger" role="alert">
        {error.status}
      </div>
    );
  }

  return <div>{postContent}</div>;
}
export default ArtDetails;
