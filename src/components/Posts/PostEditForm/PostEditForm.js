import { useState } from "react";
import { StyledTextArea ,StyledButton} from "../..";

function PostEditForm({ content, onConfirm }) {
  const [editableContent, setEditableContent] = useState(content);

  return (
    <>
      <StyledTextArea
        value={editableContent}
        onChange={(e) => setEditableContent(e.target.value)}
        margin="9px 0px 0px 14px"
        height="70px">
        {content}
      </StyledTextArea>
      <StyledButton
        style={{position: "relative",
        left: "550px"}}
        onClick={() => onConfirm({ editableContent })}  
      >
        Save
      </StyledButton>
    </>
  );
}

export default PostEditForm;
