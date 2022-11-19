import { useEffect } from "react";

// When directed or redirected to another page, the browser tab title will "title" where you are to help your navigation
const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    return () => (document.title = prevTitle);
  }, [title]);
};

export default useTitle;
