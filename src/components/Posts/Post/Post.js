import { useState } from "react";
import { StyledAvatar,PostHeader,PostContent,PostEditForm,PostWrapper} from "../..";

function Post({ post, onEdit, onDelete }) {
  const [editMode, setEditMode] = useState(false);

  const handlePostEdit = (editedContent) => {
    onEdit(post.id, editedContent);
    setEditMode(false);
  };

  const displayedContent = editMode ? (
    <PostEditForm content={post.content} onConfirm={handlePostEdit} />
  ) : (
    <PostContent content={post.content} />
  );

  return (
      <PostWrapper >
          <StyledAvatar/>
          <div>
            <PostHeader  onDelete={onDelete} setEditMode={setEditMode} id={post.id}/>
            {displayedContent}
          </div>
      </PostWrapper>
  );
}

export default Post;
