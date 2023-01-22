import { useGetArtsQuery } from "./artApi";
import ArtCard from "features/art/artcard";
import MasonryGrid from "components/masonrygrid/masonrygrid";

function ArtList(props) {
  const {
    data: arts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetArtsQuery();

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
    postContent = (
      <MasonryGrid>
        {arts.map((item) => {
          return <ArtCard item={item} onClick={props.onClick} />;
        })}
      </MasonryGrid>
    );
  } else if (isError) {
    postContent = (
      <div className="alert alert-danger" role="alert">
        {error.status}
      </div>
    );
  }

  return <div>{postContent}</div>;
}
export default ArtList;
