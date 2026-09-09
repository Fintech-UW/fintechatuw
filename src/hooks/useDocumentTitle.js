import { useEffect } from "react";

const DEFAULT_TITLE = "Fintech@UW | University of Wisconsin–Madison";
const DEFAULT_DESCRIPTION =
  "Fintech@UW is a student organization at UW–Madison exploring the intersection of finance and technology through workshops, events, and community.";

export default function useDocumentTitle(title, description = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Fintech@UW` : DEFAULT_TITLE;
    document.title = fullTitle;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", description);
    }

    return () => {
      document.title = DEFAULT_TITLE;
      if (descriptionTag) {
        descriptionTag.setAttribute("content", DEFAULT_DESCRIPTION);
      }
    };
  }, [title, description]);
}
