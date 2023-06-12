//////////////
//      This component will find if there are two or more links in the information filled in the inpur field and if so show alert if not
//      then will use react-linkify package to make the links clickable in the tags
//////////////
import { useState } from "react";
import ReactLinkify from "react-linkify";
function LinkAnalyzer() {
  const [content, setContent] = useState("");
  //   const [links, setLinks] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const context = e.target.context.value;
    const uniqueLinks = extractUniqueLinksFromParagraph(context);

    if (uniqueLinks.length > 2) {
      return alert("More than 2 links provided!");
    } else {
      setContent(context);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="context" />
        <button type="submit">Submit</button>
      </form>

      {/* <p></p> */}
      <ReactLinkify
        properties={{
          target: "_blank",
        }}
      >
        {content}
      </ReactLinkify>
    </div>
  );
}
function extractUniqueLinksFromParagraph(paragraph) {
  const linkRegex =
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;
  const matches = paragraph.match(linkRegex);

  if (!matches) {
    return [];
  }

  const uniqueLinks = Array.from(new Set(matches));
  return uniqueLinks;
}

export default LinkAnalyzer;
