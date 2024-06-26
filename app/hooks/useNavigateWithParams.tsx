/**
 * custom hook that allows for navigation
 * with additional query parameters and the ability to remove existing parameters.
 * @returns The `useNavigateWithParams` custom hook is returning an object with a single property
 * `navigateWithParams`, which is a function that can be used to navigate to a specified URL with
 * optional additional parameters to add or remove.
 */
const useNavigateWithParams = () => {
  const generateUrlWithParams = (
    url: string,
    addParams?: { [key: string]: string },
    removeParams?: string[]
  ) => {
    const currentUrl =  new URL(window.location.href);
    const params = new URLSearchParams(currentUrl.search);

    //add params
    for (const key in addParams) {
      params.set(key, addParams[key]);
    }
    // remove params
    removeParams?.forEach((value) => {
      params.delete(value);
    });

    return `${url}?${params}`;
  };

  return { generateUrlWithParams };
};

export default useNavigateWithParams;
